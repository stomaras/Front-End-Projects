import {useDeferredValue} from "react";

function ProductList({products}){

    const defferedProducts = useDeferredValue(products);

    return (
        <ul>
            {defferedProducts.map((product) => (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    )
}

export default ProductList;