import { FC, PropsWithChildren } from "react";
import Image from "next/image";

const ScreenshotCard: FC<
  PropsWithChildren<{
    title?: string;
    screenshot: any;
    href?: string;
  }>
> = ({ title, screenshot, children, href }) => (
  <div className="col">
    <div className="card">
      {title && <h3 className="card-header">{title}</h3>}
      {screenshot && (
        <Image
          src={screenshot}
          className="card-img-top h-auto"
          alt={`Screenshot of ${title}`}
        />
      )}
      <div className="card-body">
        {children}
        {href && (
          <a href={href} className="btn btn-primary text-white">
            Accéder
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ScreenshotCard;
