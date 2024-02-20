import type { AppProps } from "next/app";
import { Mulish, Montserrat } from "@next/font/google";

import "../styles/base/_main.scss";
import { ThemeContext, ThemeProvider } from "@/Context/ThemeContext";
import Footer from "@/Components/Footer";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import ReadingMask from "@/Components/homePage/ReadingMask";
import Navbar from "@/Components/Navbar";
import Accesibility from "@/Components/homePage/Accesibility";
import { useContext } from "react";
config.autoAddCss = false;

const mulish = Mulish({
  subsets: ["latin"],
});

const montserat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main>
        <Navbar />
        <Accesibility />
        <Component {...pageProps} />

        <Footer />
      </main>
    </ThemeProvider>
  );
}
