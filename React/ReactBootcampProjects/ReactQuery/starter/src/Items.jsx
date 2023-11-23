import SingleItem from './SingleItem';
import { useQuery } from "@tanstack/react-query";
import customFetch from "../src/utils/utils";

const Items = ({ items }) => {

  const {isLoading, data, error} = useQuery({
    queryKey:['tasks'],
    queryFn: async() => {
      const {data} = await customFetch.get('/');
      return data;
    },
  });

  if(isLoading){
    return <p style={{marginTop:'1rem'}}>Loading ...</p>
  }

  if(error){
    return <p style={{marginTop:'1rem'}}>{error.message}</p>
  }



  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
