import type { Metadata } from "next";
import n2 from "../n2.module.css";
import styles from "../_components/ServicePage.module.css";

const n2MonoFigure = n2.monoFigure;

export const metadata: Metadata = {
  title: "Eventvideo",
  description: "N2 begleitet Firmenevents von der Bühne bis zum Aftermovie — diskret vor Ort, schnell geliefert.",
  alternates: { canonical: "https://app.neuronic-automation.ai/N2/eventvideo" },
};

const traits = [
  { k: "TEAM", v: "1–2 KAM", sub: "Je nach Eventgröße" },
  { k: "LIEFERUNG", v: "48–72H", sub: "Aftermovie-Rohschnitt" },
  { k: "SETUP", v: "DISKRET", sub: "Stört nicht das Programm" },
];

const coverage = [
  { t: "VOR", title: "Aufbau & Ankunft", desc: "Location, Deko, erste Gäste — die Stimmung vor dem offiziellen Start." },
  { t: "WÄHREND", title: "Programm", desc: "Bühne, Reden, Highlights — dokumentiert, ohne das Programm zu stören." },
  { t: "DANACH", title: "Atmosphäre", desc: "Reaktionen, Gespräche, der Moment, der im Gedächtnis bleibt." },
];

export default function EventvideoPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>
            Eventvideo. <span className={styles.accent}>Euer Event bleibt in Bewegung.</span>
          </h1>
          <p className={styles.heroSub}>
            Ein Event ist in dem Moment vorbei, in dem es endet — außer jemand hat es
            festgehalten. N2 begleitet Firmenevents diskret von der Bühne bis zum fertigen
            Aftermovie.
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
            Lizenziertes Envato-Footage, so geschnitten, wie ein Aftermovie wirken soll.
          </p>
          <div className={styles.exampleFrame}>
            <video
              className={styles.exampleVideo}
              src="/videos/n2/event1.mp4"
              poster="/videos/n2/event1-poster.jpg"
              controls
              playsInline
              muted
              loop
              preload="metadata"
              aria-label="Beispiel Eventvideo"
            >
              Dein Browser unterstützt dieses Video-Format nicht.
            </video>
          </div>
        </div>
      </section>

      <section className={styles.coverage}>
        <div className={styles.coverageInner}>
          <h2>
            Drei Phasen, <span className={styles.accent}>eine Kamera im Hintergrund.</span>
          </h2>
          <div className={styles.coverageGrid}>
            {coverage.map((c) => (
              <div className={styles.coverageItem} key={c.t}>
                <span className={`${styles.coverageT} ${n2MonoFigure}`}>{c.t}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.bodyOnPanel}>
        <div className={styles.bodyInner}>
          <h2>
            Geeignet für <span className={styles.accent}>jede Art von Firmenevent.</span>
          </h2>
          <div className={styles.bodyGrid}>
            <p>
              Produktlaunch, Jubiläum, Mitarbeiterfeier, Konferenz — das Setup bleibt diskret,
              damit das Programm im Mittelpunkt steht, nicht die Kamera.
            </p>
            <p>
              Ein kurzer Aftermovie-Rohschnitt folgt 48–72 Stunden nach dem Event, solange die
              Stimmung noch frisch ist. Die finale Fassung danach, abgestimmt mit euch.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <h2>
            Termin steht? <span className={styles.accent}>Sichern wir ihn.</span>
          </h2>
          <a className={styles.cta} href="/N2#kontakt">
            Projekt anfragen
          </a>
        </div>
      </section>
    </>
  );
}
