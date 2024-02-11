import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";

const Header = () => {
  return (
    <header class={styles.header_main}>
      <div class={styles.header_logo}>
        <Image
          className={styles.logo}
          src="https://th.bing.com/th/id/OIG1.on2KxDHdLoppaEFR383r?pid=ImgGn"
          alt="Logo Pizzeria Nà Zà Pina"
          width={100}
          height={100}
        />
      </div>

      <div class={styles.header_menu}>
        <nav class={styles.nav_menu}>
          <ul>
            <li>
              <Link href="/" passHref>
                <IoHomeSharp />
              </Link>
            </li>{" "}
            <li>
              <Link href="/carrello" passHref>
                <FaShoppingCart />
              </Link>
            </li>{" "}
            <li>
              <Link href="/menu" passHref>
                <MdOutlineRestaurantMenu />
              </Link>
            </li>
            <li>
              <Link href="/creaPizza" passHref>
                <FaPizzaSlice />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
