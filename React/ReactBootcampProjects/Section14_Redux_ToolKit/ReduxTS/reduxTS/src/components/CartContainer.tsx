import React from 'react'
import CartItem from './CartItem'

const CartContainer = () => {
  return (
    <section className='cart'>
        {/* cart header */}
        <header>
            <h2>Your Bug</h2>
        </header>
        {/* cart items */}
        <div>
            <CartItem/>
        </div>
        {/*cart footer*/}
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total <span>$10</span>
                </h4>
            </div>
            <button className='btn clear-btn'>clear cart</button>
        </footer>
    </section>
  )
}

export default CartContainer