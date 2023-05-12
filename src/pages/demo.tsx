import Link from "next/link";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";
import GitHub from "@/components/dynamic/GitHub";
import ScreenshotCard from "@/components/presentation/ScreenshotCard";

export default function Demo() {
  return (
    <Page>
      <main>
        <Section
          title="Code et Démo"
          hero
          heroImage="/images/banners/anastasia-nelen-mFHGq0RthBs-unsplash.jpg"
        ></Section>
        <Section title="Démonstrations">
          <div className="row g-3">
            <ScreenshotCard
              title="GeoNature"
              columnClasses="col-sm-6 col-md-3"
              screenshotName="geonature"
              href="https://demo.geonature.fr/geonature"
            >
              <p>
                Pour la saisie web, la consultation et l&apos;export des données
              </p>
              <dl>
                <dt>Identifiant</dt>
                <dd>admin</dd>
                <dt>Mot de passe</dt>
                <dd>admin</dd>
              </dl>
            </ScreenshotCard>
            <ScreenshotCard
              title="TaxHub"
              columnClasses="col-sm-6 col-md-3"
              screenshotName="taxhub"
              href="https://demo.geonature.fr/taxhub"
            >
              <p>Pour la gestion de la taxonomie à partir de Taxref</p>
              <dl>
                <dt>Identifiant</dt>
                <dd>admin</dd>
                <dt>Mot de passe</dt>
                <dd>admin</dd>
              </dl>
            </ScreenshotCard>
            <ScreenshotCard
              title="UsersHub"
              columnClasses="col-sm-6 col-md-3"
              href="https://demo.geonature.fr/usershub"
            >
              <p>Pour la gestion des utilisateurs et de leurs droits</p>
              <dl>
                <dt>Identifiant</dt>
                <dd>admin</dd>
                <dt>Mot de passe</dt>
                <dd>admin</dd>
              </dl>
            </ScreenshotCard>
            <ScreenshotCard
              title="GeoNature Atlas"
              columnClasses="col-sm-6 col-md-3"
              screenshotName="geonature-atlas"
              href="https://biodiversite.ecrins-parcnational.fr"
            >
              <p>Pour la diffusion des données</p>
            </ScreenshotCard>
            <ScreenshotCard
              title="GeoNature Citizen"
              columnClasses="col-sm-6 col-md-3"
              screenshotName="geonature-citizen"
              href="https://obs.mercantour-parcnational.fr/"
            >
              <p>Pour la collecte citoyenne ouverte de données</p>
            </ScreenshotCard>
            <ScreenshotCard
              title="Occtax Mobile"
              columnClasses="col-sm-6 col-md-3"
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
            <a href="https://github.com/PnX-SI">
              les dépôts GitHub <strong>PnX-SI</strong>
            </a>
            . Voici les dépôts récemment mis à jour :
          </p>
          <GitHub />
          <Link
            href="https://github.com/PnX-SI"
            className="btn btn-lg btn-primary text-white mt-3"
            role="button"
          >
            GitHub (PnX-SI)
          </Link>
        </Section>
      </main>
    </Page>
  );
}
