import { IProducts } from "@/pages/eshop";
import styles from "../../styles/Components_Style/eShop/EshopCard.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface Props {
  product: IProducts;
  handleItemClick: (e: any) => void;
  favouriteItems?: string[];
}
const EshopCard: React.FC<Props> = ({ product, handleItemClick, favouriteItems }) => {
  console.log(favouriteItems);
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardImgWrapper}>
        <Link href={`/eshop/${product.id}`}>
          <img src={product.productImg} alt="" />
        </Link>
      </div>
      <div className={styles.productDescription}>
        <h5>{product.productTitle}</h5>
        <p>{product.productDescription}</p>
        <h5>{product.productPrice}</h5>
        <div className={styles.optionsContainer}>
          <button>Купи</button>
          <img
            id={product.id}
            onClick={handleItemClick}
            className={styles.heartIcon}
            src={`${
              favouriteItems?.includes(product.id) ? `/heartSelected.svg` : `/heartDefault.svg`
            }`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EshopCard;
