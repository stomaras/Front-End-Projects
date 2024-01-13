import React from 'react'
import{useParams} from "react-router-dom";

const EventDetailPage = () => {
    const params = useParams();

  return (
    <>
        <div>EventDetail Page</div>
        <p>EventId{params.eventId}</p>    
    </>
  )
}

export default EventDetailPage