import useContrastClasses from "@/hooks/useContrastClasses";
import styles from "../../styles/Components_Style/team/ManagementBoard.module.scss";
import { ITeamMember } from "@/pages/team";
import Image from "next/image";
import Link from "next/link";

interface Props {
  teamData: ITeamMember[];
}

const ManagementBoard: React.FC<Props> = ({ teamData }) => {
  const { getBodyL, getHeadlineL, getTextS, getTextM } = useContrastClasses();
  const bodyL = getBodyL();
  const headlineL = getHeadlineL();
  const textM = getTextM();
  const textS = getTextS();
  let filterTeamData = teamData.filter((item) => {
    return item.keyRole === "management";
  });
  return (
    <div className={styles.managementBoardContainer}>
      <h1 className={headlineL}>Членови на управниот одбор</h1>
      {filterTeamData.map((member, index) => (
        <div
          className={
            index === 0 ? styles.firstManagementBoardWrapper : styles.managementBoardWrapper
          }
        >
          <div className={styles.imageContainer}>
            <Link href={`/team/${member.id}`}>
              <img src={member.img} alt="memberImage" />
            </Link>
          </div>

          <div className={styles.descriptionContainer}>
            <h3 className={textM}>{member.fullName}</h3>
            <h5 className={textS}>{member.role}</h5>
            <p className={bodyL}>{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManagementBoard;
