import React, { FormEvent } from 'react'
import { useEffect, useRef, useState } from 'react'

const UseRefBasics = () => {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLInputElement | null>(null);

    // useEffect(() => {
    //    console.log(ref);
    // });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = ref.current?.value;
        console.log(name);
    }

  return (
      <div>
          <form className='form' onSubmit={handleSubmit}>
              <div className='form-row'>
                  <label htmlFor="name" className='form-label'>
                      Name
                  </label>
                  <input
                      type="text"
                      id='name'
                      className='form-input'
                      ref={ref}
                  />
              </div>
              <button type='submit' className='btn btn-block'>
                  Submit
              </button>
          </form>
          <h1>value : {value}</h1>
    </div>
  )
}

export default UseRefBasics