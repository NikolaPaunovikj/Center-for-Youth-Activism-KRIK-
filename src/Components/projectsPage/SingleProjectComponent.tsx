import { IProject } from "@/pages/projects/[id]";
import styles from "../../styles/Components_Style/projects/SingleProject.module.scss";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import useContrastClasses from "@/hooks/useContrastClasses";

interface Props {
  item: IProject;
}

const SingleProjectComponent: React.FC<Props> = ({ item }) => {
  const {
    getHeadlineXl,
    getBodyL,
    getTextS,
    getOrangeContrastClasses,
    getYellowContrastClasses,
  } = useContrastClasses();
  const headlineXl = getHeadlineXl();
  const bodyL = getBodyL();
  const textS = getTextS();
  const orangeContrast = getOrangeContrastClasses();
  const yellowContrast = getYellowContrastClasses();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.img.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + item.img.length) % item.img.length);
  };

  useEffect(() => {
    const calculateProgress = () => {
      const dateFormat = "DD.MM.YYYY";
      const startDate = dayjs(item.start_date, { format: dateFormat });
      const endDate = dayjs(item.end_date, { format: dateFormat });
      const currentDate = dayjs();

      const totalDuration = Math.max(1, dayjs(endDate).diff(dayjs(startDate)));
      const elapsedDuration = Math.max(0, dayjs(currentDate).diff(dayjs(startDate)));

      const percentage = (elapsedDuration / totalDuration) * 100;
      setProgress(percentage > 100 ? 100 : percentage);
      console.log("Parsed startDate:", startDate.format(dateFormat));
      console.log("Parsed endDate:", endDate.format(dateFormat));
    };

    calculateProgress();
  }, [item]);
  return (
    <div className={styles.singleProjectContainer}>
      <div className={styles.projectCarousel}>
        <img src={item.img[currentIndex]} alt="projectImage" />
        <button onClick={nextImage} className={styles.prevButton}>
          <img src="/PrevBtn.svg" alt="PrevBtn" />
        </button>
        <button onClick={prevImage} className={styles.nextButton}>
          <img src="/NextBtn.svg" alt="NextBtn" />
        </button>
      </div>
      <h1 className={headlineXl}>{item.title}</h1>
      <p aria-label={"project info"} className={bodyL}>
        Проектот ќе се фокусира на обезбедување и креирање иновативна дигитална алатка која ќе
        обезбеди онлајн можност за учење на младите од партнерски земји за развој на заедницата,
        активно граѓанство и процеси на одлучување.
      </p>
      <div className={styles.projectFirstInfo}>
        <div>
          <h1 className={headlineXl}>Цел на проектот</h1>
        </div>
        <div>
          <p aria-label={"project info"} className={bodyL}>
            Lorem ipsum dolor sit amet consectetur. Ipsum malesuada rutrum sem porttitor quam
            rhoncus elit et vulputate. Eu orci eu sit montes sit dui vitae consequat. Sed fermentum
            consequat amet elit urna in tincidunt curabitur.{" "}
          </p>
        </div>
      </div>
      <div className={styles.projectSecondInfo}>
        <div>
          <h1 className={headlineXl}>За кого е наменет овој проект?</h1>
          <p aria-label={"project info"} className={bodyL}>
            Lorem ipsum dolor sit amet consectetur. Ipsum malesuada rutrum sem porttitor quam
            rhoncus elit et vulputate. Eu orci eu sit montes sit dui vitae consequat. Sed fermentum
            consequat amet elit urna in tincidunt curabitur.{" "}
          </p>
        </div>
        <div>
          <img src="/krikZaKogo.png" alt="krikZaKogo" />
        </div>
      </div>
      <div className={styles.progressBar}>
        <span>{`${Math.floor(progress)}%`}</span>
        <div
          style={{ width: `${progress}%` }}
          className={`${yellowContrast} ${styles.progressIndicator}`}
        ></div>
      </div>
      <div className={styles.applicationContainer}>
        <div className={styles.apply}>
          <p className={textS}>Заинтересиран/а си?</p>
          <Link aria-label={"navigate to volunteer application"} href={"/volunteerApplication"}>
            <button>Пријави Се!</button>
          </Link>
        </div>
        <div className={styles.donate}>
          <p className={textS}>Сакаш да не подржиш?</p>
          <Link aria-label={"navigate to donation page"} href={"/donate"}>
            <button className={orangeContrast}>Донирај!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectComponent;
