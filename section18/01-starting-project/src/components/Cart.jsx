import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from "../store/CartContext";
import UserProgressContext from '../store/UserProgressContext';


const Cart = () => {

    const cartCTX = useContext(CartContext);
    const userProgressCTX = useContext(UserProgressContext);

    const cartTotal = cartCTX.items.reduce((totalPrice, item) => {
        totalPrice + item.quantity * item.price
    },0);

    const handleCloseCart = () => {
        userProgressCTX.hideCart();
    }


  return (
    <Modal className="cart" open={userProgressCTX.progress === 'cart'}>
        <h2>Your cart</h2>
        <ul>
            {cartCTX.items.map((item) => {
                return <li key={item.id}>{item.name} - {item.quantity}</li>
            })}
        </ul>
        <p className='cart-total'>{cartTotal}</p>
        <p className='modal-actions'>
            <button onClick={handleCloseCart}>Close</button>
            <button onClick={handleCloseCart}>Go to checkout</button>
        </p>
    </Modal>
  )
}

export default Cart