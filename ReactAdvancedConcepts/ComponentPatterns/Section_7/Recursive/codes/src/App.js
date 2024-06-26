import { RedButton } from "./components/composition";
import { RecursiveComponent } from "./components/recursive";
import { Button } from "./components/composition";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function App() {
  return (
    <>
      {/* <RecursiveComponent data={myNestedObject} /> */}
      <Button text="I am red"/>
    </>
  );
}

export default App;
