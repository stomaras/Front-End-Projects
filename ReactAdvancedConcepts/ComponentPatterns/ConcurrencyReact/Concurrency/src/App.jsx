import { useState, useTransition, } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import { generateProducts } from './data';

const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
  if(!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}


function App() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = filterProducts(filterTerm);

  // we tell react that updating the filter state has lower priority than other state updates
  function updateFilterHanlder(event) {
    // startTransition(() => {
    //   setFilterTerm(event.target.value);
    // });
    setFilterTerm(event.target.value);
  }


  return (
    <>
      <div id='app'>
        <input type="text" onChange={updateFilterHanlder}/>
        {/* {isPending && <p>Updating List...</p>} */}
        <ProductList products={filteredProducts}/>
      </div>
    </>
  )
}

export default App
