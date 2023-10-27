import React, { useState } from 'react'


const frameworks = ['react','angular','vue','svelte'];

const OtherInputs = () => {
    
    const [shipping, setShipping] = useState(false);
    const [framework, setFramework] = useState('react');

    const handleShipping = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);
        setShipping(e.target.checked);
    }

    const handleFramewrok = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setFramework(e.target.value);
    }

  return (
    <div className='wrapper'>
        <form className="form">
            <h4>Other Inputs</h4>
            <div className="form-row" style={{textAlign:'left'}}>
                <label htmlFor="shipping">Free Shipping</label>
                <input type="checkbox" name='shipping' id='shipping' checked={shipping} onChange={handleShipping}/>
            </div>
            <div className="form-row" style={{textAlign:'left'}}>
                <label htmlFor="framework" className='form-label'>
                    Framework
                </label>
                <select name="framework" id="framework" value={framework} onChange={handleFramewrok}>
                    {frameworks.map((framework) => {
                        return <option key={framework}>{framework}</option>
                    })}
                </select>
            </div>
            <button type='submit' className='btn btn-block'>
                submit
            </button>
        </form>
    </div>
  )
}

export default OtherInputs