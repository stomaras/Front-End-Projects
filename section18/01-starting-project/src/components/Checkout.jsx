import { useContext } from "react"
import Modal from "../UI/Modal"
import CartContext from "../store/CartContext"
import Input from "./UI/Input"
import UserProgressContext from "../store/UserProgressContext"

export const Checkout = () => {

    const cartCTX = useContext(CartContext);

    const userProgressCTX = useContext(UserProgressContext);

    const cartTotal = cartCTX.items.reduce((totalPrice, item) => {
        totalPrice + item.quantity * item.price
    },0)

    const handleClose = () => {
        userProgressCTX.hideCheckout();
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const fd = new FormData(event.target);

        const customerData = Object.fromEntries(fd.entries());

        fetch('http://localhost:3000/orders', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                order:{
                    items: cartCTX.items,
                    customer:customerData
                }
            })
        });

    }

    return <Modal open={userProgressCTX.progress === 'checkout'} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {cartTotal}</p>
            <Input label="Full Name" type="text" id='name'/>
            <Input label='Email Address' id='email' type='email'/>
            <Input label='Street' type='text' id='street'/>
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code"/>
                <Input label="City" type="text" id="city"/>
            </div>
            <p className="modal-actions">
                <button type="button" onClick={handleClose}>Close</button>
                <button>Submit Order</button>
            </p>
        </form>
    </Modal>
}