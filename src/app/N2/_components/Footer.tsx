import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.mark}>N2</span>
          <p>Videoproduktion für Unternehmen in Österreich. Agil, präzise, planbar.</p>
        </div>

        <nav className={styles.col} aria-label="Leistungen">
          <h3>Leistungen</h3>
          <Link href="/N2/imagefilm">Imagefilm</Link>
          <Link href="/N2/werbevideo">Werbevideo</Link>
          <Link href="/N2/eventvideo">Eventvideo</Link>
        </nav>

        <nav className={styles.col} aria-label="Agentur">
          <h3>Agentur</h3>
          <Link href="/N2/ueber-uns">Über uns</Link>
          <Link href="/N2#kontakt">Kontakt</Link>
        </nav>

        <div className={styles.col}>
          <h3>Kontakt</h3>
          <a href="mailto:office@n2-video.at">office@n2-video.at</a>
          <a href="tel:+4312345678">+43 1 234 5678</a>
        </div>
      </div>

      <div className={styles.legal}>
        <span>© {year} N2 Videoproduktion</span>
        <div>
          <Link href="/N2/impressum">Impressum</Link>
          <Link href="/N2/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
