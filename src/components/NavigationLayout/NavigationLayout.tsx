"use client";

import { useEffect } from "react";
import styles from "./NavigationLayout.module.css";

export const NavigationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
  }, []);

  return (
    <>
      <nav className={styles.navigationContainer} id="nav">
        <ul className={styles.navigationList}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};
