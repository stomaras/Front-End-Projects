import { Children, ReactElement, createContext, useState, useEffect } from "react";
import { products } from "../data/products";

export type ProductType = {
    sku:string;
    name:string;
    price:number;
}

// initial state
const initialState: ProductType[] = []
//     {
//         sku:'widget',
//         name:'widget',
//         price:9
//     },
//     {
//         sku:'widget',
//         name:'widget',
//         price:9
//     },
//     {
//         sku:'widget',
//         name:'widget',
//         price:9
//     }
// ];
    
// context type 
export type UseProductsContextType = {products: ProductType[]};

// initial context state
const initContextState: UseProductsContextType = {products:[]};

// create Products context
const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] }

// Provider
export const ProductsProvider = ({children}: ChildrenType):ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initialState);

    useEffect(() => {
        const fetchProducts = async() : Promise<ProductType[]> => {
            const data = await fetch('http://localhost:3500/products/').then(res => {
                return res.json();
            }).catch(err => {
                if(err instanceof Error) console.log(err.message);
            })
            return data;
        }

        fetchProducts().then(products => setProducts(products));
    },[])


    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}