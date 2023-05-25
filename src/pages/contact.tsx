import Head from "next/head";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";

export default function Contact() {
  return (
    <Page>
      <Head>
        <title>Contact</title>
      </Head>
      <main>
        <Section
          title="Contact"
          hero
          heroImage={require("public/images/banners/marek-piwnicki-ZBvUxUvWwFw-unsplash.jpg")}
        />
        <Section title="Des questions?">
          <p>
            Contactez l&apos;équipe du pôle Système d&apos;Informations du Parc
            national des Ecrins
          </p>
          <dl>
            <dt>Par appel</dt>
            <dd>XX-XX-XX-XX-XX</dd>
            <dt>Par mail</dt>
            <dd>XX@XX.XX</dd>
          </dl>
          <p>
            Si votre question concerne le Dépôt légal de Biodiversité, utilisez
            la documentation et le formulaire de contact sur le{" "}
            <a href="https://depot-legal-biodiversite.naturefrance.fr">
              site dédié
            </a>
            .
          </p>
        </Section>
        <Section title="Prestataires" alternate>
          <p>
            Bien que GeoNature soit un logiciel libre que vous pouvez installer
            vous-même, il existe des prestataires qui peuvent également
            l&apos;installer et le gérer pour vous.
          </p>
        </Section>
        <Section title="Discussions">
          <p>
            Inscrivez-vous à{" "}
            <a href="https://framalistes.org/sympa/info/geonature-info">
              la liste de discussion d&apos;information générale du projet
            </a>
            .
          </p>
          <p>
            Pour tout échange ou question technique, reportez-vous aux{" "}
            <a href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}>dépôts GitHub</a>{" "}
            des différents projets
          </p>
        </Section>
      </main>
    </Page>
  );
}
