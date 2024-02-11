import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.container_prova}>
        <div className={styles.footer}>
          <h1>Footer</h1>
          <Link className={styles.link} href="/contatti" passHref>
            <h2>Contatti</h2>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Footer;
