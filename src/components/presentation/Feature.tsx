import { FC, PropsWithChildren } from "react";

const Feature: FC<PropsWithChildren<{ title?: string; iconName?: string }>> = ({
  title,
  iconName,
  children,
}) => (
  <div className="col">
    <div className="card border-0">
      {iconName && (
        <img
          src={`icons/${iconName}.png`}
          className="card-img-top"
          alt="TODO"
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
