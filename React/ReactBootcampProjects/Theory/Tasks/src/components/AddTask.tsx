import React from 'react'

const AddTask = () => {

    const handleAddTask = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log("add Task");
    }

  return (
    <form>
        <input type="text" />
        <button onClick={handleAddTask}>Add</button>
    </form>
  )
}

export default AddTask