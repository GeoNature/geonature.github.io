import Page from "@/layout/page";
import Section from "@/components/presentation/section";
import GitHub from "@/components/dynamic/github";

export default function Code() {
  return (
    <Page>
      <main>
        <h1>Code et Démo</h1>
        <Section title="Code">
          <p>
            Le code et les téléchagements se trouvent sur{" "}
            <a href="https://github.com/PnX-SI">les dépôts GitHub PnX-SI</a> :
          </p>
          <GitHub />
        </Section>
        <Section title="Démonstrations">
          <ul>
            <li>GeoNature</li>
            <li>TaxHub</li>
            <li>UsersHub</li>
            <li>GeoNature Atlas</li>
            <li>GeoNature Citizen</li>
            <li>Occtax Mobile</li>
          </ul>
        </Section>
      </main>
    </Page>
  );
}
