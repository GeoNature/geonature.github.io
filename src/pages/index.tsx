import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import Page from "@/layout/page";
import Section from "@/components/presentation/section";
import Feature from "@/components/presentation/feature";

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
    <Page noContainer>
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
        <Section title="GeoNature" hero>
          <p className="lead">
            Un outil open source développé par les parcs nationaux français,
            <br /> pour saisir, gérer et diffuser des données faune et flore
          </p>
          <ul className="list-unstyled d-flex mb-0">
            <li>
              <HomeLinkButton
                href="#"
                className="btn-primary text-white btn-lg"
              >
                Découvrir GeoNature
              </HomeLinkButton>
            </li>
            <li>
              <HomeLinkButton
                href="#"
                className="btn-primary text-white btn-lg"
              >
                Tester GeoNature
              </HomeLinkButton>
            </li>
          </ul>
          <ul className="list-unstyled d-flex mb-0">
            <li>
              <HomeLinkButton href="#" className="btn-light">
                Documentation
              </HomeLinkButton>
            </li>
            <li>
              <HomeLinkButton href="#" className="btn-light">
                Code source
              </HomeLinkButton>
            </li>
          </ul>
        </Section>
        <div className="container mb-5">
          <Section title="En bref">
            <div className="row">
              <div className="col-md-3">
                <Feature title="Chaine de travail" iconName="dataProcessing">
                  De la gestion de référentiels en passant par les bases de
                  données scientifiques jusqu&apos;à la synthèse et la diffusion
                  des données.
                </Feature>
              </div>
              <div className="col-md-3">
                <Feature title="Mobile" iconName="natureOnScreen">
                  GeoNature-mobile et Occtax-mobile permettent de saisir les
                  données faune et flore directement sur le terrain.
                </Feature>
              </div>
              <div className="col-md-3">
                <Feature title="Open source" iconName="codeReview">
                  GeoNature, UsersHub, TaxHub, GeoNature-atlas et
                  GeoNature-citizen sont disponibles sous licence libre sur
                  Github.
                </Feature>
              </div>
              <div className="col-md-3">
                <Feature title="Collaboratif" iconName="collaborators">
                  GeoNature est développé par plusieurs parcs nationaux et la
                  communauté des utilisateurs et développeurs continue de
                  s&apos;étendre.
                </Feature>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </Page>
  );
}
