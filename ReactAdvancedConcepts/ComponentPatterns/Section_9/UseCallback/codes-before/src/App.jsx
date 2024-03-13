import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useCallback((input) => {
    if(input === null) return;
    input.focus();
  },[]);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    // inputRef.current.focus();
  }, []);

  return <>
    <button onClick={() => setShowInput((s)=> !s)}>Switch</button>
    {showInput && <input type="text" ref={inputRef}/>}
  </>
}

export default App;
