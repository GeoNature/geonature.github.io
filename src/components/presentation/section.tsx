import { FC, PropsWithChildren } from "react";

const Section: FC<PropsWithChildren<{ title?: string }>> = ({
  title,
  children,
}) => (
  <section className="my-5">
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

export default Section;
