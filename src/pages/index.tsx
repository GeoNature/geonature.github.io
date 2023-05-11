import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import Section from "@/components/presentation/section";

const Feature: FC<PropsWithChildren<{ title?: string }>> = ({
  title,
  children,
}) => (
  <div>
    {title && <h3>{title}</h3>}
    {children}
  </div>
);

export default function Home() {
  return (
    <>
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
        <Section>
          <h1>GeoNature</h1>
          <p>Un outil open source développé par les parcs nationaux français</p>
          <p>
            Une application WEB et mobile pour saisir, gérer et diffuser des
            données faune et flore
          </p>
        </Section>
        <Section title="En bref">
          <Feature title="Chaine de travail">
            De la gestion de référentiels en passant par les bases de données
            scientifiques jusqu&apos;à la synthèse et la diffusion des données.
          </Feature>
          <Feature title="Mobile">
            GeoNature-mobile et Occtax-mobile permettent de saisir les données
            faune et flore directement sur le terrain.
          </Feature>
          <Feature title="Open source">
            GeoNature, UsersHub, TaxHub, GeoNature-atlas et GeoNature-citizen
            sont disponibles sous licence libre sur Github.
          </Feature>
          <Feature title="Collaboratif">
            GeoNature est développé par plusieurs parcs nationaux et la
            communauté des utilisateurs et développeurs continue de
            s&apos;étendre.
          </Feature>
        </Section>
        <Section title="L'architecture">
          <p>
            GeoNature comprend un ensemble d&apos;outils développés par les
            parcs nationaux de France et disponibles sous licence libre.
          </p>
          <p>
            Chaque outil peut être téléchargé et installé indépendamment :
            GeoNature (pour la saisie web, la consultation et l&apos;export des
            données), Occtax-mobile (pour la saisie mobile dans Occtax),
            GeoNature-atlas (pour la diffusion des données), GeoNature-citizen
            (pour la collecte citoyenne ouverte de données), TaxHub (pour la
            gestion de la taxonomie à partir de Taxref), UsersHub (pour la
            gestion des utilisateurs et de leurs droits).
          </p>
        </Section>
      </main>
    </>
  );
}
