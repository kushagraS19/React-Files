import { useState } from 'react';
import Layout from '../../components/layout';
import { MenuList } from '../../data/data';
import { useCart } from '../../context/CartContext';
import styles from './Menu.module.css';

const Menu = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    setShowPopUp(true);
    setTimeout(() => setShowPopUp(false), 2000);
  };

  return (
    <Layout>
      <div className={styles.header}>
        <h1>Choose from our Menu</h1>
        <p className={styles.para}>-- We believe in quality over quantity --</p>
      </div>

      {showPopUp && (
        <div className={styles.popupAlert}>
          <span>✅ Item added to cart!</span>
          <button
            className={styles.closeBtn}
            onClick={() => setShowPopUp(false)}
          >
            ✖
          </button>
        </div>
      )}

      <div className={styles.cardContainer}>
        {MenuList.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.image} alt={item.name} />
            <div className={styles.cardBody}>
              <h4>{item.name}</h4>
              <p>Price : ₹ {item.price}</p>
              <p>{item.desciption}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Menu;
