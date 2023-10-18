"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export const Landing = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".social--icon");
    let delay = 0;
    icons.forEach((icon) => {
      setTimeout(() => {
        icon.classList.add("observed-icon");
      }, delay);
      //entry.target.classList.add("observed");

      delay = delay + 200;
    });
  }, []);

  return (
    <header id="header">
      <div className="title--grid">
        <h1>JAVIER LOPEZ CANTERO</h1>
        <h4>.developer</h4>
        <div className="social--container">
          <Link
            href="mailto:javlocan.dev@gmail.com"
            target="_blank"
            className="social--icon"
          >
            <Image
              src="/icons/gmail.svg"
              width="30"
              height="30"
              alt="gmail icon"
            />
          </Link>
          <Link
            href="https://github.com/javlocan"
            target="_blank"
            className="social--icon"
          >
            <Image
              src="/icons/github.svg"
              width="30"
              height="30"
              alt="github icon"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/javlocandev/"
            target="_blank"
            className="social--icon"
          >
            <Image
              src="/icons/linkedin.svg"
              width="30"
              height="30"
              alt="linkedin icon"
            />
          </Link>
          <Link href="/cv.pdf" target="_blank" className="social--icon">
            <Image
              src="/icons/cv.svg"
              width="36"
              height="28"
              alt="curriculum icon"
            />
          </Link>
        </div>
        <div className="title--quote">
          <h5>
            Tras un tiempo explorando profesionalmente el mundo social, he
            decidido volver a mis raíces de ingeniero como desarrollador web
            <b> fullstack </b>y<b> frontend.</b>
          </h5>
        </div>
      </div>
    </header>
  );
};
