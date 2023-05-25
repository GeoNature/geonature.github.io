import { PropsWithChildren } from "react";
import Image from "next/image";

const Feature = ({
  title,
  icon,
  children,
}: PropsWithChildren<{ title?: string; icon?: any }>) => (
  <div className="col">
    <div className="card border-0">
      {icon && (
        <Image
          src={icon}
          className="card-img-top h-auto"
          alt={`Graphic showing ${title}`}
        />
      )}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {children}
      </div>
    </div>
  </div>
);

export default Feature;
