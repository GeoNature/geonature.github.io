import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

/**
 * For simplifying the layout of pages. "Hero" can be used to highlight important content.
 */
const Section: FC<PropsWithChildren<{ title?: string; hero?: boolean }>> = ({
  title,
  children,
  hero = false,
}) => (
  <div className={clsx(hero && "bg-hero")}>
    <section className={clsx(hero ? "py-8" : "my-5", hero && "container")}>
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
