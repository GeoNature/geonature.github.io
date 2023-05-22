import { FC, PropsWithChildren } from "react";

const Page: FC<PropsWithChildren> = ({ children }) => (
  <div className="constrainer">{children}</div>
);

export default Page;
