import React from 'react'
import{useParams, useRouteLoaderData, ActionFunctionArgs, Params, json, redirect} from "react-router-dom";
import EventItem from '../components/EventItem';
import { Event } from '../models/models';
import { ParamParseKey, LoaderFunctionArgs } from 'react-router-dom';

export interface EventData {
    event:Event;
}

const EventDetailPage = () => {
    const data = useRouteLoaderData('event-detail');    
  return (
    <EventItem event={data.event}/>
  )
}

export default EventDetailPage

type DetailParams = {
    eventId:string;
}

export async function loader({request, params}:{request:Request, params:DetailParams}) {
    
    const id = params.eventId
    const response = await fetch(`http://localhost:8080/events/${id}`);
    console.log(response);
    
    if(!response.ok){
        throw new Response(JSON.stringify({message:'Could not fetch details for selected event.'}), {
            status:500
        }) 
    }else {
        return response;
    }
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