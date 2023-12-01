import {CartIcon} from "../icons";
import {useSelector} from "react-redux";


export const Navbar = () => {

    const {amount, total, cartItems} = useSelector((state) => state.cart);
    console.log(cartItems);
    return (
        <nav>
            <div className="nav-center">
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <CartIcon/>
                    <div className="amount-container">
                        <div className="total-amount">{amount}</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}