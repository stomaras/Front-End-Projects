import CartContext from "./cart-context";



const CartProvider = (props: any) => {

    const addItemToCartHandler = (item: any):void => { };
    const removeItemFromCartHandler = (id: number):void => { };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;