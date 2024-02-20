import React, { useState } from "react";
import styles from "../../styles/Components_Style/team/TeamSlider.module.scss";
import { ITeamMember } from "@/pages/team";
import Link from "next/link";
import useContrastClasses from "@/hooks/useContrastClasses";

interface Props {
  teamData: ITeamMember[];
}

const TeamSlider: React.FC<Props> = ({ teamData }) => {
  const {
    getHeadlineXl,
    getBodyL,
    getTextM,
    getOrangeContrastClasses,
    getHeadlineL,
    getButtonL,
  } = useContrastClasses();
  const headlineXl = getHeadlineXl();
  const headlineL = getHeadlineL();
  const bodyL = getBodyL();
  const buttonL = getButtonL();

  const orangeContrast = getOrangeContrastClasses();

  let filterTeamData = teamData.filter((item) => {
    return item.keyRole === "boardMember";
  });
  const [active, setActive] = useState(1);

  const handleNext = () => {
    setActive((prevActive) => (prevActive + 1) % 3);
  };

  const handlePrev = () => {
    setActive((prevActive) => (prevActive - 1 + 3) % 3);
  };

  return (
    <div className={styles.teamContainer}>
      <h1 className={headlineXl}>
        Запознајте го <br /> Нашиот Тим
      </h1>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {filterTeamData.map((member, index) => (
            <div
              key={index}
              className={`${styles.item} ${index === active ? styles.center : ""} ${
                index === (active + 1) % 3 ? styles.right : ""
              } ${index === (active - 1 + 3) % 3 ? styles.left : ""}`}
            >
              <Link aria-label={"navigate to a team member"} href={`/team/${member.id}`}>
                <div className={styles.imageContainer}>
                  <img src={member.img} alt="memberImage" />
                </div>
              </Link>
              <div className={styles.sliderButtonContainer}>
                <button onClick={handlePrev}>
                  {" "}
                  <img src="/PrevBtn.svg" alt="PrevBtn" />{" "}
                </button>
                <button onClick={handleNext}>
                  {" "}
                  <img src="/NextBtn.svg" alt="NextBtn" />{" "}
                </button>
              </div>
              <div className={styles.description}>
                <Link aria-label={"navigate to a team member"} href={`/team/${member.id}`}>
                  <h5 className={headlineL}>{member.fullName}</h5>
                </Link>
                <p className={bodyL}>{member.role}</p>
                <button
                  aria-label={"navigate to a team member linkedin"}
                  className={` ${buttonL} ${styles.linkedin} ${orangeContrast}`}
                >
                  <a href={`/${member.linkedin}`}>Linkedin</a> <span> ></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
