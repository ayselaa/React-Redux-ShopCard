import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cardAction } from '../../store/card-slice'

const ProductItem = (props) => {
  const { title, price, description, id} = props;

  const dispach = useDispatch()

  const addtoCardHandler = () => {
    dispach(cardAction.addToCard({
      id,
      price,
      description,
      title
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>

        <div className={classes.actions}>
          <button onClick={addtoCardHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
