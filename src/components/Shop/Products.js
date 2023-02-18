import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 20.99,
    name: "Harry Potter Book",
    description: "This book is about first serias",
  },
  {
    id: "p2",
    price: 90.99,
    name: "Harry Potter Pen",
    description: "This pen for HP book",
  },
  {
    id: "p3",
    price: 70.99,
    name: "Harry Potter Disc",
    description: "Philosopher's Stone 2001 HP",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
        DUMMY_PRODUCT.map((product) => (
          <ProductItem
           key={product.id}
           id={product.id}
           price={product.price}
           description={product.description}
           title={product.name}
          />
        ))
        }
      </ul>
    </section>
  );
};

export default Products;
