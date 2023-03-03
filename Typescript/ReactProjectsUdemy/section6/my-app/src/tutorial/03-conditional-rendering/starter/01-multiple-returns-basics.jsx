import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setTimeout(()=> {
      // done fetching data 
      setIsLoading(false);
    },3000)
  },[]);




  if(isLoading){
    return <h2>Loading...</h2>;
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
