import Layout from '../../components/layout';
import { CartList } from '../../data/data';
import styles from './cart.module.css';

const Cart = () => {
  const totalPrice = CartList.reduce((sum, item) => sum + item.price, 0);
  const discountPercentage = 5;
  const totalDiscount = (discountPercentage / 100) * totalPrice;
  const finalPrice = totalPrice - totalDiscount;
  return (
    <Layout>
      <div>
        <h1 className={styles.heading}>-- Your Cart --</h1>
      </div>
      <br />
      <br />

      <div className={styles.wrapper}>
        <div className={styles.cartItemContainer}>
          {CartList.map((item) => (
            <div className={styles.cartItem}>
              <img src={item.image} alt={item.name} />
              <div className={styles.cartItemBody}>
                <h4>{item.name}</h4>
                <div className={styles.paragraph}>
                  <p>Price : ₹ {item.price}</p>
                  <p>Discount : 5 %</p>
                  <p>Quantity : 1</p>
                </div>
                <h5>Final price : ₹ {item.price - (5 / 100) * item.price} </h5>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.rightSide}>
          <div className={styles.rightSide}>
            <section className={styles.summaryBox}>
              <h2>Cart Summary</h2>
              <br />
              <div className={styles.showPrice}>
                <div className={styles.priceDiscount}>
                  <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
                  <p>Total Discount (5%): ₹ {totalDiscount.toFixed(2)}</p>
                </div>
                <h3>Final Price: ₹ {finalPrice.toFixed(2)}</h3>
              </div>
              <button className={styles.payButton}>
                Pay ₹{finalPrice.toFixed(2)}
              </button>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
