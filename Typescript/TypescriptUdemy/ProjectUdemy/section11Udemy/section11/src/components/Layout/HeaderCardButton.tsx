import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCardButton.module.css';

const HeaderCardButton = (props: any) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span>
                3
            </span>
        </button>
    )
};

export default HeaderCardButton;