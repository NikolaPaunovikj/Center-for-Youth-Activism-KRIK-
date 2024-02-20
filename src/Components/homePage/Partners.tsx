import styles from "../../styles/Components_Style/homePage/Partners.module.scss";
import Image from "next/image";

const Partners = () => {
  return (
    <div>
      <div className={styles.partnersHeading}>
        <h1>Партнери</h1>
      </div>
      <div className={styles.partnersContainer}>
        <Image src="/PartnerVcs.png" alt={"PartnerVcs"} width={269} height={75}></Image>
        <Image src="/PartnerMladiHub.png" alt={"PartnerMladiHub"} width={260} height={68}></Image>
        <Image
          src="/PartnerMakedonija.png"
          alt={"PartnerMakedonija"}
          width={410}
          height={69}
        ></Image>
        <Image src="/PartnerStella.png" alt={"PartnerStella"} width={161} height={105}></Image>
      </div>
    </div>
  );
};

export default Partners;
