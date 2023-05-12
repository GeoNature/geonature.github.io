import { FC } from "react";

const PartnerCard: FC<{
  title?: string;
  logoName: string;
  href?: string;
}> = ({ title, logoName, href }) => (
  <div className="col">
    <div className="card border-0">
      <a href={href}>
        <img
          src={`images/partners/${logoName}.png`}
          className="card-img"
          style={{ maxWidth: "172px" }}
          alt={title}
        />
      </a>
    </div>
  </div>
);

export default PartnerCard;
