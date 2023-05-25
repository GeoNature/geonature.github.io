import Image from "next/image";

const PartnerCard = ({
  title,
  logo,
  href,
}: {
  title: string;
  logo: any;
  href?: string;
}) => (
  <div className="col">
    <div className="card border-0">
      <a href={href}>
        <Image src={logo} className="card-img w-auto" height={72} alt={title} />
      </a>
    </div>
  </div>
);

export default PartnerCard;
