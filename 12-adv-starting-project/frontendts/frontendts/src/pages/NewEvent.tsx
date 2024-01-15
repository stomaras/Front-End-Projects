import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from 'react-router-dom';

const NewEventPage = () => {

  function submitHanlder(event) {
    event.preventDefault();
  }

  return (
    <EventForm/>
  )
}

export default NewEventPage


export async function action({request, params}) {
  const data = await request.formData();

  const eventData = {
    title:data.get('title'),
    image:data.get('image'),
    date:data.get('date'),
    description:data.get('description'),
  }
  const response = fetch('http://localhost:8080/events', {
    method:'POST',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(eventData)
  });

  if((await response).status === 422){
    return response;
  }

  if(!(await response).ok){
    throw json({message:'could not save event'},{status:500})
  }
  
  return redirect('/events');
}