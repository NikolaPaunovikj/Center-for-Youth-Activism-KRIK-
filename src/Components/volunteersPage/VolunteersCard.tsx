import { IVolunteerData } from "@/pages/volunteers";
import styles from "../../styles/Components_Style/volunteers/VolunteerCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import useContrastClasses from "@/hooks/useContrastClasses";

interface Props {
  volunteer: IVolunteerData;
}
const VolunteersCard: React.FC<Props> = ({ volunteer }) => {
  const { getTextS, getTextXs } = useContrastClasses();
  const textS = getTextS();
  const textXs = getTextXs();
  return (
    <div className={styles.volunteerCard}>
      <Link aria-label={"navigate to volunteer"} href={`/volunteers/${volunteer.id}`}>
        <div className={styles.imageContainer}>
          <img src={volunteer.img} alt={"volunteerImage"}></img>
        </div>
        <div className={styles.volunteerDescription}>
          <h5 className={textS}>{volunteer.fullName}</h5>
          <p className={textXs}>
            {volunteer.age} Години, <span>{volunteer.country}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VolunteersCard;
