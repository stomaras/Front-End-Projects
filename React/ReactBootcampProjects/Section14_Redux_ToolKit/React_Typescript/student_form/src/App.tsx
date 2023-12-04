import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Students from './components/Student'
import { IStudent } from './models/models'

function App() {

  const studentState:IStudent = {
    firstName: '',
    lastName: '',
    email: ''
  }

  const [firstStudent, setFirstStudent] = useState<IStudent>(studentState)


  const addStudent = (student:IStudent) => {
      setFirstStudent(student);
      console.log(student);
  }



  return (
    <>
    <div className='app'>
      <Form handleSubmit={addStudent}/>
      <Students student={firstStudent}/>
    </div>

    </>
  )
}

export default App
