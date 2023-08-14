"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import Image from "next/image";

import styles from "./Navigation.module.css";

export const Navigation = () => {
  const router = useRouter();
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
    /*   window.document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    }); */
  }, []);

  const handleMenu = () => {
    let nav = document.querySelector("#nav") as HTMLElement;
    nav.classList.toggle(styles.navOpen);
  };

  const handleLink = (query: string) => {
    let nav = document.querySelector("#nav") as HTMLElement;
    nav.classList.remove(styles.navOpen);
    router.replace(query, { scroll: true });
  };

  return (
    <>
      <nav className={styles.navigationContainer} id="nav">
        <Image
          id="icon"
          draggable="false"
          className={styles.navIcon}
          src="/icons/MENU.png"
          width="36"
          height="36"
          alt="menu icon"
          onClick={() => handleMenu()}
        />
        <ul className={styles.navigationList}>
          <li onClick={() => handleLink("/#")}>top</li>
          <li onClick={() => handleLink("/#about")}>about</li>
          <li onClick={() => handleLink("/#skills")}>skills</li>
          <li onClick={() => handleLink("/#projects")}>projects</li>
        </ul>
      </nav>
    </>
  );
};
