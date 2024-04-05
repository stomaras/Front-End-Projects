import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import {EXAMPLES} from "./data.js"

function App() {

  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>

          <ul>
            {CORE_CONCEPTS.map((conceptItem) => {
              return (
                <CoreConcept
                  key={conceptItem.title}
                  image={conceptItem.image}
                  title={conceptItem.title}
                  description={conceptItem.description}
                />
              )
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'} 
              onSelect={() => handleSelect('components')}>
                Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'} 
              onSelect={() => handleSelect('jsx')}>
                JSX
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'Props'}
              onSelect={() => handleSelect('Props')}>
                Props
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}>
                State
            </TabButton>
          </menu>
            {!selectedTopic ? <p>Please select a topic.</p> : <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                    <code>
                      {EXAMPLES[selectedTopic].code}
                    </code>
                  </pre>
                 </div>
            }
        </section>
      </main>
    </div>
  );
}

export default App;
 