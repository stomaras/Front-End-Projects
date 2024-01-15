import { useNavigate } from 'react-router-dom';
import { Event } from '../models/models';
import classes from './EventForm.module.css';
import { Form } from 'react-router-dom';

export interface EventFormProps {
  method:any;
  event:Event;
}

function EventForm({ method, event }:EventFormProps) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }
localStorage
  return (
    <Form className={classes.form} method='post'>
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
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
