import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

/**
 * For simplifying the layout of pages. "Hero" can be used to highlight important content.
 */
const Section: FC<
  PropsWithChildren<{
    title?: string;
    hero?: boolean;
    alternate?: boolean;
    heroImage?: string;
  }>
> = ({ title, children, hero = false, alternate = false, heroImage }) => (
  <div
    className={clsx(hero && "bg-hero", alternate && "bg-light")}
    style={hero && heroImage ? { backgroundImage: `url(${heroImage})` } : {}}
  >
    <section
      className={clsx(
        "container",
        hero ? (heroImage ? "py-8" : "py-6") : "py-4 my-4"
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
