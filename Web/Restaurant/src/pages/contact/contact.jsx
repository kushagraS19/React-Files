import Layout from "../../components/layout";
import styles from "./contact.module.css";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contactContainer}>
        <h3>Contact My Restaurant</h3>
        <br />
        <div className={styles.headerRow}>
          <div className={styles.logo} aria-hidden="true">
            MR
          </div>
          <div className={styles.textBlock}>
            <h1>My Restaurant</h1>
            <p>
              Questions, reservations, enquiries --- we'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <table className={styles.table} border="1">
          <tr>
            <td>
              <h3 className={styles.contactHeading}>Contact Us</h3>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <h5 className={styles.tableData}>
                <MdOutlineSupportAgent className={styles.iconSupport} /> :
                1800-567-9847(Toll-Free number)
              </h5>
            </td>
          </tr>
          <br />
          <tr className={styles.tableRow}>
            <td>
              <h5 className={styles.tableData}>
                <MdEmail className={styles.iconMail} /> : myRestaurant@gmail.com
              </h5>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <h5 className={styles.tableData}>
                <IoCall className={styles.iconCall} /> : 9092345345
              </h5>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <h4 className={styles.feedbackHeading}> -- Feedback Form --</h4>
      </div>
      <div className={styles.formContainer}>
        <form>
          <table className={styles.feedbackTable}>
            <tr>
              <td>
                <p>Enter Your Name : </p>
              </td>
              <td>
                <input type="text" placeholder="Your Name" />
              </td>
            </tr>
            <tr>
              <td>
                <p>Enter Your Phone number : </p>
              </td>
              <td>
                <input type="text" placeholder="Phone number" />
              </td>
            </tr>
            <tr>
              <td>Leave a message : </td>
              <td>
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Leave message here"
                ></textarea>
              </td>
            </tr>
          </table>
          <button className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
