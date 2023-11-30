import { Form } from "react-router-dom"

/*with loaders we handle data before page gets loaded , in the actions we are handling the form submission */

export const action = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  console.log(formData);
  return null;
}

const Newsletter = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{textAlign:'center', marginBottom:"2rem"}}>
        our newsletter
      </h4>
      {/*name*/}
      <div className="form-row">
        <label htmlFor="name" className="form-label">name</label>
        <input type="text" className="form-input" name="name" id="name" defaultValue="john" required />
      </div>
        {/*lastName*/}
        <div className="form-row">
        <label htmlFor="lastName" className="form-label">lastName</label>
        <input type="text" className="form-input" name="lastName" id="lastName" defaultValue="smith" required />
      </div>
        {/*lastName*/}
        <div className="form-row">
        <label htmlFor="email" className="form-label">email</label>
        <input type="text" className="form-input" name="email" id="email" defaultValue="test@test.com" required />
      </div>
      <button type="submit" className="btn btn-block" style={{marginTop:'0.5rem'}}>Submit</button>
    </Form>
  )
}

export default Newsletter