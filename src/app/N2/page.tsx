import type { Metadata } from "next";
import Link from "next/link";
import { Vectorscope } from "./_components/Vectorscope";
import n2 from "./n2.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "N2 — Videoproduktion für Unternehmen" },
  description:
    "N2 produziert Imagefilm, Werbevideo und Eventvideo für Unternehmen in Österreich. Agil, planbar, fair kalkuliert.",
  alternates: { canonical: "https://app.neuronic-automation.ai/N2" },
};

const channels = [
  {
    id: "imagefilm",
    label: "Imagefilm",
    desc: "Wer ihr seid, in Bildern, die bleiben. Marke, Haltung, Menschen.",
    href: "/N2/imagefilm",
  },
  {
    id: "werbevideo",
    label: "Werbevideo",
    desc: "Produkt oder Angebot, klar inszeniert — für Social, Web und Ads.",
    href: "/N2/werbevideo",
  },
  {
    id: "eventvideo",
    label: "Eventvideo",
    desc: "Von der Bühne bis zum Aftermovie. Euer Event bleibt in Bewegung.",
    href: "/N2/eventvideo",
  },
];

const readouts = [
  { k: "REAKTIONSZEIT", v: "< 24 H", sub: "Antwort auf jede Anfrage" },
  { k: "DURCHLAUFZEIT", v: "2–3 WO", sub: "Briefing bis Lieferung" },
  { k: "PREISMODELL", v: "FIX", sub: "Keine versteckten Positionen" },
];

const timeline = [
  { t: "T+00", title: "Briefing", desc: "Kurzes Gespräch: Ziel, Zielgruppe, Budget, Termin." },
  { t: "T+01", title: "Konzept", desc: "Treatment und Storyboard, abgestimmt in einer Runde." },
  { t: "T+02", title: "Dreh", desc: "Produktion vor Ort oder Material-Kombination aus Lizenz-Footage." },
  { t: "T+03", title: "Schnitt", desc: "Schnitt, Farbe, Sound. Ein Korrekturdurchlauf inklusive." },
  { t: "T+04", title: "Lieferung", desc: "Exportiert für die Kanäle, auf denen das Video laufen soll." },
];

const faqs = [
  {
    q: "Woher kommt das Material in den Beispielvideos?",
    a: "Ein Teil stammt aus lizenziertem Envato-Footage, ein Teil aus eigenen Drehs. Bei jedem Projekt besprechen wir vorab, was original gedreht und was aus Lizenzmaterial kombiniert wird.",
  },
  {
    q: "Wie schnell bekommen wir ein Angebot?",
    a: "Innerhalb von 24 Stunden nach dem Erstgespräch. Für einfache Werbevideos reicht oft eine kurze Checkliste statt eines langen Briefingtermins.",
  },
  {
    q: "Was kostet ein Imagefilm oder Werbevideo?",
    a: "Kommt auf Umfang und Drehtage an. Wir nennen vor Produktionsstart einen fixen Preis — keine Nachverhandlung nach Lieferung.",
  },
  {
    q: "Könnt ihr auch kurzfristig ein Eventvideo übernehmen?",
    a: "Wenn der Termin feststeht, meist ja. Je früher die Anfrage, desto mehr Spielraum für Konzept statt reiner Dokumentation.",
  },
];

export default function N2HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroScope}>
            <Vectorscope />
          </div>
          <div className={styles.heroCopy}>
            <h1>
              Videoproduktion. <span className={styles.accent}>Schnell im Bild.</span>
            </h1>
            <p className={styles.heroSub}>
              N2 produziert Imagefilm, Werbevideo und Eventvideo für Unternehmen in Österreich —
              ohne Umwege, mit einem Preis, der vor dem Dreh feststeht.
            </p>
            <a className={styles.cta} href="#kontakt">
              Projekt anfragen
            </a>

            <nav className={styles.heroChannels} aria-label="Leistungen">
              {channels.map((c) => (
                <Link key={c.id} href={c.href} className={styles.channel}>
                  <span className={`${styles.channelLabel} ${n2.monoFigure}`}>{c.label}</span>
                  <span className={styles.channelDesc}>{c.desc}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className={styles.bank} aria-label="Kennzahlen">
        <div className={styles.bankInner}>
          {readouts.map((r) => (
            <div className={styles.bankItem} key={r.k}>
              <span className={`${styles.bankKey} ${n2.monoFigure}`}>{r.k}</span>
              <span className={`${styles.bankValue} ${n2.monoFigure}`}>{r.v}</span>
              <span className={styles.bankSub}>{r.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.processInner}>
          <h2>
            Vom Briefing zur <span className={styles.accent}>fertigen Datei.</span>
          </h2>
          <ol className={styles.processList}>
            {timeline.map((step) => (
              <li className={styles.processStep} key={step.t}>
                <span className={`${styles.processT} ${n2.monoFigure}`}>{step.t}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.reel}>
        <div className={styles.reelInner}>
          <h2>
            Ein Auszug aus <span className={styles.accent}>laufenden Bildern.</span>
          </h2>
          <p className={styles.reelNote}>
            Beispielmaterial, teils aus lizenziertem Envato-Footage kombiniert. Eigene
            Kundenprojekte folgen hier, sobald freigegeben.
          </p>
          <div className={styles.reelGrid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                className={styles.reelTile}
                key={i}
                style={{ ["--n2-hue" as string]: `${120 + i * 18}deg` }}
              >
                <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M9.5 8.5 L16 12 L9.5 15.5 Z" fill="currentColor" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.clients}>
        <div className={styles.clientsInner}>
          <h2>
            Platz für <span className={styles.accent}>eure Marke.</span>
          </h2>
          <p className={styles.clientsNote}>
            Hier stehen bald die Logos unserer Kunden. Noch sind es Platzhalter — keine erfundenen
            Namen.
          </p>
          <div className={styles.clientsGrid}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div className={styles.clientsSlot} aria-hidden="true" key={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <h2>
            Häufig <span className={styles.accent}>gefragt.</span>
          </h2>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details className={styles.faqItem} key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.kontakt} id="kontakt">
        <div className={styles.kontaktInner}>
          <h2>
            Projekt im Kopf? <span className={styles.accent}>Reden wir.</span>
          </h2>
          <p className={styles.kontaktSub}>Kurze Nachricht reicht — Rückmeldung innerhalb von 24 Stunden.</p>
          <div className={styles.kontaktActions}>
            <a className={styles.cta} href="mailto:office@n2-video.at?subject=Projektanfrage">
              office@n2-video.at
            </a>
            <a className={`${styles.cta} ${styles.ctaGhost}`} href="tel:+4312345678">
              +43 1 234 5678
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
