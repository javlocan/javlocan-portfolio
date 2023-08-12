"use client";

interface Props {
  title: string;
  mobileUrl?: string;
  desktopUrl?: string;
}
export const Project = (props: Props) => {
  const { title, mobileUrl, desktopUrl } = props;
  return (
    <article className="project">
      <h4>{title}</h4>
    </article>
  );
};
