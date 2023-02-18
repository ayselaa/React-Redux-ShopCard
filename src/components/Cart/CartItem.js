import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux'
import { cardAction } from '../../store/card-slice'

const CartItem = (props) => {
  const { name, quantity, total, price, Id } = props.item;
  const dispach = useDispatch()
   
  const addToCartHandler = () => {
    dispach(cardAction.addToCard({
      name, 
      quantity,
      total,
      price
    }))
  }

  const removeToCardHandler = () => {
    dispach(cardAction.removeToCard(Id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeToCardHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
