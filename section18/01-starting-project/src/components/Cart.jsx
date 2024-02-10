import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from "../store/CartContext";
import UserProgressContext from '../store/UserProgressContext';
import CartItem from './CartItem';


const Cart = () => {

    const cartCTX = useContext(CartContext);
    const userProgressCTX = useContext(UserProgressContext);

    const cartTotal = cartCTX.items.reduce((totalPrice, item) => {
        totalPrice + item.quantity * item.price
    },0);

    const handleCloseCart = () => {
        userProgressCTX.hideCart();
    }

    const handleGoToCheckout = () => {
        userProgressCTX.showCheckout();
    }

  return (
    <Modal 
        className="cart" 
        open={userProgressCTX.progress === 'cart'} 
        onClose={userProgressCTX.progress === 'cart' ? handleCloseCart : null}
    >
        <h2>Your cart</h2>
        <ul>
            {cartCTX.items.map((item) => {
                return <CartItem 
                    key={item.id} 
                    name={item.name} 
                    quantity={item.quantity} 
                    price={item.price}
                    onIncrease={() => cartCTX.addItem(item)}
                    onDecrease={() => cartCTX.removeItem(item.id)}
                />
            })}
        </ul>
        <p className='cart-total'>{cartTotal}</p>
        <p className='modal-actions'>
            <button onClick={handleCloseCart}>Close</button>
            {cartCTX.items.length > 0 ? <button onClick={handleGoToCheckout}>Go to checkout</button> : null}
        </p>
    </Modal>
  )
}

export default Cart