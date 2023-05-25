import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import Image from "next/image";

/**
 * For simplifying the layout of pages. "Hero" can be used to highlight important content.
 */
const Section: FC<
  PropsWithChildren<{
    title?: string;
    hero?: boolean;
    alternate?: boolean;
    noContainer?: boolean;
    heroImage?: any;
  }>
> = ({
  title,
  children,
  hero = false,
  alternate = false,
  noContainer = false,
  heroImage,
}) => (
  <div className={clsx(hero && "heroImage-container", alternate && "bg-light")}>
    {hero && heroImage && (
      <Image src={heroImage} fill className="heroImage-image" alt="TODO" />
    )}
    <section
      className={clsx(
        !noContainer && "container",
        hero ? (heroImage ? "py-8 heroImage-content" : "py-6") : "py-5"
      )}
    >
      <div
        className={clsx(hero && "bg-light bg-opacity-75 d-inline-block p-3")}
      >
        {title &&
          (hero ? (
            <h1 className="display-5 fw-bold">{title}</h1>
          ) : (
            <h2>{title}</h2>
          ))}
        {children}
      </div>
    </section>
  </div>
);

export default Section;
