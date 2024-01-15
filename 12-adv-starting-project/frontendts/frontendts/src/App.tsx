import { useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home'
import EventsPage from './pages/Events';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import NewEventPage, {action as newEventAction} from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import { loader as eventsLoader } from './pages/Events';
import Error from './pages/Error';


const router = createBrowserRouter([
  { 
    path:'/', 
    element:<RootLayout/>, 
    errorElement:<Error/>,
    children:[
      { index:true, element:<HomePage/> },
      { 
        path:'/events', 
        element: <EventsRootLayout/>, 
        children:[
          { 
            index:true, 
            element:<EventsPage/>,
            loader: eventsLoader,
          },
          { 
            path:':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children:[
              {
                index:true,
                element:<EventDetailPage/>,
                action: deleteEventAction,
              },
              {
                path:'edit', element:<EditEventPage/>,
              }
            ],  
          },
          { 
            path:'new', 
            element:<NewEventPage/>,
            action: newEventAction,
          },
      ]},
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
