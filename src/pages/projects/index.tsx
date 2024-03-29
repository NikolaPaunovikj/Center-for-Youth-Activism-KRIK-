import Pagination from "@/Components/projectsPage/PaginationControls";
import PaginationControls from "@/Components/projectsPage/PaginationControls";
import ProjectCard from "@/Components/projectsPage/ProjectCard";
import { NextPage } from "next";
import Head from "next/head";
import { SetStateAction, useEffect, useState } from "react";
import styles from "../../styles/Components_Style/projects/ProjectsMain.module.scss";
import dayjs from "dayjs";
import useContrastClasses from "@/hooks/useContrastClasses";

export interface IProject {
  id: number;
  title: string;
  description: string;
  date_posted: string;
  start_date: string;
  end_date: string;
  img: string;
}

interface Props {
  data: IProject[];
  dataFinished: IProject[];
}
const Projects: NextPage<Props> = ({ data, dataFinished }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFinishedPage, setCurrentFinishedPage] = useState(1);
  const { getHeadlineL, getHeadlineXl } = useContrastClasses();
  const headlineL = getHeadlineL();
  const headlineXl = getHeadlineXl();

  const pageSize = 4;
  const finishedPageSize = 8;

  const onPageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const onFinishedPageChange = (page: SetStateAction<number>) => {
    setCurrentFinishedPage(page);
  };

  const currentDate = dayjs();
  // Filter finished projects
  const finishedProjects = data.filter((project) => {
    const endDate = dayjs(project.end_date, "MM.DD.YYYY");
    return endDate.isBefore(currentDate);
  });

  // Filter ongoing projects
  const ongoingProjects = data.filter((project) => {
    const startDate = dayjs(project.start_date, "MM.DD.YYYY");
    const endDate = dayjs(project.end_date, "MM.DD.YYYY");
    return startDate.isBefore(currentDate) && endDate.isAfter(currentDate);
  });

  console.log(finishedProjects);

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = Math.min(startIdx + pageSize, ongoingProjects.length);
  const currentData = ongoingProjects.slice(startIdx, endIdx);

  const finishedStartIdx = (currentFinishedPage - 1) * finishedPageSize;
  const finishedEndIdx = Math.min(finishedStartIdx + finishedPageSize, finishedProjects.length);
  const finishedCurrentData = finishedProjects.slice(finishedStartIdx, finishedEndIdx);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className={`${headlineXl} ${styles.pageHeading}`}>Проекти</h1>
      <div className={styles.projectsContainer}>
        <h1 className={headlineL}>Тековни</h1>
        <div className={styles.projectsWrapper}>
          {currentData[0] && (
            <div className={styles.projectsLeft}>
              <ProjectCard project={currentData[0]} />
            </div>
          )}
          <div className={styles.projectsRight}>
            {currentData[1] && (
              <div className={styles.projectsRightTop}>
                <ProjectCard project={currentData[1]} customClass={"customCard2"} />
              </div>
            )}
            <div className={styles.projectsRightBottom}>
              {currentData[2] && (
                <div className={styles.projectsRightBottomLeft}>
                  <ProjectCard project={currentData[2]} customClass={"customCard3"} />
                </div>
              )}
              {currentData[3] && (
                <div className={styles.projectsRightBottomRight}>
                  <ProjectCard project={currentData[3]} customClass={"customCard4"} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <Pagination
            items={ongoingProjects.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
      </div>

      {/* Finished Projects */}
      <div className={styles.finishedProjectsContainer}>
        <h1 className={`${headlineL} ${styles.finishedProjectsHeading}`}>Завршени</h1>

        <div className={styles.finishedTop}>
          <div className={styles.finishedTopLeft}>
            {finishedCurrentData[0] && (
              <div className={styles.finishedTopLeftProjectContainer}>
                <ProjectCard customClass={"finishedCustomCard1"} project={finishedCurrentData[0]} />
              </div>
            )}
            <div className={styles.finishedTopLeftRight}>
              {finishedCurrentData[1] && (
                <div className={styles.finishedTopLeftRightFirstProjectContainer}>
                  <ProjectCard
                    customClass={"finishedCustomCard2"}
                    project={finishedCurrentData[1]}
                  />
                </div>
              )}
              {finishedCurrentData[2] && (
                <div className={styles.finishedTopLeftRightSecondProjectContainer}>
                  <ProjectCard
                    customClass={"finishedCustomCard3"}
                    project={finishedCurrentData[2]}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={styles.finishedTopRight}>
            {finishedCurrentData[3] && (
              <div className={styles.finishedTopRightProjectContainer}>
                <ProjectCard customClass={"finishedCustomCard"} project={finishedCurrentData[3]} />
              </div>
            )}
          </div>
        </div>

        {finishedCurrentData[4] && (
          <div className={styles.finishedBottom}>
            {finishedCurrentData[4] && (
              <div className={styles.finishedProjectsLeft}>
                <ProjectCard project={finishedCurrentData[4]} />
              </div>
            )}
            <div className={styles.finishedProjectsRight}>
              {finishedCurrentData[5] && (
                <div className={styles.projectsRightTop}>
                  <ProjectCard
                    project={finishedCurrentData[5]}
                    customClass={"finishedCustomCard5"}
                  />
                </div>
              )}
              <div className={styles.projectsRightBottom}>
                {finishedCurrentData[6] && (
                  <div className={styles.finishedProjectsRightBottomLeft}>
                    <ProjectCard
                      project={finishedCurrentData[6]}
                      customClass={"finishedCustomCard6"}
                    />
                  </div>
                )}
                {finishedCurrentData[7] && (
                  <div className={styles.finishedProjectsRightBottomRight}>
                    <ProjectCard
                      project={finishedCurrentData[7]}
                      customClass={"finishedCustomCard7"}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <Pagination
          items={finishedProjects.length}
          currentPage={currentFinishedPage}
          pageSize={finishedPageSize}
          onPageChange={onFinishedPageChange}
        />
      </div>
    </>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5001/projects");
  const data = await res.json();

  const resFinished = await fetch("http://localhost:5001/projects");
  const dataFinished = await resFinished.json();

  return {
    props: { data, dataFinished },
  };
};
