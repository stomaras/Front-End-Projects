import React, { useState } from 'react'

export interface FormProps {
    addColor: (color:any) => void;
}

const Form = (props:FormProps) => {
    const [color, setColor] = useState('');
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.addColor(color);
        
    }

    const handleChangeColor = (e:React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }

  return (
    <section className='container'>
        <h4>color generator</h4>
        <form className='color-form' onSubmit={handleSubmit}>
            <input type="color" value={color} onChange={handleChangeColor}/>
            <input 
                type="text" 
                value={color} 
                onChange={handleChangeColor}
                placeholder='#f15025'    
            />
            <button className='btn' type='submit' style={{background:color}}>Submit</button>
        </form>
    </section>
  )
}

export default Form