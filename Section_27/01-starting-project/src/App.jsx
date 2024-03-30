import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>

      <Accordion className="accordion">
        <AccordionItem className="accordion-item" title="We got 20 years of experience">
          <article>
            <p>Tou can not go wrong with us</p>
            <p>We are in the business of planning highly vacation trips for more than 20 years</p>
          </article>
        </AccordionItem>
        <AccordionItem className="accordion-item" title="We are working with local guides">
          <article>
            <p>Tou can not go wrong with us</p>
            <p>We are in the business of planning highly vacation trips for more than 20 years</p>
          </article>
        </AccordionItem>
      </Accordion>
    </section>
  </main>;
}

export default App;
