import useContrastClasses from "@/hooks/useContrastClasses";
import styles from "../../styles/Components_Style/servicesKrik/servicesGallery.module.scss";
import Image from "next/image";

interface Props {
  images: any;
}

const ServicesGallery: React.FC<Props> = ({ images }) => {
  const { getTextM } = useContrastClasses();
  const textM = getTextM();

  return (
    <div className={styles.servicesGalleryContainer}>
      <h5 aria-label={"activity gallery"} className={textM}>
        Галерија Со Активности
      </h5>
      <div className={styles.gallery}>
        <div className={styles.firstRow}>
          <div>
            <Image src={images[0]} alt={"activityImage"} width={491} height={440}></Image>
          </div>
          <div>
            <Image src={images[1]} alt={"activityImage"} width={1005} height={440}></Image>
          </div>
        </div>
        <div className={styles.secondRow}>
          <div>
            <Image src={images[2]} alt={"activityImage"} width={491} height={440}></Image>
          </div>
          <div>
            <Image src={images[3]} alt={"activityImage"} width={491} height={440}></Image>
          </div>
          <div>
            <Image src={images[4]} alt={"activityImage"} width={491} height={440}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGallery;
