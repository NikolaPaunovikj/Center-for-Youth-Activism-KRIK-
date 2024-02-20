import Link from "next/link";
import styles from "../../styles/Components_Style/newsletter/NewsletterMain.module.scss";

const NewsletterMain = () => {
  return (
    <div className={styles.newsletterMainContainer}>
      <div className={styles.newsletterMainImage}>
        <img src="/Frame418.png" alt="Frame418" />
      </div>
      <div className={styles.newsletterMainWrapper}>
        <div className={styles.left}>
          <Link aria-label={"navigate to monthly news"} href={"/newsletter/monthly"}>
            <div>
              <h5>Август, 2023</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. In natoque euismod enim cursus velit in.
                Libero nisi morbi sed libero egestas.
              </p>
              <div className={styles.circle}></div>
            </div>
          </Link>
          <div>
            <img src="/KrikZaNas.png" alt="KrikZaNas" />
          </div>
          <div>
            <Link aria-label={"navigate to monthly news"} href={"/newsletter/monthly"}>
              <h5>Август, 2023</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. In natoque euismod enim cursus velit in.
                Libero nisi morbi sed libero egestas.
              </p>
              <div className={styles.circle}></div>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <img src="/krikZaKogo.png" alt="krikZaKogo" />
          </div>
          <div>
            <Link aria-label={"navigate to monthly news"} href={"/newsletter/monthly"}>
              <h5>Август, 2023</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. In natoque euismod enim cursus velit in.
                Libero nisi morbi sed libero egestas.
              </p>
              <div className={styles.circle}></div>
            </Link>
          </div>
          <div>
            <img src="/homepageCard4.jpg" alt="homepageCard4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterMain;
