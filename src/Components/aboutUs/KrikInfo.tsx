import useContrastClasses from "@/hooks/useContrastClasses";
import styles from "../../styles/Components_Style/aboutUs/KrikInfo.module.scss";

const KrikInfo = () => {
  const { getOrangeTextContrastClasses, getBodyL, getTextM, getHeadlineL } = useContrastClasses();

  const orangeContrast = getOrangeTextContrastClasses();
  const bodyL = getBodyL();
  const headlineL = getHeadlineL();
  const textM = getTextM();
  return (
    <div className={styles.krikInfoContainer}>
      <h1 className={`${styles.containerHeading} ${headlineL}`}>За Крик</h1>
      <div className={styles.krikInfoModule}>
        <div>
          <h1 className={`${styles.krikInfoModuleHeading} ${textM} ${orangeContrast}`}>Мисија</h1>
        </div>
        <div className={styles.krikInfoModuleText}>
          <p aria-label={"info"} className={bodyL}>
            Да понуди активности за зајакнување на капацитетите на младите и лицата со попреченост
            преку развој на младинската работа и обезбедување услуги за социјална заштита.
          </p>
        </div>
      </div>
      <div className={styles.krikInfoModule}>
        <div>
          <h1 className={`${styles.krikInfoModuleHeading} ${textM} ${orangeContrast}`}>Визија</h1>
        </div>
        <div className={styles.krikInfoModuleText}>
          <p aria-label={"info"} className={bodyL}>
            Да создаде инклузивно општество каде младите и лицата со попреченост се подеднакво
            вклучени и имаат целосно развиени капацитети активно да придонесуваат за заедницата.
          </p>
        </div>
      </div>
      <div className={styles.krikInfoModule}>
        <div>
          <h1
            aria-label={"our values"}
            className={`${styles.krikInfoModuleHeading} ${textM} ${orangeContrast}`}
          >
            Нашите Вредности
          </h1>
        </div>
        <div className={styles.krikInfoModuleText}>
          <p aria-label={"info"} className={bodyL}>
            Развивање на младинската работа, поттикнување младински активизам и волонтеризам.
            Поголема вклученост на младите исклучени од општеството преку учество на работилници,
            настани и обуки. Развој на услуги за социјална заштита, сместување и грижа за лица со
            интелектуална и/или телесна попреченост и други услови. Поттикнување на социјалната
            вклученост на маргинализираните групи млади и возрасни во сите сфери на општественото
            делување.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KrikInfo;
