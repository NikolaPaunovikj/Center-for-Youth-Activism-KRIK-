import useContrastClasses from "@/hooks/useContrastClasses";
import styles from "../../styles/Components_Style/servicesKrik/servicesMain.module.scss";

const ServicesInfo = ({ title, content }: any) => {
  const { getHeadlineL, getBodyL } = useContrastClasses();
  const headlineL = getHeadlineL();
  const bodyL = getBodyL();

  console.log(title, content);
  return (
    <div className={styles.infoContainer}>
      <h5 className={headlineL}>{title}</h5>
      <p className={bodyL}>{content}</p>
    </div>
  );
};

export default ServicesInfo;
