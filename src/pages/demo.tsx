import Head from "next/head";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";
import Repositories from "@/components/dynamic/github/Repositories";
import ScreenshotCard from "@/components/presentation/ScreenshotCard";

export default function Demo() {
  return (
    <Page>
      <Head>
        <title>Demo</title>
      </Head>
      <main>
        <Section
          title="Démo et code"
          hero
          heroImage={require("public/images/banners/anastasia-nelen-mFHGq0RthBs-unsplash.jpg")}
        ></Section>
        <Section title="Démonstrations">
          <p>
            Vous pouvez tester GeoNature et l&apos;ensemble des outils aux liens
            suivants :
          </p>
          <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            <ScreenshotCard
              title="GeoNature"
              href="https://demo.geonature.fr/geonature"
              screenshot={require("public/images/screenshots/geonature.png")}
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
              href="https://demo.geonature.fr/taxhub"
              screenshot={require("public/images/screenshots/taxhub.png")}
            >
              <p>Pour la gestion de la taxonomie à partir de Taxref</p>
              <dl>
                <dt>Identifiant / Mot de Passe</dt>
                <dd>admin / admin</dd>
              </dl>
            </ScreenshotCard>
            <ScreenshotCard
              title="UsersHub"
              href="https://demo.geonature.fr/usershub"
              screenshot={require("public/images/screenshots/usershub.png")}
            >
              <p>Pour la gestion des utilisateurs et de leurs droits</p>
              <dl>
                <dt>Identifiant / Mot de Passe</dt>
                <dd>admin / admin</dd>
              </dl>
            </ScreenshotCard>
            <ScreenshotCard
              title="GeoNature Atlas"
              href="https://biodiversite.ecrins-parcnational.fr"
              screenshot={require("public/images/screenshots/geonature-atlas.png")}
            >
              <p>Pour la diffusion des données</p>
            </ScreenshotCard>
            <ScreenshotCard
              title="GeoNature Citizen"
              href="https://obs.mercantour-parcnational.fr/"
              screenshot={require("public/images/screenshots/geonature-citizen.png")}
            >
              <p>Pour la collecte citoyenne ouverte de données</p>
            </ScreenshotCard>
            <ScreenshotCard
              title="Occtax Mobile"
              href="https://demo.geonature.fr"
              screenshot={require("public/images/screenshots/occtax-mobile.png")}
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
              les dépôts GitHub
            </a>
            . Voici les dépôts récemment mis à jour :
          </p>
          <Repositories />
        </Section>
        <Section title="Installation">
          <p>
            Pour installer GeoNature sur un serveur, consulter{" "}
            <a href="https://docs.geonature.fr/">la documentation</a>. Il existe
            également des prestataires en France qui peuvent installer et gérer
            GeoNature pour vous.
          </p>
        </Section>
      </main>
    </Page>
  );
}
