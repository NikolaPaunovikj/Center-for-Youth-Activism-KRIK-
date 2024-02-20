import { useContext, useState } from "react";
import styles from "../styles/Components_Style/Navbar.module.scss";
import Image from "next/image";
import { ThemeContext } from "../Context/ThemeContext";
import useContrastClasses from "@/hooks/useContrastClasses";
import Link from "next/link";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { getYellowContrastClasses, getDonateClass } = useContrastClasses();
  const yellowContrast = getYellowContrastClasses();
  const donateContrast = getDonateClass();

  const { theme } = useContext<any>(ThemeContext);

  return (
    <>
      <nav className={`${styles.navbar} ${theme}`}>
        <div className={styles.newsLetterSearchContainer}>
          <Link aria-label={"navigate to newsletter"} href={"/newsletter"}>
            <h3>NEWSLETTER</h3>
          </Link>
          <input type="text" placeholder="SEARCH" />
        </div>
        <div className={styles.navbarOptions}>
          <span>En/Mkd</span>
          <Link aria-label={"navigate to eshop"} href={"/eshop"}>
            <span className="e-shop">E-Shop</span>
          </Link>
        </div>
      </nav>
      <header className={`${styles.header} ${yellowContrast}`}>
        <div>
          <Link aria-label={"navigate to homepage"} href={"/"}>
            <Image src="/krik.png" alt={"krik"} width={86} height={83}></Image>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <h5>За нас</h5>
              <ul className={` ${styles.dropdownMenu}`}>
                <li>
                  <Link aria-label={"navigate to about us"} href={"/aboutUs"}>
                    За Крик
                  </Link>
                </li>

                <li>
                  <Link aria-label={"navigate to team members"} href={"/team"}>
                    Тимот на Крик
                  </Link>
                </li>

                <li>
                  <Link aria-label={"navigate to volunteers"} href={"/volunteers"}>
                    Волонтери
                  </Link>
                </li>

                <li>Архива</li>
              </ul>
            </li>
            <Link aria-label={"navigate to services"} href={"/servicesKrik"}>
              <li>
                <h5>Услуги</h5>
              </li>
            </Link>
            <Link aria-label={"navigate to projects"} href={"/projects"}>
              <li>
                <h5>Проекти</h5>
              </li>
            </Link>
            <li>
              <h5>
                {" "}
                <a href="#contact">Контакт</a>
              </h5>
            </li>
            <Link
              aria-label={"navigate to donate page"}
              className={styles.donateLink}
              href={"/donate"}
            >
              <li>
                <h5 className={donateContrast}>Донирај</h5>
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
