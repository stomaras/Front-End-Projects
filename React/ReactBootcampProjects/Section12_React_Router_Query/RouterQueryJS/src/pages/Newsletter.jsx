import axios from "axios";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

/*with loaders we handle data before page gets loaded , in the actions we are handling the form submission */

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({request}) => {
  console.log(request);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data); 
    toast.success(response.data.msg);
    console.log(response);
    
    return redirect('/');
  }catch(error){
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }

}

const Newsletter = () => {

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form className="form" method="POST">
      <h4 style={{textAlign:'center', marginBottom:"2rem"}}>
        our newsletter
      </h4>
      {/*name*/}
      <div className="form-row">
        <label htmlFor="name" className="form-label">name</label>
        <input type="text" className="form-input" name="name" id="name" required />
      </div>
        {/*lastName*/}
        <div className="form-row">
        <label htmlFor="lastName" className="form-label">lastName</label>
        <input type="text" className="form-input" name="lastName" id="lastName" required />
      </div>
        {/*lastName*/}
        <div className="form-row">
        <label htmlFor="email" className="form-label">email</label>
        <input type="text" className="form-input" name="email" id="email" required />
      </div>
      <button type="submit" className="btn btn-block" style={{marginTop:'0.5rem'}} disabled={isSubmitting}>{isSubmitting ? 'submitting' : 'submit'}</button>
    </Form>
  )
}

export default Newsletter