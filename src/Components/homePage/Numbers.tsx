import styles from "../../styles/Components_Style/homePage/Numbers.module.scss";
import useContrastClasses from "../../hooks/useContrastClasses";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext";

const Numbers = () => {
  const { widget } = useContext<any>(ThemeContext);
  const containerStyle = widget ? { height: "248px" } : { height: "208px" };

  const { getOrangeTextContrastClasses, getNumbersL, getNumbersTextL } = useContrastClasses();
  const orangeTextContrast = getOrangeTextContrastClasses();
  const numbersL = getNumbersL();
  const numbersTextL = getNumbersTextL();

  return (
    <div className={`${styles.numbersContainer} ${orangeTextContrast}`} style={containerStyle}>
      <div>
        <h1 className={numbersL}>320+</h1>
        <p className={numbersTextL}>Проекти</p>
      </div>
      <div>
        <h1 className={numbersL}>580+</h1>
        <p className={numbersTextL}>Волонтери</p>
      </div>
      <div>
        <h1 className={numbersL}>25+</h1>
        <p className={numbersTextL}>Партнери</p>
      </div>
    </div>
  );
};

export default Numbers;
