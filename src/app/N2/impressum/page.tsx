import type { Metadata } from "next";
import styles from "../_components/Legal.module.css";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der N2 Videoproduktion.",
  alternates: { canonical: "https://app.neuronic-automation.ai/N2/impressum" },
};

export default function ImpressumPage() {
  return (
    <section className={styles.legal}>
      <div className={styles.inner}>
        <h1>Impressum</h1>
        <p className={styles.placeholder}>
          Platzhalter — Angaben gemäß § 5 ECG / § 25 MedienG werden ergänzt, sobald die
          Unternehmensdaten (Firmenbuchnummer, UID, vertretungsbefugte Person, ladungsfähige
          Adresse) vorliegen.
        </p>
        <dl className={styles.dl}>
          <dt>Medieninhaber &amp; Herausgeber</dt>
          <dd>N2 Videoproduktion</dd>
          <dt>Kontakt</dt>
          <dd>
            <a href="mailto:office@n2-video.at">office@n2-video.at</a>
          </dd>
        </dl>
      </div>
    </section>
  );
}
