import React from 'react'
import {FaCartPlus} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav>
        <div className="nav-center">
            <h3>redux toolkit </h3>
            <div className="nav-container">
                <FaCartPlus/>
                <div className="amount-container">
                    <p className="total-amount">10</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar