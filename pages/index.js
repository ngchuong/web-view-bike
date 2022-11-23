import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";

import Header from "./component/header";
import Footer from "./component/footer";
import HomePage from "./home.js";

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <Header />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}
