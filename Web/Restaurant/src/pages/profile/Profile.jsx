import Layout from '../../components/layout';
import styles from './Profile.module.css';
import profilePicture from '../../assets/OIP.jpg';
import { PiClockCountdown } from 'react-icons/pi';
import { LiaGiftSolid } from 'react-icons/lia';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { MdOutlineMessage } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { MdOutlineCardGiftcard } from 'react-icons/md';
import { MdOutlineAddCard } from 'react-icons/md';
import { MdCreditScore } from 'react-icons/md';
import { MdOutlinePayment } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

const Profile = () => {
  const user = {
    profilePic: profilePicture,
    username: 'kushagra_saini',
    userId: '90887637',
    name: 'Kushagra Saini',
    address: 'Indore, Madhya Pradesh',
    contact: '91+ 9999933333  ',
    email: 'kushagra@restaurant.in',
  };

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <div className={styles.profileCard}>
          <div className={styles.header}>
            <img
              src={user.profilePic}
              alt='User Profile'
              className={styles.avatar}
            />
            <div>
              <h2 className={styles.username}>@{user.username}</h2>
              <p className={styles.userId}>User ID: {user.userId}</p>
            </div>
          </div>

          <div className={styles.details}>
            <h3>Personal Details</h3>
            <div className={styles.detailRow}>
              <span className={styles.label}>Full Name:</span>
              <span className={styles.value}>{user.name}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.label}>Address:</span>
              <span className={styles.value}>{user.address}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.label}>Contact:</span>
              <span className={styles.value}>{user.contact}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.label}>Email:</span>
              <span className={styles.value}>{user.email}</span>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.leftSide}>
            <h4>Dining and experiences</h4>
            <div className={styles.diningContainer}>
              <p>
                <PiClockCountdown />
                <p className={styles.clickIcon}>
                  Your dining transactions
                  <IoIosArrowForward />
                </p>
              </p>
              <p>
                <LiaGiftSolid />
                <p className={styles.clickIcon}>
                  Dining gifts cards
                  <IoIosArrowForward />
                </p>
              </p>
              <p>
                <MdOutlineMessage />
                <p className={styles.clickIcon}>
                  Dining help
                  <IoIosArrowForward />
                </p>
              </p>
              <p>
                <IoSettingsOutline />
                <p className={styles.clickIcon}>
                  Dining settings <IoIosArrowForward />
                </p>
              </p>
              <p>
                <IoIosHelpCircleOutline />
                <p className={styles.clickIcon}>
                  Frequently asked questions <IoIosArrowForward />
                </p>
              </p>
            </div>
          </div>
          <div className={styles.rightSide}>
            <h4>Money</h4>
            <div className={styles.moneyContainer}>
              <p>
                <LiaRupeeSignSolid />
                <p className={styles.clickIcon}>
                  My restaurant money <IoIosArrowForward />
                </p>
              </p>
              <p>
                <MdOutlineCardGiftcard />
                <p className={styles.clickIcon}>
                  Buy gift card <IoIosArrowForward />
                </p>
              </p>
              <p>
                <MdOutlineAddCard />
                <p className={styles.clickIcon}>
                  Claim gift card <IoIosArrowForward />
                </p>
              </p>
              <p>
                <MdCreditScore />
                <p className={styles.clickIcon}>
                  My restaurant credits <IoIosArrowForward />
                </p>
              </p>
              <p>
                <MdOutlinePayment />
                <p className={styles.clickIcon}>
                  Payment settings <IoIosArrowForward />
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
