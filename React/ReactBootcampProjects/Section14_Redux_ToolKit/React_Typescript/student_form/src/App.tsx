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

  const [initialStudent, setInitialStudent] = useState<IStudent>(studentState)


  const addStudent = (student:IStudent) => {
      setInitialStudent(student);
  }



  return (
    <>
    <div className='app'>
      <Form handleSubmit={addStudent}/>
      <Students student={initialStudent}/>
    </div>

    </>
  )
}

export default App
