import { useDeferredValue, useState } from "react";
import {HeavyComponent} from "./components/heavy-component";

function App() {
  const [keyword, setKeyword] = useState("");

  // with useDeferredValue we have a concept called the priority of renders.
  // the component that is connected to this deffered state the deffered Keyword in our case 
  // which is this heavy component, we will wait until all those high priority renders, which is in this case 
  // the input and the state in here finish, then it's going to render itself
  const deferredKeyword = useDeferredValue(keyword);

  return (
    <>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <HeavyComponent keyword={deferredKeyword} />
    </>
  );
}

export default App;
