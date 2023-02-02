import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCardButton.module.css';
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props: any) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx
        .items
        .reduce((curNumber, item) => {
            return curNumber + item.amount
        },0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span>
                {numberOfCartItems}
            </span>
        </button>
    )
};

export default HeaderCardButton;