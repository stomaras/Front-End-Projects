import React, { useState, useTransition } from 'react'

const LatestReact = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState<any>([]);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);

        // slow down cpu
        startTransition(() => {
            const newItems = Array.from({length: 5000}, (_, index) => {
                return (
                    <div key={index}>
                        <img src="../../public/vite.svg" alt="" />
                    </div>
                );
            });
            setItems(newItems);
        })

    }

  return (
    <section>
        <form className="form">
            <input 
                type="text"
                className='form-input'
                value={text}
                onChange={handleChange}
                />
        </form>
        <h4>Items below</h4>
        {isPending ? (
            <h4>Loading...</h4>
         ) : (

            <div
            style={{
                display:'grid',
                gridTemplateColumns:'1fr 1fr 1fr',
                marginTop:'2rem'
            }}
            >
                {items}
            </div>
        )}
    </section>
  )
}

export default LatestReact