"use client";

import { useState } from "react";
import styles from "../../styles/Components_Style/projects/PaginationControl.module.scss";

interface Props {
  items: number;
  currentPage: number;
  pageSize: number;
  onPageChange: any;
}

const Pagination: React.FC<Props> = ({ items, currentPage, pageSize, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount == 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  let pagesToShow = [];

  if (currentPage <= 5) {
    pagesToShow = pages.slice(0, currentPage + 6);
  } else {
    pagesToShow = pages.slice(currentPage - 5, currentPage + 3);
  }

  console.log(currentPage);
  console.log(pages);

  return (
    <div className={styles.paginationControlContainer}>
      <ul>
        {
          <li className={`${currentPage === 1 && styles.active}`}>
            <p onClick={() => onPageChange(1)}>{pages[0]}</p>
          </li>
        }
        {pagesToShow.map(
          (page, index) =>
            index > 0 && (
              <li className={`${currentPage === page && styles.active}`}>
                <p onClick={() => onPageChange(page)}>{page}</p>
              </li>
            )
        )}
        {currentPage + 6 < pages.length && (
          <li>
            <p>...</p>
          </li>
        )}
        {currentPage + 6 <= pages.length && (
          <li className={`${currentPage === pages.length && styles.active}`}>
            <p onClick={() => onPageChange(pages.length - 1)}>{pages[pages.length - 2]}</p>
          </li>
        )}
        {currentPage + 6 <= pages.length && (
          <li className={`${currentPage === pages.length && styles.active}`}>
            <p onClick={() => onPageChange(pages.length)}>{pages[pages.length - 1]}</p>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Pagination;
