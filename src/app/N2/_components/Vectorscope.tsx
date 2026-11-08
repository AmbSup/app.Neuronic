import styles from "./Vectorscope.module.css";

export function Vectorscope({ className = "" }: { className?: string }) {
  const ticks = Array.from({ length: 24 }).map((_, i) => {
    const angle = (i * 360) / 24;
    const rad = (angle * Math.PI) / 180;
    const r1 = 180;
    const r2 = angle % 90 === 0 ? 164 : 172;
    const x1 = 200 + r1 * Math.cos(rad);
    const y1 = 200 + r1 * Math.sin(rad);
    const x2 = 200 + r2 * Math.cos(rad);
    const y2 = 200 + r2 * Math.sin(rad);
    return { x1, y1, x2, y2 };
  });

  return (
    <div className={`${styles.scope} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 400" role="img">
        <defs>
          <filter id="n2-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="n2-glass" cx="50%" cy="46%" r="65%">
            <stop offset="0%" stopColor="#121a14" />
            <stop offset="78%" stopColor="#0c100d" />
            <stop offset="100%" stopColor="#090c0a" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="200" r="188" fill="url(#n2-glass)" stroke="var(--n2-graticule-bright)" strokeWidth="1.5" />

        <g className={styles.rings} stroke="var(--n2-graticule)" fill="none" strokeWidth="1">
          <circle cx="200" cy="200" r="150" />
          <circle cx="200" cy="200" r="112" />
          <circle cx="200" cy="200" r="75" />
          <circle cx="200" cy="200" r="38" />
        </g>

        <g className={styles.crosshair} stroke="var(--n2-graticule)" strokeWidth="1">
          <line x1="200" y1="14" x2="200" y2="386" />
          <line x1="14" y1="200" x2="386" y2="200" />
        </g>

        <g className={styles.ticks} stroke="var(--n2-graticule-bright)" strokeWidth="1.5">
          {ticks.map((t, i) => (
            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
          ))}
        </g>

        <path
          className={styles.trace}
          d="M 200 200
             C 230 150, 300 140, 318 200
             C 332 244, 300 286, 252 292
             C 196 300, 142 272, 118 220
             C 98 176, 116 122, 164 104
             C 210 88, 262 102, 286 138
             C 304 166, 296 206, 268 224
             C 238 244, 198 232, 182 202
             C 170 178, 182 150, 206 142"
          fill="none"
          stroke="var(--n2-phosphor)"
          strokeWidth="2.25"
          strokeLinecap="round"
          filter="url(#n2-glow)"
        />

        <circle className={styles.lockDot} cx="206" cy="142" r="3.5" fill="var(--n2-amber)" filter="url(#n2-glow)" />
      </svg>

      <div className={`${styles.readout} ${styles.monoFigure}`} aria-hidden="true">
        <span>CH A/B</span>
        <span className={styles.readoutArmed}>ARMED</span>
      </div>
    </div>
  );
}
