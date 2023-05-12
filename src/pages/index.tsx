import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FC, PropsWithChildren } from "react";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";
import Feature from "@/components/presentation/Feature";
import PartnerCard from "@/components/presentation/PartnerCard";

const PartnersMap = dynamic(() => import("@/components/dynamic/PartnersMap"), {
  ssr: false,
  loading: () => <span>Loading</span>,
});

const HomeLinkButton: FC<
  PropsWithChildren<{ href: string; className?: string }>
> = ({ href, className, children }) => (
  <Link
    href={href}
    role="button"
    className={clsx(className, "btn btn-primary me-2 mb-2")}
  >
    {children}
  </Link>
);

export default function Home() {
  return (
    <Page>
      <Head>
        <title>GeoNature</title>
        <meta
          name="description"
          content="GeoNature, un outil open source développé par les parcs nationaux français"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section title="GeoNature" hero heroImage="images/banners/hero.jpg">
          <p className="lead">
            Un outil open source développé par les parcs nationaux français,
            <br /> pour saisir, gérer et diffuser des données faune et flore
          </p>
          <ul className="list-unstyled d-flex mb-0">
            <li>
              <HomeLinkButton
                href="/produit"
                className="btn-primary text-white btn-lg"
              >
                Découvrir GeoNature
              </HomeLinkButton>
            </li>
            <li>
              <HomeLinkButton
                href="/demo"
                className="btn-primary text-white btn-lg"
              >
                Tester GeoNature
              </HomeLinkButton>
            </li>
          </ul>
          <ul className="list-unstyled d-flex mb-0">
            <li>
              <HomeLinkButton
                href="https://docs.geonature.fr"
                className="btn-light"
              >
                Documentation
              </HomeLinkButton>
            </li>
            <li>
              <HomeLinkButton
                href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
                className="btn-light"
              >
                Code source
              </HomeLinkButton>
            </li>
          </ul>
        </Section>
        <Section title="À propos">
          <p className="lead">
            Un système d&apos;information complet de la collecte à la gestion
            des données naturalistes.
          </p>
          <p>
            Avec GeoNature, les acteurs de la biodiversité ont un outil complet
            qui permet de saisir leurs données naturalistes sur le terrain,
            grâce à GeoNature-mobile, puis de consulter, rechercher et exporter
            des données, par différents filtres.
          </p>
          <h3>La structure de GeoNature permet :</h3>
          <ul>
            <li>La gestion des référentiels (taxonomiques et utilisateurs)</li>
            <li>La saisie web et mobile dans différents protocoles</li>
            <li>La gestion de leurs métadonnées</li>
            <li>L’intégration de données de partenaires</li>
            <li>
              L’export des données selon les formats attendus par chaque
              partenaire
            </li>
            <li>
              La synthétisation des données des différents protocoles sous forme
              de DEE
            </li>
            <li>La diffusion des données sur un portail web grand public</li>
          </ul>
        </Section>
        <Section title="En bref">
          <div className="row row-cols-sm-2 row-cols-md-4">
            <Feature title="Chaine de travail" iconName="dataProcessing">
              De la gestion de référentiels en passant par les bases de données
              scientifiques jusqu&apos;à la synthèse et la diffusion des
              données.
            </Feature>
            <Feature title="Mobile" iconName="natureOnScreen">
              GeoNature-mobile et Occtax-mobile permettent de saisir les données
              faune et flore directement sur le terrain.
            </Feature>
            <Feature title="Open source" iconName="codeReview">
              GeoNature, UsersHub, TaxHub, GeoNature-atlas et GeoNature-citizen
              sont disponibles sous licence libre sur Github.
            </Feature>
            <Feature title="Collaboratif" iconName="collaborators">
              GeoNature est développé par plusieurs parcs nationaux et la
              communauté des utilisateurs et développeurs continue de
              s&apos;étendre.
            </Feature>
          </div>
        </Section>
        <Section title="Utilisateurs" alternate>
          <p className="lead">
            GeoNature est utilisé partout en France. Consultez la{" "}
            <a href="https://lite.framacalc.org/9efn-geonature-users">
              liste des utilisateurs
            </a>{" "}
            de GeoNature.
          </p>
          <PartnersMap />
        </Section>
        <Section title="Partenaires">
          <div className="row align-items-center justify-content-center row-cols-md-auto g-3">
            <PartnerCard
              title="Parc national des Ecrins"
              logoName="logo-pne"
              href="https://www.ecrins-parcnational.fr/"
            />
            <PartnerCard
              title="Parc national des Cévennes"
              logoName="logo-pnc"
              href="https://www.cevennes-parcnational.fr/"
            />
            <PartnerCard
              title="Parc national de la Vanoise"
              logoName="logo-pnv"
              href="https://www.vanoise-parcnational.fr/"
            />
            <PartnerCard
              title="Parc national du Mercantour"
              logoName="logo-pnm"
              href="https://www.mercantour-parcnational.fr/"
            />
            <PartnerCard
              title="Parc amazonien de Guyane"
              logoName="logo-pag"
              href="https://www.parc-amazonien-guyane.fr/"
            />
          </div>
          <div className="row align-items-center justify-content-center row-cols-md-auto g-3">
            <PartnerCard
              title="CREA Mont Blanc"
              logoName="logo-crea"
              href="https://creamontblanc.org/"
            />
            <PartnerCard
              title="SILENE"
              logoName="logo-silene"
              href="https://silene.eu/"
            />
            <PartnerCard
              title="INPN"
              logoName="logo-inpn"
              href="https://inpn.mnhn.fr/"
            />
            <PartnerCard
              title="PatriNat"
              logoName="logo-patrinat"
              href="https://www.patrinat.fr/"
            />
            <PartnerCard
              title="OFB"
              logoName="logo-ofb"
              href="https://www.ofb.gouv.fr/"
            />
          </div>
        </Section>
      </main>
    </Page>
  );
}
