import type { Metadata } from "next";
import n2 from "../n2.module.css";
import styles from "../_components/ServicePage.module.css";

const n2MonoFigure = n2.monoFigure;

export const metadata: Metadata = {
  title: "Imagefilm",
  description: "N2 produziert Imagefilme, die zeigen, wer ihr seid — für Website, Social Media und Pitch.",
  alternates: { canonical: "https://app.neuronic-automation.ai/N2/imagefilm" },
};

const traits = [
  { k: "DAUER", v: "60–120S", sub: "Typische Lauflänge" },
  { k: "EINSATZ", v: "WEB / SOCIAL", sub: "Website, LinkedIn, Pitch" },
  { k: "FOKUS", v: "MARKE", sub: "Haltung statt Produktdetail" },
];

const beats = [
  { t: "T+00", title: "Kernbotschaft", desc: "Eine Haltung, ein Satz — worauf sich alles zuspitzt." },
  { t: "T+01", title: "Bildwelt", desc: "Orte, Menschen, Licht. Was eure Marke visuell trägt." },
  { t: "T+02", title: "Dreh", desc: "Ein bis zwei Tage vor Ort, kombiniert mit passendem Lizenzmaterial." },
  { t: "T+03", title: "Schnitt & Sound", desc: "Tempo, Musik, Farbgebung — abgestimmt auf den Verwendungszweck." },
];

export default function ImagefilmPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>
            Imagefilm. <span className={styles.accent}>Wer ihr seid, in Bewegung.</span>
          </h1>
          <p className={styles.heroSub}>
            Kein Produktkatalog, keine Leistungsliste — ein Imagefilm zeigt Haltung. Menschen,
            Ort, Arbeitsweise. Genau das, was eine Landingpage oder ein Pitch-Deck nicht
            transportiert.
          </p>
          <a className={styles.cta} href="/N2#kontakt">
            Projekt anfragen
          </a>
        </div>
      </section>

      <section className={styles.bank} aria-label="Kennzahlen">
        <div className={styles.bankInner}>
          {traits.map((r) => (
            <div className={styles.bankItem} key={r.k}>
              <span className={`${styles.bankKey} ${n2MonoFigure}`}>{r.k}</span>
              <span className={`${styles.bankValue} ${n2MonoFigure}`}>{r.v}</span>
              <span className={styles.bankSub}>{r.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.example}>
        <div className={styles.exampleInner}>
          <h2>
            Ein Beispiel, <span className={styles.accent}>keine Behauptung.</span>
          </h2>
          <p className={styles.exampleNote}>
            Lizenziertes Envato-Footage, so geschnitten, wie ein Imagefilm wirken soll.
          </p>
          <div className={styles.exampleFrame}>
            <video
              className={styles.exampleVideo}
              src="/videos/n2/corporate.mp4"
              poster="/videos/n2/corporate-poster.jpg"
              controls
              playsInline
              muted
              loop
              preload="metadata"
              aria-label="Beispiel Imagefilm"
            >
              Dein Browser unterstützt dieses Video-Format nicht.
            </video>
          </div>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.bodyInner}>
          <h2>
            Wann ein <span className={styles.accent}>Imagefilm wirkt.</span>
          </h2>
          <div className={styles.bodyGrid}>
            <p>
              Wenn eure Website gut aussieht, aber niemand merkt, wer hinter dem Angebot steht.
              Wenn Bewerber:innen vor der Zusage noch einmal spüren wollen, wie bei euch
              gearbeitet wird. Wenn ein Investor-Pitch in den ersten 30 Sekunden Vertrauen
              aufbauen muss.
            </p>
            <p>
              Ein Imagefilm ersetzt keine Werbekampagne — er legt das Fundament darunter: Wie
              fühlt sich eure Marke an, bevor überhaupt ein Produkt erklärt wird.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.steps}>
        <div className={styles.stepsInner}>
          <h2>
            Ablauf <span className={styles.accent}>in vier Schritten.</span>
          </h2>
          <ol className={styles.stepList}>
            {beats.map((step) => (
              <li className={styles.step} key={step.t}>
                <span className={`${styles.stepT} ${n2MonoFigure}`}>{step.t}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <h2>
            Bereit für euren <span className={styles.accent}>Imagefilm?</span>
          </h2>
          <a className={styles.cta} href="/N2#kontakt">
            Projekt anfragen
          </a>
        </div>
      </section>
    </>
  );
}
