import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'

const CartButton = () => {
  const dispach = useDispatch();
  const totalQuantity = useSelector(state => state.card.totalQuantity)
  const toggleHandler = () => {
    dispach(uiAction.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
