import { useNavigate, useNavigation, useActionData } from 'react-router-dom';
import { Event } from '../models/models';
import classes from './EventForm.module.css';
import { Form } from 'react-router-dom';

export interface EventFormProps {
  method:any;
  event:Event;
}

function EventForm({ method, event }:EventFormProps) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  // give us access to the data returned by our action
  // so in the event form i get this data object here 
  // in i get a response in an action this response ia automatically parsed by the react router for me, 
  const data = useActionData();

  const isSubmitting = navigation.state === 'submitting';


  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form className={classes.form} method='post'>
      {data && data.errors && <ul>
        {Object.values(data.errors).map((err) => {
           return <li key={err}>{err}</li>
        })}
      </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...':'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
