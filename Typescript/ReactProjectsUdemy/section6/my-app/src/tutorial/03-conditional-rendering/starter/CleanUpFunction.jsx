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

const RandomComponent = () => {
  useEffect(() => {
    console.log('hmm , this is interesting');
  },[])
  return <h1>Hello There</h1>;
}

export default CleanUpFunction;