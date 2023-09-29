import React from 'react'

const EventExamples = () => {
  
    const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("form submitted")
    }

    const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`Input name: ${e.target?.name}`);
        console.log(`Input value: ${e.target?.value}`);
    }

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Click me', e);
    }

    return (
    <section>
        <form onSubmit={handleFormSubmission}>
            <h2>Typical Form</h2>
            <input type="text" name='formInput' onChange={handleFormInput} style={{margin:'1rem 0'}}/>
        </form>
        <button type='button'>Click me</button>
        <button type='submit'>submit</button>
        <div>
            <button onClick={handleButtonClick}>
                click me
            </button>
        </div>
    </section>
  )
}

export default EventExamples


/* 
Alternative Approach :
<button type="submit" onClick={handleFormSubmission}>
    submit form
</button>
*/