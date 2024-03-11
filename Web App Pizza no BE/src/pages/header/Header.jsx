import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header_main}>
      <div className={styles.header_logo}>
        <Image
          className={styles.logo}
          src="https://th.bing.com/th/id/OIG1.on2KxDHdLoppaEFR383r?pid=ImgGn"
          alt="Logo Pizzeria Nà Zà Pina"
          width={100}
          height={100}
        />
      </div>

      <div className={styles.navigation}>
        <input
          type="checkbox"
          className={styles.navigation__checkbox}
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className={styles.navigation__button}>
          <span className={styles.navigation__icon}> </span>
        </label>

        <div className={styles.navigation__background}> </div>

        <nav className={styles.navigation__nav}>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <Link
                href="/creaPizza"
                passHref
                className={styles.navigation__link}
              >
                {" "}
                Crea La Tua Pizza
              </Link>
            </li>
            <li>
              <Link href="/menu" passHref className={styles.navigation__link}>
                {" "}
                Le Nostre Pizze
              </Link>
            </li>
            <li>
              <Link
                href="/carrello"
                passHref
                className={styles.navigation__link}
              >
                {" "}
                La Tua Pizza
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
