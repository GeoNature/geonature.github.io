import { PropsWithChildren } from "react";
import Image from "next/image";

const ScreenshotCard = ({
  title,
  screenshot,
  children,
  href,
}: PropsWithChildren<{
  title?: string;
  screenshot: any;
  href?: string;
}>) => (
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
