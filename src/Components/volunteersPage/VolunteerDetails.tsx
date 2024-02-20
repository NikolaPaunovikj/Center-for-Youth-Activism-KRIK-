import { IVolunteerData } from "@/pages/volunteers";
import styles from "../../styles/Components_Style/volunteers/VolunteerDetails.module.scss";
import useContrastClasses from "@/hooks/useContrastClasses";

interface Props {
  item: IVolunteerData;
}

const VolunteerDetails: React.FC<Props> = ({ item }) => {
  const { getHeadlineL, getBodyL } = useContrastClasses();
  const headlineL = getHeadlineL();
  const bodyL = getBodyL();
  return (
    <div className={styles.volunteerDetailsContainer}>
      <div className={styles.imageContainer}>
        <img src={item.img} alt="volunteerImage" />
      </div>
      <div aria-label={"volunteer description"} className={styles.volunteerDescription}>
        <h1 className={headlineL}>{item.fullName}</h1>
        <p className={bodyL}>{item.description}</p>
      </div>
    </div>
  );
};

export default VolunteerDetails;
