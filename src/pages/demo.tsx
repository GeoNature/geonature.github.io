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
        <Section title="Démonstrations" alternate>
          <div className="row g-3">
            <ScreenshotCard
              title="GeoNature"
              columnClasses="col-sm-6 col-md-3"
              screenshotName="geonature"
              href="https://demo.geonature.fr/geonature"
            >
              <p>Pour la saisie web, la consultation et l'export des données</p>
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
              href="#"
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
              href="#"
            >
              <p>Pour la diffusion des données</p>
              <dl>
                <dt>Identifiant</dt>
                <dd>admin</dd>
                <dt>Mot de passe</dt>
                <dd>admin</dd>
              </dl>
            </ScreenshotCard>
            <ScreenshotCard
              title="GeoNature Citizen"
              columnClasses="col-sm-6 col-md-3"
              href="#"
            >
              <p>Pour la collecte citoyenne ouverte de données</p>
            </ScreenshotCard>
            <ScreenshotCard
              title="Occtax Mobile"
              columnClasses="col-sm-6 col-md-3"
              href="#"
            >
              <p>Pour la saisie mobile dans Occtax</p>
            </ScreenshotCard>
          </div>
        </Section>
        <Section title="Code">
          <p>
            Le code et les téléchargements se trouvent sur{" "}
            <a href="https://github.com/PnX-SI">
              les dépôts GitHub <strong>PnX-SI</strong>
            </a>{" "}
            :
          </p>
          <GitHub />
        </Section>
      </main>
    </Page>
  );
}
