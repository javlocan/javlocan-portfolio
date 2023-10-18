"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectData {
  title: string;
  description: string;
  url: string;
  features: string[];
  approach: string[];
    tech: string[];
}
interface Props {
  data: ProjectData;
  handleClick: (project: string) => void;
}
export const Project = (props: Props) => {
  const { data, handleClick } = props;

  return (
    <article
      className="project__container"
      onClick={() => handleClick(data.title)}
      id={`${data.title}-project`}
    >
      <h3>
        {data.title}
        <Link href={data.url} target="_blank">
          <Image
            src={"/icons/external-link.svg"}
            alt={data.title}
            className="project--link"
            width={20}
            height={20}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </Link>
      </h3>
      <p>{data.description}</p>
      <div className="project__features">
        {data.features.map((feature) => (
          <button key={feature} className="feature">
            {feature}{" "}
          </button>
        ))}
        {data.approach.map((feature) => (
          <button key={feature} className="approach">
            {feature}{" "}
          </button>
        ))}
        {data.tech.map((feature) => (
          <button key={feature} className="tech">
            {feature}{" "}
          </button>
        ))}
      </div>
    </article>
  );
};
