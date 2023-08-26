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
  handleFilter: (feature: string) => void;
}
export const Project = (props: Props) => {
  const { data, handleClick, handleFilter } = props;

  return (
    <article
      className="project--container"
      onClick={() => handleClick(data.title)}
      id={`${data.title}-project`}
    >
      <div className="project--flex">
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
            <button
              key={feature}
              className="feature"
              onClick={() => handleFilter(feature)}
            >
              {feature}{" "}
            </button>
          ))}
          {data.approach.map((feature) => (
            <button
              key={feature}
              className="approach"
              onClick={() => handleFilter(feature)}
            >
              {feature}{" "}
            </button>
          ))}
          {data.tech.map((feature) => (
            <button
              key={feature}
              className="tech"
              onClick={() => handleFilter(feature)}
            >
              {feature}{" "}
            </button>
          ))}
        </div>
      </div>
    </article>
  );

  /*   return (
    <div className="project--scroll">
      <article className="project--grid">
        <Image
          src={mobileUrl}
          alt={`${data.title} image for mobile`}
          width={200}
          height={300}
          className="project--mobile"
        />

        <div className="project--text">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <div className="project--data">
            {data.features.map((feature) => (
              <p key={feature}>{feature}</p>
            ))}
          </div>
        </div>

        <div className="project--desktop">
          <Image
            src={desktopUrl}
            alt={`${data.title} image for desktop`}
            width={300}
            height={150}
            className="project--desktop-img"
          />
          <Link
            href={data.url}
            target="_blank"
            className="project--desktop-btn"
          >
            <button>Check it!</button>
          </Link>
        </div>
      </article>
    </div>
  ); */
};
