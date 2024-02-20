import Faq from "@/Components/aboutUs/Faq";
import KrikInfo from "@/Components/aboutUs/KrikInfo";
import OrganizationInfo from "@/Components/aboutUs/OrganizationInfo";
import { GetStaticProps, NextPage } from "next";

export interface IQuestion {
  id: string;
  question: string;
  answer: string;
}

interface Props {
  questionData: IQuestion[];
}

const AboutUs: NextPage<Props> = ({ questionData }) => {
  return (
    <>
      <OrganizationInfo />
      <KrikInfo />
      <Faq questionData={questionData} />
    </>
  );
};

export default AboutUs;

export const getStaticProps: GetStaticProps = async () => {
  const questionsRes = await fetch("http://localhost:5001/questions");
  const questionData: IQuestion[] = await questionsRes.json();

  return {
    props: {
      questionData,
    },
  };
};
