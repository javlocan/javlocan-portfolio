"use client";

import { useEffect } from "react";
import styles from "./Navigation.module.css";
import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      function () {
        let nav = document.querySelector("#nav") as HTMLElement;
        let scrollTop = document.body.scrollTop / window.innerHeight;
        nav.style.opacity = scrollTop.toString();
      },
      true
    );
    window.document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });
  }, []);

  const handleMenu = () => {
    let nav = document.querySelector("#nav") as HTMLElement;
    nav.classList.toggle(styles.navOpen);
  };

  const closeMenu = () => {
    let nav = document.querySelector("#nav") as HTMLElement;
    nav.classList.remove(styles.navOpen);
  };

  return (
    <>
      <nav className={styles.navigationContainer} id="nav">
        <Image
          id="icon"
          className={styles.navIcon}
          src="/icons/MENU.png"
          width="36"
          height="36"
          alt="menu icon"
          onClick={() => handleMenu()}
        />
        <ul className={styles.navigationList}>
          <li>
            <Link href="/#header">top</Link>
          </li>
          <li>
            <Link href="/#about">about</Link>
          </li>
          <li>
            <Link href="/#skills">skills</Link>
          </li>
          <li>
            <Link href="/#projects">projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
