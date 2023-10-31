import React, { useEffect, useRef, useState } from 'react'

const UseRefBasics = () => {

    const [value, setValue] = useState(0);
    const refContainer = useRef<HTMLInputElement | null>(null);
    const isMounted = useRef(false);

    useEffect(() => {
        refContainer.current?.focus();
    });

    useEffect(() => {
        console.log(isMounted);
        if(!isMounted.current){
            isMounted.current = true;
            return;  
        }
        console.log('re-render');
    },[value]);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = refContainer.current?.value;
        console.log(name);
    };

  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input type="text" id='name' className='form-input' ref={refContainer} />
            </div>
            <button type='submit' className='btn btn-block'>
                submit
            </button>
        </form>
        <h1>value: {value}</h1>
        <button onClick={() => setValue(value + 1)}>Increase</button>
    </div>
  )
}

export default UseRefBasics