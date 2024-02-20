import styles from "../../styles/Components_Style/newsletter/SingleNews.module.scss";

const SingleNewsComponent = () => {
  return (
    <div className={styles.singleNewsContainer}>
      <div className={styles.firstRow}>
        <div>
          <img src="/Uslugi.jpg" alt="Uslugi" />
        </div>
        <div>
          <p className={styles.newsDate}>03.08.2023</p>
          <h1>Lorem ipsum dolor sit amet consectetur </h1>
          <p aria-label={"news description"} className={styles.newsDescription}>
            Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum
            nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus
            ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis
            viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc
            dolor vitae vel sem aliquet. Aliquam est integer libero morbi congue est porttitor.
            Vitae tellus lorem arcu tortor sem tellus hendrerit nibh. Mattis volutpat nunc
            parturient dignissim.{" "}
          </p>
        </div>
      </div>
      <div className={styles.secondRow}>
        <div>
          <p aria-label={"news description"} className={styles.newsDescription}>
            Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum
            nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus
            ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis
            viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc
            dolor vitae vel sem aliquet. Aliquam est integer libero morbi congue est porttitor.
            Vitae tellus lorem arcu tortor sem tellus hendrerit nibh. Mattis volutpat nunc
            parturient dignissim.{" "}
          </p>
        </div>
        <div>
          <img src="/homepageCard1.jpg" alt="homepageCard1" />
        </div>
      </div>
      <div className={styles.gallery}>
        <h1>Галерија Со Активности:</h1>
        <div className={styles.newsCarousel}>
          <img src="/services1.png" alt="services1" />
          <button className={styles.prevButton}>
            <img src="/PrevBtn.svg" alt="PrevBtn" />
          </button>
          <button className={styles.nextButton}>
            <img src="/NextBtn.svg" alt="NextBtn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsComponent;
