import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";

export default function Produit() {
  return (
    <Page>
      <main>
        <Section title="Découvrir GeoNature" hero></Section>
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
    </Page>
  );
}
