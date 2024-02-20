import { ITeamMember } from "@/pages/team";
import styles from "../../styles/Components_Style/team/MemberDetails.module.scss";
import Image from "next/image";
import useContrastClasses from "@/hooks/useContrastClasses";

interface Props {
  member: ITeamMember;
}
const MemberDetails: React.FC<Props> = ({ member }) => {
  const { getHeadlineL, getBodyL } = useContrastClasses();
  const headlineL = getHeadlineL();
  const bodyL = getBodyL();
  return (
    <div className={styles.memberDetailsContainer}>
      <div className={styles.imageContainer}>
        <Image src={member.img} alt={"memberImage"} width={619} height={568}></Image>
      </div>
      <div className={styles.descriptionContainer}>
        <h1 className={headlineL}>{member.fullName}</h1>
        <p className={bodyL}>{member.description}</p>
      </div>
    </div>
  );
};

export default MemberDetails;
