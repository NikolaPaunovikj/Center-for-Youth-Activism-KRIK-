import { IProject } from "@/pages";
import styles from "../../styles/Components_Style/homePage/Upcoming.module.scss";
import Image from "next/image";
import useContrastClasses from "../../hooks/useContrastClasses";
import Link from "next/link";
import { useState } from "react";

interface Props {
  closestProject: IProject | null;
}

const UpcomingProject: React.FC<Props> = ({ closestProject }) => {
  const {
    getVioletContrastClasses,
    getYellowContrastClasses,
    getButtonL,
    getTextMUpcoming,
    getTextS,
    getBodyL,
  } = useContrastClasses();
  const violetContrast = getVioletContrastClasses();
  const yellowContrast = getYellowContrastClasses();
  const textUpcoming = getTextMUpcoming();
  const textS = getTextS();
  const bodyL = getBodyL();
  const buttonL = getButtonL();

  const monthNames = [
    "Јан",
    "Февр",
    "Maр",
    "Апри",
    "Mај",
    "Јун",
    "Јул",
    "Авг",
    "Септ",
    "Окт",
    "Ноемв",
    "Дек",
  ];

  let monthName = "";
  let dayName = null;
  const startDateString = closestProject?.start_date;

  if (startDateString) {
    const startDate = new Date(startDateString);
    const monthIndex = startDate.getMonth();
    monthName = monthNames[monthIndex];
    const dateParts = startDateString.split(".");
    dayName = parseInt(dateParts[1], 10);
  }

  return (
    <div className={styles.upcomingContainer}>
      <div className={styles.projectInfoContainer}>
        <p className={textUpcoming}>Наскоро</p>
        <p className={textS}>{closestProject?.title}</p>
        <p className={bodyL}>{closestProject?.description}</p>
        <div className={styles.projectInfoButtonContainer}>
          <Link href={`/projects/${closestProject?.id}`}>
            <button aria-label={"navigate to project"} className={`${yellowContrast} ${buttonL}`}>
              Види Повеќе
            </button>
          </Link>
          <Link href={"/volunteerApplication"}>
            <button
              aria-label={"navigate to volunteer application"}
              className={`${violetContrast} ${buttonL}`}
            >
              Пријави се!
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.projectImageContainer}>
        <img src="/UpcomingProject.jpg" alt="UpcomingProject" />
        <p>
          <span className={styles.day}>{dayName}</span> <span>{monthName}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default UpcomingProject;
