import Layout from '../../components/layout';
import styles from './about.module.css';
import { OtherBranchesList } from '../../data/data';

const About = () => {
  return (
    <Layout>
      <div>
        <div className={styles.headingContainer}>
          <h3> Welcome To My Restaurant </h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            expedita, dolores voluptate id dolorum error asperiores sapiente
            possimus laudantium eos libero incidunt ullam? Adipisci qui
            doloremque atque obcaecati quasi, veniam quis ab! Nesciunt illum
            repudiandae ipsam beatae totam? Quis maxime qui, natus ducimus
            deleniti suscipit dicta unde perferendis aliquid, doloribus, debitis
            labore illo quia vitae. Veniam commodi aut iure aliquid vel ducimus,
            nemo quibusdam consequuntur obcaecati ipsam! Ullam animi atque ad
            sunt iste quo sed ratione. Doloribus quisquam sapiente earum
            exercitationem assumenda iusto minus numquam quam perferendis
            tenetur repellat inventore sequi dolores non dolorum maxime quod,
            aut libero at enim.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            facere voluptatum explicabo porro corrupti repellat quia libero
            eveniet. Suscipit quam, sed ab explicabo possimus maxime nostrum
            accusamus voluptatum natus aut earum voluptatem iste exercitationem,
            fugiat facilis saepe ipsum eos tempore praesentium odit eveniet
            libero. Aut earum assumenda sequi dolor, culpa fugit optio mollitia
            illo porro libero cum maxime praesentium eligendi illum! Beatae modi
            esse inventore illum ducimus commodi illo iure, distinctio sapiente
            atque fugiat quas? Hic facilis commodi nisi quae consectetur qui
            quibusdam voluptatum dolor vel, optio dicta velit, nihil eos quo,
            impedit ab sit accusantium eum illum harum exercitationem.
          </p>
        </div>
        <div className={styles.otherBranches}>
          <h3>Our Other Branches</h3>
        </div>
        <div className={styles.cardItemContainer}>
          {OtherBranchesList.map((item) => (
            <div className={styles.cardItem}>
              <img src={item.image} alt={item.name} />
              <div className={styles.cardBody}>
                <h4>{item.name}</h4>
                <div className={styles.paragraph}>
                  <p>{item.desciption}</p>
                  <p>{item.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
