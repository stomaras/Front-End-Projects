import { useEffect, useState } from 'react';
import {useQuery} from "@tanstack/react-query";
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js';


// i want to make sure that the data was fetched here is marked as stale 
// and refetch is triggered , we can do this by one method which provided from useQuery with one method 
// which invalidate one or more queries.Allow us to tell react query that the data that are connected to a react 
// query is outdated and should refetched.
export default function NewEventsSection() {
  // every get http request also should have a query key in order to know the request and cache data that yielded by this request
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey:['events'],
    queryFn:fetchEvents,
    staleTime: 0,
    gcTime: 30000,
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetched events.'} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
