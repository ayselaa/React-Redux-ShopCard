import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cardItem = useSelector(state => state.card.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cardItem.map((product) => (
          <CartItem
          key={product.id}
            item={{
              Id: product.id,
              name: product.name,
              quantity: product.quantity,
              price: product.price,
              total: product.totalPrice,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
