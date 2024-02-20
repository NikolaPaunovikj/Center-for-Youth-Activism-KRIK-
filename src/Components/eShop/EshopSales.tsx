import { IProducts } from "@/pages/eshop";
import styles from "../../styles/Components_Style/eShop/EshopSales.module.scss";
import EshopCard from "./EshopCard";
import { useEffect, useState } from "react";

interface Props {
  products: IProducts[];
}

const EshopSales: React.FC<Props> = ({ products }) => {
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

  //Pagination
  const ITEMS_PER_PAGE = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState<IProducts[]>([]);

  useEffect(() => {
    const initialDisplayedItems = products.slice(0, ITEMS_PER_PAGE);
    setDisplayedItems(initialDisplayedItems);
  }, [products]);

  const handleLoadMore = () => {
    const newPage = currentPage + 1;
    const newDisplayedItems = products.slice(0, newPage * ITEMS_PER_PAGE);
    setCurrentPage(newPage);
    setDisplayedItems(newDisplayedItems);
  };
  const canLoadMore = displayedItems.length < products.length;

  return (
    <div className={styles.salesContainer}>
      <h1>Рачно изработен накит</h1>
      <div className={styles.salesCardsWrapper}>
        {displayedItems?.map((item) => (
          <EshopCard handleItemClick={handleItemClick} favouriteItems={favourite} product={item} />
        ))}
      </div>

      <div className={styles.buttonContainer}>
        {canLoadMore && <button onClick={handleLoadMore}>Види Повеќе Продукти</button>}
      </div>
    </div>
  );
};

export default EshopSales;
