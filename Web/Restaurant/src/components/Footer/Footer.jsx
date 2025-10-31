import styles from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.iconRow}>
        <FaInstagram className={styles.instagram} />
        <FaTwitter className={styles.twitter} />
        <FaGithub className={styles.github} />
        <AiOutlineYoutube className={styles.youtube} />
      </div>
      <div className={styles.copyRight}>
        <h5 className={styles.text}>
          &copy; {new Date().getFullYear()} My Restaurant. All rights reserved.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
