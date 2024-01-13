import React from 'react'
import { Link } from 'react-router-dom'
import EventsList from "../components/EventsList";
import { useLoaderData } from 'react-router-dom';


const EventsPage = () => {

    const events = useLoaderData() as Event[];    
  return (
    <>
        <EventsList events={events}/>;
    </>
  )
}

export default EventsPage;

export async function loader() {
        const response = await fetch('http://localhost:8080/events');
        if(!response.ok){
          //...
        }else {
          const respData = await response.json();
          return respData.events;
        }
}
