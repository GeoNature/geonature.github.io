import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

const ScreenshotCard: FC<
  PropsWithChildren<{
    title?: string;
    columnClasses?: string;
    screenshotName?: string;
    href?: string;
  }>
> = ({ title, screenshotName, columnClasses, children, href }) => (
  <div className={clsx(columnClasses)}>
    <div className="card">
      {screenshotName && (
        <img
          src={`images/screenshots/${screenshotName}.png`}
          className="card-img-top"
          alt="TODO"
        />
      )}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
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
