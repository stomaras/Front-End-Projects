
export enum Types {
    Create = 'CREATE_PRODUCT',
    Delete = 'DELETE_PRODUCT',
    Add = 'ADD_PRODUCT',
}






export const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                }
            ]
        case 'DELETE_PRODUCT':
            return [
                ...state.filter((product: { id: number; }) => product.id !== action.payload.id),
            ]
        default:
            return state;
    }
}

export const shoppingCartReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return state + 1;
    }
} 