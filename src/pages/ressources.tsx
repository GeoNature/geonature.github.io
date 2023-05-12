import Head from "next/head";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";

export default function Ressources() {
  return (
    <Page>
      <Head>
        <title>Ressources</title>
      </Head>
      <main>
        <Section
          title="Ressources"
          hero
          heroImage="/images/banners/benoit-gauzere-9bMgZ9jbsW4-unsplash.jpg"
        />
        <Section title="GeoNature">
          <ul>
            <li>
              <a href="https://github.com/PnX-SI/GeoNature">
                Téléchargement, code source, présentation complète et tickets
              </a>
            </li>
            <li>
              <a href="https://demo.geonature.fr/geonature">Démonstration</a>
              (admin / admin)
            </li>
            <li>
              <a href="https://geonature.rtfd.org">Documentation</a>
            </li>
            <li>
              <a href="https://geonature.fr/documents/2018-05-GeoNature-Presentation.pdf">
                Présentation PDF de GeoNature (Mai 2018)
              </a>
            </li>
            <li>
              <a href="https://geonature.fr/documents/2018-09-GeoNature-GTSSC.pdf">
                Présentation PDF de GeoNature au GeoPNR (2017)
              </a>
            </li>
            <li>
              <a href="https://github.com/PnX-SI/GeoNature/raw/v1/docs/pdf/protocoles-locaux-echanges-nationaux.pdf">
                Des protocoles locaux aux echanges de données nationaux
              </a>
            </li>
            <li>
              <a href="protocoles.html">Description des protocoles</a>
            </li>
          </ul>
        </Section>
        <Section title="TaxHub" alternate>
          <ul>
            <li>
              <a href="https://github.com/PnX-SI/TaxHub">
                Téléchargement, code source, présentation et tickets
              </a>
            </li>
            <li>
              <a href="https://demo.geonature.fr/taxhub">Démonstration</a>(admin
              / admin)
            </li>
            <li>
              <a href="https://taxhub.readthedocs.io/fr/latest/">
                Documentation
              </a>
            </li>
          </ul>
        </Section>
        <Section title="UsersHub">
          <ul>
            <li>
              <a href="https://github.com/PnX-SI/UsersHub">
                Téléchargement, code source, présentation et tickets
              </a>
            </li>
            <li>
              <a href="https://demo.geonature.fr/usershub">Démonstration</a>
              (admin / admin)
            </li>
            <li>
              <a href="https://usershub.readthedocs.io/fr/latest/">
                Documentation
              </a>
            </li>
          </ul>
        </Section>
        <Section title="GeoNature Atlas" alternate>
          <ul>
            <li>
              <a href="https://github.com/PnX-SI/GeoNature-atlas">
                Téléchargement, code source, présentation et tickets
              </a>
            </li>
            <li>
              <a href="https://biodiversite.ecrins-parcnational.fr">
                Biodiv&apos;Ecrins, démonstration de GeoNature-atlas
              </a>
            </li>
            <li>
              <a href="https://github.com/PnX-SI/GeoNature-atlas/blob/master/docs/installation.rst">
                Documentation
              </a>
            </li>
            <li>
              <a href="https://github.com/PnX-SI/GeoNature-atlas/blob/master/docs/2016-09-GeoNature-atlas-PRESENTATION.pdf">
                Présentation générale
              </a>
            </li>
            <li>
              <a href="https://github.com/PnX-SI/GeoNature-atlas/blob/master/docs/2016-09-30-rapport_stage_Theo-Lechemia.pdf">
                Rapport de stage (Théo Lechemia)
              </a>
            </li>
            <li>
              <a href="https://github.com/PnX-SI/GeoNature-atlas/blob/master/docs/2016-09-soutenance-Theo-Lechemia.pdf">
                Soutenance de stage (Théo Lechemia)
              </a>
            </li>
          </ul>
        </Section>
        <Section title="GeoNature Citizen">
          <ul>
            <li>
              <a href="https://github.com/PnX-SI/GeoNature-citizen">
                Téléchargement, code source, présentation et tickets
              </a>
            </li>
            <li>
              <a href="https://obs.mercantour-parcnational.fr">
                Obs&apos;Mercantour, démonstration de GeoNature-citizen
              </a>
            </li>
            <li>
              <a href="https://geonature-citizen.readthedocs.io">
                Documentation
              </a>
            </li>
            <li>
              <a href="https://professionnels.ofb.fr/sites/default/files/pdf/documentation/TIC2019_PNM-PNRP-GeoNature%20Citizen_2019.pdf">
                Présentation au Forum TIC 2019
              </a>
            </li>
          </ul>
        </Section>
        <Section title="OccTax Mobile" alternate>
          <ul>
            <li>
              <a href="https://github.com/PnX-SI/gn_mobile_occtax">
                Téléchargement, code source, présentation et tickets
              </a>
            </li>
            <li>
              <a href="https://github.com/PnX-SI/gn_mobile_occtax/blob/doc-installation/docs/installation-fr.md">
                Documentation
              </a>
            </li>
          </ul>
        </Section>
      </main>
    </Page>
  );
}
