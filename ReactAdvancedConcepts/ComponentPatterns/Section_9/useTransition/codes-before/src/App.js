import { useState, useTransition } from "react";
import Cover from "./components/cover";
import Reviews from "./components/reviews";
import Writer from "./components/writer";
import { StyledButton } from "./components/styled-elements";

function App() {
  const [section, setSection] = useState("Cover");
  const [isPending, startTransition] = useTransition();

  // in case you want to delay the updating of a state okay, you can use useTransition

  const sectionHandler = (sec) => {
    startTransition(() => {
      setSection(sec);
    })

  };
  return (
    <>
      <StyledButton onClick={() => sectionHandler("Cover")}>
        Book Cover
      </StyledButton>
      <StyledButton onClick={() => sectionHandler("Reviews")}>
        Book Reviews
      </StyledButton>
      <StyledButton onClick={() => sectionHandler("Writer")}>
        Book's Writer
      </StyledButton>
      {isPending && 'Loading...'}

      {section === "Cover" ? (
        <Cover />
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <Writer />
      )}
    </>
  );
}

export default App;
