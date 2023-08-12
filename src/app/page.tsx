"use client";

import { useEffect } from "react";

import { About, Landing, Skills, Projects } from "./scenes";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("observed");
            observer.observe(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const sections = window.document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
  });

  return (
    <main>
      <Landing />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
