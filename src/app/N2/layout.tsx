import type { Metadata } from "next";
import { Nav } from "./_components/Nav";
import { Footer } from "./_components/Footer";
import styles from "./n2.module.css";

export const metadata: Metadata = {
  title: {
    default: "N2 — Videoproduktion für Unternehmen",
    template: "%s — N2",
  },
  description:
    "N2 produziert verkaufsstarke Unternehmensvideos, die Vertrauen schaffen, Marken sichtbar machen und neue Kunden gewinnen – schnell, professionell und zum kalkulierbaren Fixpreis.",
};

export default function N2Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.root}>
      {/* Self-hosted-equivalent: loaded only within /N2, scoped via .root above */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
      />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
