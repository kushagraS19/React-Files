import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import styles from "./Home.module.css";
import banner from "../../assets/banner.jpeg";

const Home = () => {
  return (
    <Layout>
      <div
        className={styles.home}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className={styles.headerContainer}>
          <h1>My Restaurant</h1>
          <p>India's best food</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
