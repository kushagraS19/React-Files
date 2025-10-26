import { useState } from 'react';
import Layout from '../../components/layout';
import { MenuList } from '../../data/data';
import styles from './Menu.module.css';

const Menu = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleAddToCart = () => {
    setShowPopUp(true);
  };

  const handleClosePopup = () => {
    setShowPopUp(false);
  };

  return (
    <Layout>
      <div className={styles.header}>
        <h1>Choose from our Menu</h1>
        <p className={styles.para}>-- We believe in quality over quantity --</p>
      </div>

      {/* Popup Alert */}
      {showPopUp && (
        <div className={styles.popupAlert}>
          <span>✅ Item added to cart!</span>
          <button className={styles.closeBtn} onClick={handleClosePopup}>
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
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Menu;
