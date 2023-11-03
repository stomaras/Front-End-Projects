import { Children, ReactElement, createContext, useState } from "react";
import { products } from "../data/products";

export type ProductType = {
    sku:string;
    name:string;
    price:number;
}

const initialState: ProductType[] = products;
    
// context type and initial context
export type UseProductsContextType = {products: ProductType[]};

const initContextState: UseProductsContextType = {products:[]};

// create Products context

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({children}: ChildrenType):ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initialState);

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}