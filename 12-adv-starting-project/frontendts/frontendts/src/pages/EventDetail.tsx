import React, { Suspense } from 'react'
import{useParams, useRouteLoaderData, ActionFunctionArgs, Params, json, redirect, defer, Await} from "react-router-dom";
import EventItem from '../components/EventItem';
import { Event } from '../models/models';
import { ParamParseKey, LoaderFunctionArgs } from 'react-router-dom';
import EventsList from '../components/EventsList';

export interface EventData {
    event:Event;
}

// every Await block must be wrapped with it's one suspense
const EventDetailPage = () => {
    const {event, events} = useRouteLoaderData('event-detail');   
    console.log(event);
     
  return (
    <>
        <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
            <Await resolve={event}>
                {(loadedEvent) => <EventItem event={loadedEvent}/>} 
            </Await>
        </Suspense>
        <Suspense>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>
    </>
  )
}

export default EventDetailPage

async function loadEvent(id:string)  {
    const response = await fetch(`http://localhost:8080/events/${id}`);
    console.log(response);
    
    if(!response.ok){
        throw new Response(JSON.stringify({message:'Could not fetch details for selected event.'}), {
            status:500
        }) 
    }else {
        const resData = await response.json();
        console.log(resData.event);
        
        return resData.event;
    }
}

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
  

type DetailParams = {
    eventId:string;
}

export async function loader({request, params}) {
    
    const id = params.eventId
    defer({
        event: loadEvent(id),
        events:loadEvents(),
    })
}

export async function action({params, request}) {
    const eventId = params.eventId
    const response = fetch(`http://localhost:8080/events/${eventId}`, {
        method:request.method,
    });

    if(!(await response).ok) {
        throw json(
            {message:'Could not delete event.'},
            {
                status:500,
            }
        );
    }
    return redirect('/events');
}