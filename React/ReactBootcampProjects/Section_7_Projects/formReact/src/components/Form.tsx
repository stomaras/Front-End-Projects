import React, { useState } from 'react'

const Form = () => {

    const [answer, setAnswer] = useState<string>('');
    const [error, setError] = useState<null | any>(null);
    const [status, setStatus] = useState('typing');

    if(status === 'success') {
        return <h1>That's right</h1>
    }
  
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        }catch(err:any) {
            setStatus('typing');
            setError(err);
            setAnswer('');
        }
    }

    const submitForm = (answer:any) => {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'lima'
                if(shouldError) {
                    reject(new Error('Good guess but a wrong answer. Try again!'))
                } else {
                    resolve();
                }
            },1500);
        });
    };

    const handleTextAreaChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=> {
        setAnswer(e.target.value)
    }
  
  
    return (
    <>
        <h2>City Quiz</h2>
        <p>
            In which city there is a billboard that turns air into drinkable water?
        </p>
        <form onSubmit={handleSubmit}>
            <textarea
                value={answer}
                onChange={handleTextAreaChange}
                disabled={status === 'submit'}
            />
                <br />
                <button
                    disabled={
                        answer.length === 0 ||
                        status === 'submit'
                    }
                >
                    submit
                </button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
        </form>
    </>
  )
}

export default Form