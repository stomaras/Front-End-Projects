import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/models";

export interface ProductState {
    products:IProduct[];
} 

const initialState :ProductState= {
    products:[
        {
            id:'p1',
            title:'Red Scarf',
            description:'A pretty red scarf.',
            isFavorite:false,
        },
        {
            id:'p2',
            title:'Blue T-Shrt',
            description:'A pretty red scarf.',
            isFavorite:false,
        },
        {
            id:'p3',
            title:'Green Trousers',
            description:'A pair of lightly green trousers',
            isFavorite:false,
        },
        {
            id:'p4',
            title:'Orange Hat',
            description:'Street Style! An orange hat.',
            isFavorite:false,
        }
    ]
}


export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        toggleFav: (state:ProductState,action:any) => {
            const prodIndex = state.products.findIndex((product) => product.id === action.payload)
            const newFavStatus = !state.products[prodIndex].isFavorite;
            console.log(newFavStatus);
            const updatedProducts = [...state.products];
            updatedProducts[prodIndex] = {
                ...state.products[prodIndex],
                isFavorite: newFavStatus,
            };
            return {
                ...state,
                products:updatedProducts
            }
        }
    }
});

export const {toggleFav} = productSlice.actions;
export default productSlice.reducer;