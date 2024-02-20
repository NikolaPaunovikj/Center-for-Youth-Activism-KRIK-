import { GetStaticProps, NextPage } from "next";
import styles from "../../styles/Components_Style/servicesKrik/servicesMain.module.scss";
import { SetStateAction, useContext, useState } from "react";
import ServicesGallery from "@/Components/servicesKrik/ServicesGallery";
import ServicesInfo from "@/Components/servicesKrik/ServicesInfo";
import { ThemeContext } from "@/Context/ThemeContext";
import useContrastClasses from "@/hooks/useContrastClasses";

interface Props {
  servicesData: any;
}

const servicesKrik: NextPage<Props> = ({ servicesData }) => {
  const { getTextS, getOrangeContrastClasses } = useContrastClasses();
  const textS = getTextS();
  const orangeContrast = getOrangeContrastClasses();
  const { handleServicesClick, activeService } = useContext<any>(ThemeContext);

  let title = "";
  let content = "";
  let images;
  if (activeService === 0) {
    title = servicesData.CentarKrikni.title;
    content = servicesData.CentarKrikni.content;
    images = servicesData.CentarKrikni.images;
  } else if (activeService === 1) {
    title = servicesData.NezavisniEdinici.title;
    content = servicesData.NezavisniEdinici.content;
    images = servicesData.NezavisniEdinici.images;
  } else if (activeService === 2) {
    title = servicesData.Sovetuvalishte.title;
    content = servicesData.Sovetuvalishte.content;
    images = servicesData.Sovetuvalishte.images;
  }

  return (
    <>
      <div className={styles.navigationBar}>
        <div onClick={() => handleServicesClick(0)}>
          <h5>Центар Крикни</h5>
          <div className={`${orangeContrast} ${activeService === 0 ? styles.bar : ""}`}></div>
        </div>
        <div onClick={() => handleServicesClick(1)}>
          <h5>Независни станбени единици</h5>
          <div className={`${orangeContrast} ${activeService === 1 ? styles.bar : ""}`}></div>
        </div>
        <div onClick={() => handleServicesClick(2)}>
          <h5>Советувалиште</h5>
          <div className={`${orangeContrast} ${activeService === 2 ? styles.bar : ""}`}></div>
        </div>
      </div>
      <ServicesInfo title={title} content={content} />
      <ServicesGallery images={images} />
    </>
  );
};

export default servicesKrik;

export const getStaticProps: GetStaticProps = async () => {
  const servicesRes = await fetch("http://localhost:5001/services/");
  const servicesData = await servicesRes.json();

  return {
    props: {
      servicesData,
    },
  };
};
