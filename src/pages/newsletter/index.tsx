
import NewsletterMain from "@/Components/newsletter/NewsletterMain";
import { NextPage } from "next";
import Head from "next/head";

const Newsletter: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NewsletterMain/>
    </>
  )
}

export default Newsletter;