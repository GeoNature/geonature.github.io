import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

const Page: FC<PropsWithChildren<{ noContainer?: boolean }>> = ({
  noContainer,
  children,
}) => <div className={clsx(!noContainer && "container my-5")}>{children}</div>;

export default Page;
