import { INewsData } from "@/pages";
import styles from "../../styles/Components_Style/homePage/LatestNews.module.scss";
import SingleNews from "./SingleNews";
import { useRef } from "react";
import useContrastClasses from "../../hooks/useContrastClasses";
import Link from "next/link";

interface Props {
  sortedNews: INewsData[];
}

const LatestNews: React.FC<Props> = ({ sortedNews }) => {
  const { getOrangeContrastClasses, getVioletContrastClasses, getButtonL } = useContrastClasses();
  const orangeContrast = getOrangeContrastClasses();
  const violetContrast = getVioletContrastClasses();
  const lButton = getButtonL();

  let startX: number | null = null;
  let thumbPosition: number | null = null;
  const imageListRef = useRef<HTMLDivElement | null>(null);
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const thumb = e.target as HTMLDivElement;
    startX = e.clientX;
    thumbPosition = thumb.offsetLeft;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (startX !== null && thumbPosition !== null && imageListRef.current) {
      const thumb = e.target as HTMLDivElement;
      const deltaX = e.clientX - startX;
      let newThumbPosition = thumbPosition + deltaX;
      const containerWidth = thumb.parentElement?.offsetWidth || 0;
      const maxThumbPosition = containerWidth - thumb.offsetWidth;
      newThumbPosition = Math.max(0, Math.min(newThumbPosition, maxThumbPosition));
      thumb.style.left = `${newThumbPosition}px`;
      const percentagePosition = newThumbPosition / maxThumbPosition;
      const maxScroll = imageListRef.current.scrollWidth - imageListRef.current.clientWidth;
      imageListRef.current.scrollLeft = percentagePosition * maxScroll;
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);

    startX = null;
    thumbPosition = null;
  };

  return (
    <div className={styles.container}>
      <h1>Најнови вести</h1>
      <div className={styles.sliderWrapper}>
        <div className={styles.imageList} ref={imageListRef}>
          {sortedNews.map((item, index) => (
            <SingleNews item={item} key={index} />
          ))}
        </div>
      </div>
      <div className={styles.sliderScrollbar}>
        <div className={styles.scrollbarTrack}>
          <div
            aria-label={"show dropdown"}
            onMouseDown={handleMouseDown}
            className={`${styles.scrollbarThumb} ${orangeContrast}`}
          ></div>
        </div>
      </div>
      <Link href={"newsletter/monthly"}>
        <button aria-label={"navigate to newsletter"} className={`${violetContrast} ${lButton}`}>
          Види за цел месец
        </button>
      </Link>
    </div>
  );
};

export default LatestNews;
