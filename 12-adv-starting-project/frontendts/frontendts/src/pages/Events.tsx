import React from 'react'
import { Link } from 'react-router-dom'
import EventsList from "../components/EventsList";
import { useLoaderData } from 'react-router-dom';
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

    const data= useLoaderData();
    
    const events = data.events
  return (
    <>
        <EventsList events={events}/>;
    </>
  )
}

export default EventsPage;

export async function loader() {
        const response:EventsResponse = await fetch('http://localhost:8080/events');
        console.log("response", response);
        if(!response.ok){
            throw new Response(JSON.stringify({message:'Could not fetch events.'}), {
                status:500
            })
        }else {
          return response;
        }
}
