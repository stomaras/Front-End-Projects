import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const CartItem = () => {
  return (
    <article className='cart-item'>
        <img src="" alt="" />
        <div>
            <h4>title</h4>
            <h4 className="item-price">32</h4>
            {/* remove button */}
            <button className='remove-btn'>remove</button>
        </div>
        <div>
            {/*increase amount */}
            <button className="amount-btn">
                <FaChevronUp/>
            </button>
            {/* amount */}
            <p className="amount">23</p>
            {/*decrease amount */}
            <button className="amount-btn">
                <FaChevronDown/>
            </button>
        </div>
    </article>
  )
}

export default CartItem