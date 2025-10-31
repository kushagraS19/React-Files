import Layout from '../../components/layout';
import { useCart } from '../../context/CartContext';
import styles from './cart.module.css';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const discountPercentage = 5;
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalDiscount = (discountPercentage / 100) * totalPrice;
  const finalPrice = totalPrice - totalDiscount;

  return (
    <Layout>
      <h1 className={styles.heading}>-- Your Cart --</h1>

      {cart.length === 0 ? (
        <p className={styles.emptyCartMsg}>
          🛒 Your cart is empty! <br />{' '}
          <p className={styles.pickMsg}>
            Pick from our menu 👉🏻 <a href='/menu'>Menu</a>
          </p>
        </p>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.cartItemContainer}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} />
                <div className={styles.cartItemBody}>
                  <h4>{item.name}</h4>
                  <div className={styles.paragraph}>
                    <p>Price : ₹ {item.price}</p>
                    <p>Discount : {discountPercentage} %</p>

                    <div className={styles.quantityControl}>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className={styles.qtyBtn}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className={styles.qtyBtn}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.finalRemove}>
                    <h5>
                      Final price : ₹{' '}
                      {(item.price - (discountPercentage / 100) * item.price) *
                        item.quantity}
                    </h5>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={styles.removeBtn}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.rightSide}>
            <section className={styles.summaryBox}>
              <h2>Cart Summary</h2>
              <br />
              <div className={styles.showPrice}>
                <div className={styles.priceDiscount}>
                  <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
                  <p>
                    Total Discount ({discountPercentage}%): ₹{' '}
                    {totalDiscount.toFixed(2)}
                  </p>
                </div>
                <h3>Final Price: ₹ {finalPrice.toFixed(2)}</h3>
              </div>
              <button className={styles.payButton}>
                Pay ₹{finalPrice.toFixed(2)}
              </button>
            </section>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
