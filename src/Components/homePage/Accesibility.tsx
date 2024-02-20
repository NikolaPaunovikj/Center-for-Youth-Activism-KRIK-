import { useContext } from "react";
import styles from "../../styles/Components_Style/Accesibility.module.scss";
import Image from "next/image";
import { ThemeContext } from "../../Context/ThemeContext";
import useContrastClasses from "../../hooks/useContrastClasses";

const Accesibility = () => {
  const {
    theme,
    updateTheme,
    widget,
    updateWidget,
    saturation,
    updateSaturation,
    cursor,
    updateCursor,
    readingMask,
    updateReadingMask,
    animation,
    updateAnimation,
    screenReader,
    updateScreenReader,
  } = useContext<any>(ThemeContext);
  const { getOrangeContrastClasses, getAnimationClasses } = useContrastClasses();
  const orangeContrast = getOrangeContrastClasses();
  const animationClass = getAnimationClasses();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateWidget();
  };

  let optionStyle = "";
  if (theme) {
    optionStyle = "bgRed";
  } else if (saturation) {
    optionStyle = "increasedContrastOptions";
  } else if (cursor) {
    optionStyle = "increasedContrastOptions";
  } else if (readingMask) {
    optionStyle = "increasedContrastOptions";
  } else if (animation) {
    optionStyle = "increasedContrastOptions";
  } else if (screenReader) {
    optionStyle = "increasedContrastOptions";
  } else {
    optionStyle = "defaultContrastOptions";
  }

  return (
    <div>
      <button className={`${animationClass} ${styles.accesibilityButton} ${orangeContrast} `}>
        Пристапност
      </button>
      <div className={`${animationClass} ${styles.accesibilityContainer}`}>
        <div>
          <button className={`${styles.widgetAccesibilityButton} ${orangeContrast}`}>
            Пристапност
          </button>
          <div className={styles.switchContainer}>
            <h1>XL</h1>
            <h1>Oversized Widget</h1>
            <input onChange={handleCheckboxChange} id="switchInput" type="checkbox" />
            <label className={styles.switch} htmlFor="switchInput">
              <span className={styles.slider}></span>
            </label>
          </div>
          <div className={styles.optionsContainer}>
            <div
              aria-label="Increase Cursor"
              onClick={updateCursor}
              className={cursor && optionStyle}
            >
              <Image src={"/CursorIcon.svg"} alt={"cursor"} width={53.8} height={52}></Image>
              <h5>Cursor Size</h5>
            </div>
            <div
              onClick={updateScreenReader}
              className={screenReader && optionStyle}
              aria-label="Screen Reader"
            >
              <Image
                src={"/ScreenReader.svg"}
                alt={"ScreenReader"}
                width={53.8}
                height={52}
              ></Image>
              <h5>Screen Reader</h5>
            </div>
            <div
              aria-label="Increase Contrast"
              onClick={updateTheme}
              className={theme ? "bgRed" : "defaultContrastOptions"}
            >
              <Image src={"/Contrast.svg"} alt={"Contrast"} width={53.8} height={52}></Image>
              <h5>Contrast</h5>
            </div>
            <div
              className={readingMask && optionStyle}
              onClick={updateReadingMask}
              aria-label="Reading Mask"
            >
              <Image src={"/ReadingMask.png"} alt={"ReadingMask"} width={53.8} height={52}></Image>
              <h5>Reading Mask</h5>
            </div>
            <div
              className={`${animation && optionStyle}`}
              onClick={updateAnimation}
              aria-label="Pause Animations"
            >
              <Image src={"/Pause.svg"} alt={"Pause"} width={53.8} height={52}></Image>
              <h5>Pause Animation</h5>
            </div>
            <div
              aria-label="Increase Saturation"
              onClick={updateSaturation}
              className={saturation && optionStyle}
            >
              <Image src={"/Saturation.svg"} alt={"Saturation"} width={53.8} height={52}></Image>
              <h5>Saturation</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accesibility;
