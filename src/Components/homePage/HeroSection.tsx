import styles from "../../styles/Components_Style/homePage/HeroSection.module.scss";
import Accesibility from "./Accesibility";
import useContrastClasses from "../../hooks/useContrastClasses";
import Link from "next/link";

const HeroSection = () => {
  const {
    getVioletContrastClasses,
    getHeadlineXl,
    getTextM,
    getBodyL,
    getButtonL,
  } = useContrastClasses();
  const violetContrast = getVioletContrastClasses();
  const xlWidget = getHeadlineXl();
  const mWidget = getTextM();
  const lWidget = getBodyL();
  const lButton = getButtonL();

  return (
    <div className={styles.heroSectionContainer}>
      <h1 className={xlWidget}>
        ПРОМЕНАТА ДОАЃА <br /> ОД МЛАДИТЕ
      </h1>
      <h5 className={mWidget}>Кои Сме Ние?</h5>
      <p className={lWidget}>
        Центарот за младински активизам Крик е невладина, непрофитна организација основана од млади
        луѓе, предводена од млади луѓе и работи за и со млади луѓе.
      </p>
      <Link href={"/aboutUs"}>
        <button
          aria-label="More about Krik"
          className={`${styles.aboutUsbutton} ${violetContrast} ${lButton}`}
        >
          Повеќе за нас
        </button>
      </Link>
    </div>
  );
};

export default HeroSection;
