import { useEffect, useState } from "react"

const CleanUpFunction = () => {
  const [toggle, setToggle] = useState(false);

  return <div>
    <button className="btn" onClick={() => setToggle(!toggle)}>
      Toggle Component
    </button>
    {toggle && <RandomComponent/>}
  </div>;
};

// with the return clean up function run when the componennt 
// unmount 
// so run in the background
const RandomComponent = () => {
  useEffect(() => {
    console.log('hmm , this is interesting');
    const intId = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    return () => {
      clearInterval(intId);
    }
  },[])
  return <h1>Hello There</h1>;
}

export default CleanUpFunction;