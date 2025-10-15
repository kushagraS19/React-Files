import Layout from "../../components/layout";
import { CartList } from "../../data/data";
import styles from "./cart.module.css";

const Cart = () => {
  return (
    <Layout>
      <div>
        <div>
          <h1 className={styles.heading}>-- Your Cart --</h1>
        </div>
        <br />
        <br />

        <div className={styles.cartItemContainer}>
          {CartList.map((item) => (
            <div className={styles.cartItem}>
              <img src={item.image} alt={item.name} />
              <div className={styles.cartItemBody}>
                <h4>{item.name}</h4>
                <p>Price : ₹ {item.price}</p>
                <p>Discount : 5 %</p>
                <h5>Total price : </h5> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
