import { IProducts } from "@/pages/eshop";
import styles from "../../styles/Components_Style/eShop/EshopSingleItem.module.scss";
import { useEffect, useState } from "react";

interface Props {
  productItem: IProducts;
}

const EshopSingleItem: React.FC<Props> = ({ productItem }) => {
  const [favourite, setFavourite] = useState<string[]>([]);

  useEffect(() => {
    const storedFavouriteString = localStorage.getItem("favourite");
    const storedFavourite = storedFavouriteString ? JSON.parse(storedFavouriteString) : [];
    if (JSON.stringify(storedFavourite) !== JSON.stringify(favourite)) {
      setFavourite(storedFavourite);
    }
  }, []);

  const handleItemClick = (e: any) => {
    const selectedElement = e.target.id;
    setFavourite((prevFavorites) =>
      prevFavorites.includes(selectedElement)
        ? prevFavorites.filter((item) => item !== selectedElement)
        : [...prevFavorites, selectedElement]
    );
  };

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(favourite));
  }, [favourite]);
  return (
    <div className={styles.productItemContainer}>
      <div className={styles.imagesContainer}>
        <div className={styles.left}>
          <img src={productItem.productImg} alt="" />
        </div>
        <div className={styles.right}>
          <div>
            <img src={productItem.productImg} alt="" />
          </div>
          <div>
            <img src={productItem.productImg} alt="" />
          </div>
          <div>
            <img src={productItem.productImg} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.productItemInfo}>
        <div className={styles.infoLeft}>
          <h1>{productItem.productTitle}</h1>
          <p>{productItem.productAddInfo}</p>
        </div>
        <div className={styles.infoRight}>
          <h1>{productItem.productPrice}</h1>
          <div className={styles.optionsContainer}>
            <img
              id={productItem.id}
              onClick={handleItemClick}
              className={styles.heartIcon}
              src={`${
                favourite?.includes(productItem.id) ? `/heartSelected.svg` : `/heartDefault.svg`
              }`}
              alt=""
            />
            <button>Купи</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EshopSingleItem;
