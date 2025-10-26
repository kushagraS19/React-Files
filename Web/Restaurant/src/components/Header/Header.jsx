import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { FaHome } from 'react-icons/fa';
import { MdRestaurantMenu } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { BsPersonCircle } from 'react-icons/bs';
import { IoRestaurant } from 'react-icons/io5';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <button className={styles.menuButton} onClick={handleDrawerOpen}>
            <GiHamburgerMenu />
          </button>
          <h2>
            <IoRestaurant />
            My Restaurant
          </h2>
        </div>
        <div className={styles.innerContainer}>
          <ul className={styles.navList}>
            <li className={styles.home}>
              <Link to={'/'}>
                <FaHome />
                Home
              </Link>
            </li>
            <li className={styles.menu}>
              <Link to={'/menu'}>
                <MdRestaurantMenu />
                Menu
              </Link>
            </li>
            <li className={styles.contact}>
              <Link to={'/contact'}>
                <IoMdContact />
                Contact
              </Link>
            </li>
            <li className={styles.about}>
              <Link to={'/about'}>
                <AiOutlineExclamationCircle />
                About
              </Link>
            </li>
          </ul>
          <ul className={styles.cartProfile}>
            <li>
              <Link to={'/cart'}>
                <FaCartShopping className={styles.cartIcon} />
              </Link>
            </li>
            <li>
              <Link to={'/profile'}>
                <BsPersonCircle className={styles.profileIcon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.drawer} ${drawerOpen ? styles.open : ''}`}>
        <h2 className={styles.drawerHeading}>My Restaurant</h2>
        <button className={styles.closeDrawer} onClick={handleCloseDrawer}>
          ✕
        </button>
        <ul>
          <li>
            <Link to='/' onClick={handleCloseDrawer}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to='/menu' onClick={handleCloseDrawer}>
              <MdRestaurantMenu /> Menu
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={handleCloseDrawer}>
              <IoMdContact /> Contact
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={handleCloseDrawer}>
              <AiOutlineExclamationCircle /> About
            </Link>
          </li>
          <li>
            <Link to={'/cart'} onClick={handleCloseDrawer}>
              {' '}
              <FaCartShopping />
              Cart
            </Link>
          </li>
          <li>
            <Link to={'/profile'} onClick={handleCloseDrawer}>
              <BsPersonCircle /> Profile
            </Link>
          </li>
        </ul>
      </div>
      {drawerOpen && (
        <div className={styles.outSideDrawer} onClick={handleCloseDrawer}></div>
      )}
    </div>
  );
};

export default Header;
