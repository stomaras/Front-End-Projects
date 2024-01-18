import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { createNewEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { queryClient } from '../../util/http.js';

// Note with queryClient.invalidateQueries(), we tell react that the data are fetched from 
// certain requests is outdated now, and must immediate refetch should be triggered

export default function NewEvent() {
  const navigate = useNavigate();

  const {data, mutate, isPending, isError, error} = useMutation({
    mutationFn:createNewEvent,
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:['events']});
      navigate('/events');
    }
  });

  function handleSubmit(formData) {
    mutate({event:formData});
    navigate('/events');
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && 'Submitting...'}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && <ErrorBlock title='Failed to create event' message={error.info?.message || 'Failed to create event.Please check your inputs and try again later.'}/>}
    </Modal>
  );
}
