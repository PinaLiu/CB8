import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header class={styles.header_main}>
      <div class={styles.header_logo}>
        <img
          className={styles.logo}
          src="https://th.bing.com/th/id/OIG1.on2KxDHdLoppaEFR383r?pid=ImgGn"
          alt="Logo Pizzeria Nà Zà Pina"
        />
      </div>

      <div class={styles.header_menu}>
        <nav class={styles.nav_menu}>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/creaPizza" passHref>
                Crea Pizza
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Menù
              </Link>
            </li>
            <li>
              <Link href="/carrello" passHref>
                Carrello
              </Link>
            </li>

            <li>
              <Link href="/contatti" passHref>
                Contatti
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
