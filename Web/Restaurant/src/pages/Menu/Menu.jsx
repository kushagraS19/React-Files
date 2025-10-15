import Layout from "../../components/layout";
import { MenuList } from "../../data/data";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Choose from our Menu</h1>
        <p className={styles.para}>
          -- We beilieve in quality over quantity --
        </p>
      </div>
      <div className={styles.cardContainer}>
        {MenuList.map((item) => (
          <div className={styles.card}>
            <img src={item.image} alt="idli" />
            <div className={styles.cardBody}>
              <h4>{item.name}</h4>
              <p>Price : ₹ {item.price}</p>
              <p>{item.desciption}</p>
              <a href="/cart">Add to cart</a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Menu;
