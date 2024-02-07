import Places from './Places.jsx';
import { useState, useEffect } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    
    const fetchPlaces = async() => {
      setIsFetching(true);

      try {
        const response = await fetch('http://localhost:3000/places');
        const resData = await response.json();

        if(!response.ok){
          throw new Error('Failed to fetch places');
        } 
        setAvailablePlaces(resData.places);
      }catch(error){
        setError(error);
      }
      setIsFetching(false);
    }

    fetchPlaces();
  },[])

  if(error){
    return <p>Error message</p>
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
