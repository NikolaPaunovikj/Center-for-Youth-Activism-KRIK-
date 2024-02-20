import Link from "next/link";
import styles from "../../styles/Components_Style/newsletter/MonthlyNews.module.scss";

const MonthlyNews = () => {
  return (
    <div className={styles.newsPage}>
      <div className={styles.topNews}>
        <h1>ТОП НОВОСТИ</h1>
        <div className={styles.topNewsWrapper}>
          <div>
            <Link href={"/newsletter/singleNews"}>
              <img src="/homepageCard3.jpg" alt="homepageCard3" />
              <p>03.08.2023</p>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p className={styles.newsDescription}>
                Lorem ipsum dolor sit amet consectetur. Elementum lorem viverra egestas arcu.
              </p>
              <button>CTA</button>
            </Link>
          </div>
          <div>
            <img src="/homepageCard4.jpg" alt="homepageCard4" />
            <p>03.08.2023</p>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className={styles.newsDescription}>
              Lorem ipsum dolor sit amet consectetur. Elementum lorem viverra egestas arcu.
            </p>
            <button>CTA</button>
          </div>
          <div>
            <img src="/krikZaKogo.png" alt="krikZaKogo" />
            <p>03.08.2023</p>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className={styles.newsDescription}>
              Lorem ipsum dolor sit amet consectetur. Elementum lorem viverra egestas arcu.
            </p>
            <button>CTA</button>
          </div>
        </div>
      </div>
      <div className={styles.otherNewsContainer}>
        <h1>ОСТАНАТИ НОВОСТИ</h1>
        <div className={styles.otherNewsWrapper}>
          <div>
            <p>03.08.2023</p>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className={styles.newsDescription}>
              Lorem ipsum dolor sit amet consectetur. Elementum lorem viverra egestas arcu.
            </p>
            <button>CTA</button>
          </div>
          <div>
            <p>03.08.2023</p>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className={styles.newsDescription}>
              Lorem ipsum dolor sit amet consectetur. Elementum lorem viverra egestas arcu.
            </p>
            <button>CTA</button>
          </div>
          <div>
            <p>03.08.2023</p>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className={styles.newsDescription}>
              Lorem ipsum dolor sit amet consectetur. Elementum lorem viverra egestas arcu.
            </p>
            <button>CTA</button>
          </div>
          <div>
            <p>03.08.2023</p>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className={styles.newsDescription}>
              Lorem ipsum dolor sit amet consectetur. Elementum lorem viverra egestas arcu.
            </p>
            <button>CTA</button>
          </div>
          <div>
            <p>03.08.2023</p>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className={styles.newsDescription}>
              Lorem ipsum dolor sit amet consectetur. Elementum lorem viverra egestas arcu.
            </p>
            <button>CTA</button>
          </div>
          <div>
            <p>03.08.2023</p>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className={styles.newsDescription}>
              Lorem ipsum dolor sit amet consectetur. Elementum lorem viverra egestas arcu.
            </p>
            <button>CTA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyNews;
