import { INewsData } from "@/pages";
import styles from "../../styles/Components_Style/homePage/LatestNews.module.scss";
import useContrastClasses from "../../hooks/useContrastClasses";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { useState } from "react";
import Link from "next/link";

interface Props {
  item: INewsData;
}

const SingleNews: React.FC<Props> = ({ item }: any) => {
  const router = useRouter();
  const url = router.asPath;

  const { getBoldText } = useContrastClasses();
  const boldText = getBoldText();

  const currentDate = dayjs();
  const endDate = dayjs(item.end_date);
  const isPastEndDate = endDate.isBefore(currentDate);
  console.log(isPastEndDate);
  return (
    <div className={styles.newsContainer}>
      <Link aria-label={"navigate to project"} href={`/projects/${item.id}`}>
        {url.includes("volunteers") && (
          <div>
            <h5 className={styles.projectStatus}>{isPastEndDate ? "Завршен" : "Тековен"}</h5>
          </div>
        )}
        {url.includes("volunteers") ? (
          <img className={styles.imageItem} src={item?.img} alt="projectImage" />
        ) : (
          <img className={styles.imageItem} src={item.img[0]} alt="projectImage" />
        )}

        <div className={styles.imageItemText}>
          <div>
            <p className={boldText}>{item.title}</p>
            <span>
              <img src="/Date.png" alt="dateLogo" />
              {item.start_date} {item.end_date ? `- ${item.end_date}` : ""}
            </span>
          </div>
          <p className={styles.newsDescription}>{item.description}</p>
          <p aria-label={"show more"} className={styles.showMore}>
            Види Повеќе &#8594;
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SingleNews;
