import React, { useState } from "react";
import logo from "./logo.svg";
import humans, { Human } from "./data";
import "./App.css";
import List from "./List";

function App() {
  const [persons, setPersons] = useState<Human[]>(humans);
  return <main>
    <section className="container">
      <h3>{persons.length} birthdays today</h3>
      <List persons={persons} />
      <button type="button" className="btn btn-block" onClick={()=>setPersons([])}>Clear all</button>
    </section>
  </main>;
}

export default App;
