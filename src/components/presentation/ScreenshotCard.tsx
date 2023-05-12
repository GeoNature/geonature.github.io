import { FC, PropsWithChildren } from "react";

const ScreenshotCard: FC<
  PropsWithChildren<{
    title?: string;
    screenshotName?: string;
    href?: string;
  }>
> = ({ title, screenshotName, children, href }) => (
  <div className="col">
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
