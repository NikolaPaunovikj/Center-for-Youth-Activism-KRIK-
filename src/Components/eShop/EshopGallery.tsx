import { IProducts } from "@/pages/eshop";
import styles from "../../styles/Components_Style/eShop/EshopGallery.module.scss";

interface Props {
  products: IProducts[];
}

const EshopGallery: React.FC<Props> = ({ products }) => {
  console.log(products);
  return (
    <div className={styles.galleryContainer}>
      <h1>E-shop за младите</h1>
      <div className={`${styles.firstRow} `}>
        <div>{products.map((item, id) => id < 8 && <img src={item.productImg} alt="" />)}</div>
      </div>
      <div className={`${styles.secondRow} `}>
        <div>{products.map((item, id) => id < 8 && <img src={item.productImg} alt="" />)}</div>
      </div>
    </div>
  );
};

export default EshopGallery;
