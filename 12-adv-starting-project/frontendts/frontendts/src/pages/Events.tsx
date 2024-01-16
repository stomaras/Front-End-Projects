import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import { Event } from '../models/models';


export interface EventsResponse {
    type: string;
    url: string;
    redirected: boolean;
    status: number;
    ok: boolean;
    statusText: string;
    headers: Headers; // Assuming Headers is a class or type that you want to use
    body: ReadableStream;
    bodyUsed: boolean;        
}

const EventsPage = () => {

    const {events}= useLoaderData();
    
    // const events = data.events
  return (
  <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
    <Await resolve={events}>
      {(loadedEvents) => <EventsList events={loadedEvents}/>}
    </Await>
  </Suspense>
  
  )
}

export default EventsPage;

// 1st step to defer
async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');
  if(!response.ok){
      throw new Response(JSON.stringify({message:'Could not fetch events.'}), {
          status:500
      })
  }else {
    const resData = await response.json();
    return resData.events;
  }
}

// loadEvents() it must return a promise and we store that promise under the events key in this object
// 2nd step to defer
export async function loader() {
  return defer({
    events: loadEvents(),
  })
}
