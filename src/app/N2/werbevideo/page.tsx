import type { Metadata } from "next";
import n2 from "../n2.module.css";
import styles from "../_components/ServicePage.module.css";

const n2MonoFigure = n2.monoFigure;

export const metadata: Metadata = {
  title: "Werbevideo",
  description: "N2 produziert Werbevideos für Social Media und Ads — kurz, schnell geschnitten, auf Wirkung getrimmt.",
  alternates: { canonical: "https://app.neuronic-automation.ai/N2/werbevideo" },
};

const formats = [
  { label: "FEED", ratio: "1:1 / 4:5", desc: "Instagram, Facebook, LinkedIn" },
  { label: "STORY / REEL", ratio: "9:16", desc: "Instagram, TikTok, YouTube Shorts" },
  { label: "PRE-ROLL", ratio: "16:9", desc: "YouTube Ads, Website-Header" },
];

const traits = [
  { k: "DAUER", v: "6–30S", sub: "Typische Lauflänge" },
  { k: "SCHNITTE", v: "HOCH", sub: "Tempo für Social-Feeds" },
  { k: "ZIEL", v: "AKTION", sub: "Klick, Kauf, Anfrage" },
];

export default function WerbevideoPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>
            Werbevideo. <span className={styles.accent}>Gemacht, um zu stoppen.</span>
          </h1>
          <p className={styles.heroSub}>
            Drei Sekunden, um nicht weitergescrollt zu werden. Ein Werbevideo von N2 ist kurz,
            schnell geschnitten und auf ein Ziel zugespitzt: Klick, Anfrage oder Kauf.
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

      <section className={styles.formats}>
        <div className={styles.formatsInner}>
          <h2>
            Ein Schnitt, <span className={styles.accent}>alle Formate.</span>
          </h2>
          <p className={styles.formatsNote}>
            Jedes Werbevideo wird für die Kanäle geschnitten, auf denen es tatsächlich läuft —
            nicht nachträglich zugeschnitten.
          </p>
          <div className={styles.formatsGrid}>
            {formats.map((f) => (
              <div className={styles.format} key={f.label}>
                <span className={`${styles.formatLabel} ${n2MonoFigure}`}>{f.label}</span>
                <span className={`${styles.formatRatio} ${n2MonoFigure}`}>{f.ratio}</span>
                <span className={styles.formatDesc}>{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.bodyOnPanel}>
        <div className={styles.bodyInner}>
          <h2>
            Was ein gutes <span className={styles.accent}>Werbevideo trägt.</span>
          </h2>
          <div className={styles.bodyGrid}>
            <p>
              Der Haken sitzt in der ersten Sekunde, nicht am Ende. Danach: ein klares Angebot,
              ein klarer Nutzen, ein klarer nächster Schritt. Kein Agentur-Jargon, keine Umwege.
            </p>
            <p>
              Material stammt aus eigenem Dreh, aus lizenziertem Envato-Footage oder aus einer
              Kombination — je nachdem, was Budget und Timing zulassen. Wir sagen vorab, welcher
              Teil original ist.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <h2>
            Kampagne geplant? <span className={styles.accent}>Lass uns schneiden.</span>
          </h2>
          <a className={styles.cta} href="/N2#kontakt">
            Projekt anfragen
          </a>
        </div>
      </section>
    </>
  );
}
