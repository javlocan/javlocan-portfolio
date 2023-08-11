"use client";

import { useEffect } from "react";

import { About, Landing, Skills, Projects } from "./scenes";
import { Navigation } from "@/components";

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
        threshold: 0.6,
      }
    );

    const sections = window.document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
  });

  return (
    <main>
      <Navigation />
      <Landing />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
