import React from 'react'
import {FaCartPlus} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'

export interface NavbarProps {
  amount:number;
}

const Navbar = (props:NavbarProps) => {

  const {amount} = props;

  return (
    <nav>
        <div className="nav-center">
            <h3>redux toolkit </h3>
            <div className="nav-container">
                <FaCartPlus/>
                <div className="amount-container">
                    <p className="total-amount">{amount}</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar