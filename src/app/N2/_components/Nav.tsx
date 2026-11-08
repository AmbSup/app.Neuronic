"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Nav.module.css";

const links = [
  { href: "/N2/imagefilm", label: "Imagefilm" },
  { href: "/N2/werbevideo", label: "Werbevideo" },
  { href: "/N2/eventvideo", label: "Eventvideo" },
  { href: "/N2/ueber-uns", label: "Über uns" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Link className={styles.mark} href="/N2" aria-label="N2 Startseite">
          N2
        </Link>

        <nav className={styles.links} aria-label="Hauptnavigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className={styles.kontakt} href="/N2#kontakt">
          Kontakt
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="n2-nav-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav id="n2-nav-mobile" className={styles.mobile} aria-label="Mobile Navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/N2#kontakt" onClick={() => setOpen(false)}>
            Kontakt
          </Link>
        </nav>
      )}
    </header>
  );
}
