"use client";

import { useEffect } from "react";
import styles from "./Navigation.module.css";
import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  useEffect(() => {
    let nav = document.querySelector("#nav") as HTMLElement;
    // Initialize styles after CSS is applied
    if (document.body.scrollTop / window.innerHeight > 1)
      nav.classList.add(styles.exists);

    window.addEventListener(
      "scroll",
      // Adds this function to the scroll event!
      function () {
        const scrollTop = document.body.scrollTop / window.innerHeight;
        nav.style.opacity = scrollTop.toString();
        if (document.body.scrollTop / window.innerHeight > 0.05) {
          nav.classList.add(styles.exists);
        } else {
          nav.classList.remove(styles.exists);
        }
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
            <Link href="/#header" replace={true}>
              top
            </Link>
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
