import { Project } from "@/components";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export const Projects = () => {
  const [projectsImages, setProjectsImages] = useState<string[]>([
    "Buscaminas",
  ]);
  const [displayProject, setDisplayProject] = useState("Buscaminas");

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const scrollToDesktop = document.getElementById(
      `${displayProject}-image-desktop`
    );
    const scrollToMobile = document.getElementById(
      `${displayProject}-image-mobile`
    );
    const mobileContainer = document.querySelector(
      ".projects__display--mobile"
    );
    const desktopContainer = document.querySelector(
      ".projects__display--desktop"
    );
    const mobileOffset = scrollToMobile?.offsetTop || 0;
    const desktopOffset = scrollToDesktop?.offsetLeft || 0;
    setTimeout(() => {
      desktopContainer?.scrollTo(desktopOffset, 0);
    }, 100);

    setTimeout(() => {
      mobileContainer?.scrollTo(0, mobileOffset);
    }, 250);
  }, [displayProject]);

  useEffect(() => {}, [displayProject]);
  const handleClick = (project: string) => {
    !projectsImages.includes(project)
      ? setProjectsImages([...projectsImages, project])
      : null;
    setDisplayProject(project);
    const scrollToDisplay = document.querySelector(".projects__display");
    scrollToDisplay?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFilter = (feature: string) => {
    setFilter(feature);
  };
  return (
    <section id="projects">
      <div className="projects__header">
        <h2>PROJECTS</h2>
        <div className="projects__display">
          <Image
            src={"/projects/marco.png"}
            width={1870}
            height={1000}
            className="projects__display-frame"
            alt="Project images"
          />
          <div className="projects__display--desktop">
            {projectsImages.map((project) => (
              <Image
                key={project}
                id={`${project}-image-desktop`}
                src={`/projects/${project}/desktop.png`}
                width={1770}
                height={1000}
                className="projects__display--image"
                alt="Project desktop image"
              />
            ))}
          </div>
          <div className="projects__display--mobile">
            {projectsImages.map((project) => (
              <Image
                key={project}
                id={`${project}-image-mobile`}
                src={`/projects/${project}/mobile.png`}
                width={500}
                height={1000}
                className="projects__display--image"
                alt="Project desktop image"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="projects__table">
        {PROJECT_DATA.map((project) => (
          <Project
            key={project.title}
            data={project}
            handleClick={handleClick}
            handleFilter={handleFilter}
          />
        ))}
      </div>
    </section>
  );
};

const PROJECT_DATA = [
  {
    title: "Buscaminas",
    url: "https://buscaminas-v1.vercel.app/",
    description:
      "A simple minesweeper game with mobile-first design (responsive). Includes presets for difficulty, board size and several different other options to customize your game.",
    features: ["Mobile-first", "Responsive", "Panel"],
    approach: ["Reduced global state"],
    tech: ["TypeScript", "React", "Vite", "React Spring"],
  },
  {
    title: "Portfolio",
    url: "https://javlocan.vercel.app/",
    description:
      "My portfolio. Here you can read about me, see my projects, contact me, etc.",
    features: ["Mobile-first", "Responsive", "Panel"],
    approach: ["SSR", "SOLID"],
    tech: ["TypeScript", "React", "Vite", "React Spring"],
  },
];
