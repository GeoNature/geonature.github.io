import Head from "next/head";
import Link from "next/link";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";
import GitHub from "@/components/dynamic/GitHub";
import ScreenshotCard from "@/components/presentation/ScreenshotCard";

export default function Demo() {
  return (
    <Page>
      <Head>
        <title>Demo</title>
      </Head>
      <main>
        <Section
          title="Code et Démo"
          hero
          heroImage="images/banners/anastasia-nelen-mFHGq0RthBs-unsplash.jpg"
        ></Section>
        <Section title="Démonstrations">
          <p>
            Vous pouvez tester GeoNature et l&apos;ensemble des outils aux liens
            suivants :
          </p>
          <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            <ScreenshotCard
              title="GeoNature"
              screenshotName="geonature"
              href="https://demo.geonature.fr/geonature"
            >
              <p>
                Pour la saisie web, la consultation et l&apos;export des données
              </p>
              <dl>
                <dt>Identifiant / Mot de Passe</dt>
                <dd>admin / admin</dd>
              </dl>
            </ScreenshotCard>
            <ScreenshotCard
              title="TaxHub"
              screenshotName="taxhub"
              href="https://demo.geonature.fr/taxhub"
            >
              <p>Pour la gestion de la taxonomie à partir de Taxref</p>
              <dl>
                <dt>Identifiant / Mot de Passe</dt>
                <dd>admin / admin</dd>
              </dl>
            </ScreenshotCard>
            <ScreenshotCard
              title="UsersHub"
              screenshotName="usershub"
              href="https://demo.geonature.fr/usershub"
            >
              <p>Pour la gestion des utilisateurs et de leurs droits</p>
              <dl>
                <dt>Identifiant / Mot de Passe</dt>
                <dd>admin / admin</dd>
              </dl>
            </ScreenshotCard>
            <ScreenshotCard
              title="GeoNature Atlas"
              screenshotName="geonature-atlas"
              href="https://biodiversite.ecrins-parcnational.fr"
            >
              <p>Pour la diffusion des données</p>
            </ScreenshotCard>
            <ScreenshotCard
              title="GeoNature Citizen"
              screenshotName="geonature-citizen"
              href="https://obs.mercantour-parcnational.fr/"
            >
              <p>Pour la collecte citoyenne ouverte de données</p>
            </ScreenshotCard>
            <ScreenshotCard
              title="Occtax Mobile"
              screenshotName="occtax-mobile"
              href="https://demo.geonature.fr"
            >
              <p>Pour la saisie mobile dans Occtax</p>
              <p>
                Téléchargez et installez l&apos;APK, voir les instructions au
                lien suivant.
              </p>
            </ScreenshotCard>
          </div>
        </Section>
        <Section title="Code" alternate>
          <p>
            Le code et les téléchargements se trouvent sur{" "}
            <a href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}>
              les dépôts GitHub.
            </a>
            . Voici les dépôts récemment mis à jour :
          </p>
          <GitHub />
        </Section>
      </main>
    </Page>
  );
}
