import { IProject } from "@/pages/volunteers";
import styles from "../../styles/Components_Style/projects/ProjectCard.module.scss";
import Link from "next/link";
import useContrastClasses from "@/hooks/useContrastClasses";

interface Props {
  project: IProject;
  customClass?: string;
}

const ProjectCard: React.FC<Props> = ({ project, customClass }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className={`${styles.projectCard} ${customClass && styles[customClass]}`}>
        <div className={styles.projectCardTitle}>
          <h2 aria-label={"project title"}>{project.title}</h2>
        </div>
        <div aria-label={"project image"} className={styles.projectCardImage}>
          <img src={project.img[0]} alt="projectImg" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
