import type { Metadata } from "next";
import n2 from "../n2.module.css";
import styles from "../_components/ServicePage.module.css";

const n2MonoFigure = n2.monoFigure;

export const metadata: Metadata = {
  title: "Über uns",
  description: "N2 ist eine Videoagentur für Unternehmen in Österreich — agil, fair kalkuliert, auf drei klare Formate fokussiert.",
  alternates: { canonical: "https://app.neuronic-automation.ai/N2/ueber-uns" },
};

const principles = [
  {
    t: "T+00",
    title: "Tempo vor Ceremony",
    desc: "Kurze Wege von der Anfrage bis zum Dreh. Kein Pitch-Prozess, der länger dauert als die Produktion selbst.",
  },
  {
    t: "T+01",
    title: "Fair kalkuliert",
    desc: "Ein Preis vor dem Dreh, nicht danach. Zugänglich kalkuliert, ohne an der Ausführung zu sparen.",
  },
  {
    t: "T+02",
    title: "Nichts erfunden",
    desc: "Kein Kunde, kein Ergebnis, keine Zahl auf dieser Seite, die nicht stimmt. Was noch Platzhalter ist, steht auch so da.",
  },
  {
    t: "T+03",
    title: "Drei klare Formate",
    desc: "Imagefilm, Werbevideo, Eventvideo — statt einem unübersichtlichen Leistungskatalog.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>
            Über N2. <span className={styles.accent}>Kein Umweg zwischen Idee und Datei.</span>
          </h1>
          <p className={styles.heroSub}>
            N2 ist eine Videoagentur für Unternehmen, die ein Video brauchen und keinen
            monatelangen Prozess. Drei Formate, ein fairer Preis, eine Deadline, die hält.
          </p>
          <a className={styles.cta} href="/N2#kontakt">
            Projekt anfragen
          </a>
        </div>
      </section>

      <section className={styles.stepsPlain}>
        <div className={styles.stepsInner}>
          <h2>
            Woran wir uns <span className={styles.accent}>halten.</span>
          </h2>
          <ol className={styles.stepList}>
            {principles.map((p) => (
              <li className={styles.step} key={p.t}>
                <span className={`${styles.stepT} ${n2MonoFigure}`}>{p.t}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.bodyOnPanel}>
        <div className={styles.bodyInner}>
          <h2>
            Woher das <span className={styles.accent}>Material kommt.</span>
          </h2>
          <div className={styles.bodyGrid}>
            <p>
              Nicht jedes Video auf dieser Seite ist bei einem Kunden vor Ort entstanden. Ein Teil
              der Beispiele kombiniert lizenziertes Envato-Footage mit eigenem Schnitt und eigener
              Konzeption — das sagen wir offen, statt es zu verschweigen.
            </p>
            <p>
              Bei realen Kundenprojekten gilt dasselbe Prinzip: klar benennen, was original
              gedreht wurde und was aus Lizenzmaterial stammt, wenn das für die Entscheidung
              relevant ist.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <h2>
            Lust auf ein <span className={styles.accent}>erstes Gespräch?</span>
          </h2>
          <a className={styles.cta} href="/N2#kontakt">
            Projekt anfragen
          </a>
        </div>
      </section>
    </>
  );
}
