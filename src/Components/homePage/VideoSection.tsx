import Link from "next/link";
import styles from "../../styles/Components_Style/homePage/VideoSection.module.scss";
import Image from "next/image";

const VideoSection = () => {
  return (
    <div className={styles.videoSectionContainer}>
      <div className={styles.videoContainer}>
        <img src="/UpcomingProject.jpg" alt="UpcomingProject" />
        <img className={styles.playButton} src="/PlayButton.png" alt="PlayButton" />
      </div>
      <div className={styles.volunteerContainer}>
        <h5>
          Стани <br /> Волонтер
        </h5>
        <p>Сакаш Да Работиш Со Млади Лица? Оваа Можност Е Токму За Тебе.</p>
        <Link href={"/volunteerApplication"}>
          <button aria-label={"navigate to volunteer application"}>Придружи ни се</button>
        </Link>
      </div>
    </div>
  );
};

export default VideoSection;
