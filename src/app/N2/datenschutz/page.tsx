import type { Metadata } from "next";
import styles from "../_components/Legal.module.css";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der N2 Videoproduktion.",
  alternates: { canonical: "https://app.neuronic-automation.ai/N2/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <section className={styles.legal}>
      <div className={styles.inner}>
        <h1>Datenschutz</h1>
        <p className={styles.placeholder}>
          Platzhalter — die vollständige Datenschutzerklärung (Verantwortlicher, eingesetzte
          Dienste, Rechtsgrundlagen, Betroffenenrechte) wird ergänzt, sobald feststeht, welche
          Tools (z. B. Kontaktformular, Analyse) tatsächlich eingesetzt werden.
        </p>
        <p>
          Bei Fragen zum Datenschutz: <a href="mailto:office@n2-video.at">office@n2-video.at</a>
        </p>
      </div>
    </section>
  );
}
