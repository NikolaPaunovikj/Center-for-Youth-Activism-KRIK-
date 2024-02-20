import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { ITeamMember } from "../team";
import { IVolunteerData } from ".";
import VolunteersCard from "@/Components/volunteersPage/VolunteersCard";
import Head from "next/head";
import VolunteerDetails from "@/Components/volunteersPage/VolunteerDetails";
import SingleNews from "@/Components/homePage/SingleNews";
import styles from "../../styles/Components_Style/volunteers/VolunteerDetails.module.scss";
import { useEffect, useState } from "react";
import useSwipe from "@/hooks/useSwipe";
import useContrastClasses from "@/hooks/useContrastClasses";

interface Props {
  item: IVolunteerData;
}

const Volunteer: NextPage<Props> = ({ item }) => {
  const { getHeadlineL } = useContrastClasses();
  const headlineL = getHeadlineL();
  const { handleMouseDown, handleMouseMove, handleMouseUp } = useSwipe();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <VolunteerDetails item={item} />
      <h1 className={`${headlineL} ${styles.valunteerProjectsHeading}`}>
        Проекти во кои учествува
      </h1>
      <div
        className={styles.projectsContainer}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className={styles.projectsWrapper}>
          {item?.projects?.map((item) => (
            <SingleNews item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Volunteer;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:5001/volunteers");
  const data: IVolunteerData[] = await res.json();

  const paths = data.map((item: IVolunteerData) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.id) {
    const res = await fetch(`http://localhost:5001/volunteers/${params.id}`);
    const data = await res.json();
    return {
      props: {
        item: data,
      },
    };
  }
  return {
    props: {
      item: null,
    },
  };
};