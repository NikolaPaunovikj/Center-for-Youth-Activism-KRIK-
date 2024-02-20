import styles from "../../styles/Components_Style/homePage/Services.module.scss";
import Image from "next/image";
import useContrastClasses from "../../hooks/useContrastClasses";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext";

const Services = () => {
  const { getOrangeContrastClasses, getHeadlineXl, getBodyL } = useContrastClasses();
  const orangeContrast = getOrangeContrastClasses();
  const xlWidget = getHeadlineXl();
  const lWidget = getBodyL();
  const { handleServicesClick } = useContext<any>(ThemeContext);

  return (
    <div className={styles.servicesContainer}>
      <h1 className={xlWidget}>Нашите услуги</h1>
      <div className={styles.servicesWrapper}>
        <div className={styles.image}>
          <Image src="/Uslugi.jpg" alt={"Uslugi"} width={748} height={608}></Image>
        </div>
        <div className={styles.servicesOverview}>
          <Link href={"/servicesKrik"}>
            <div
              aria-label={"Мултифункционален Центар Крикни"}
              onClick={() => handleServicesClick(0)}
              className={styles.service}
            >
              <div>
                <h5>01 Мултифункционален Центар Крикни</h5>
                <div className={styles.imageContainer1}>
                  <Image src="/Arrow.png" alt={"Arrow"} width={15.07} height={15.07}></Image>
                </div>
              </div>
              <p className={lWidget}>
                Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae
                dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat.{" "}
              </p>
            </div>
          </Link>
          <Link href={"/servicesKrik"}>
            <div
              aria-label={"Независни Станбени Единици"}
              onClick={() => handleServicesClick(1)}
              className={styles.service}
            >
              <div>
                <h5>02 Независни Станбени Единици</h5>
                <div className={`${styles.imageContainer2} ${orangeContrast}`}>
                  <Image src="/Arrow.png" alt={"Arrow"} width={15.07} height={15.07}></Image>
                </div>
              </div>
              <p className={lWidget}>
                Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae
                dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat.{" "}
              </p>
            </div>
          </Link>
          <Link href={"/servicesKrik"}>
            <div
              aria-label={"Советувалиште За Млади И Родители"}
              onClick={() => handleServicesClick(2)}
              className={styles.service}
            >
              <div>
                <h5>03 Советувалиште За Млади И Родители</h5>
                <div className={`${styles.imageContainer3} ${orangeContrast}`}>
                  <Image src="/Arrow.png" alt={"Arrow"} width={15.07} height={15.07}></Image>
                </div>
              </div>

              <p className={lWidget}>
                Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae
                dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat.{" "}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
