'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { key: 'verkauf', label: 'Verkauf', href: '/verkauf' },
  {
    key: 'verwaltung', label: 'Verwaltung', href: '/weg-verwaltung',
    children: [
      { label: 'WEG-Verwaltung', href: '/weg-verwaltung' },
      { label: 'Mietverwaltung', href: '/mietverwaltung' },
    ],
  },
  { key: 'ueber-uns', label: 'Über uns', href: '/ueber-uns' },
  { key: 'kontakt', label: 'Kontakt', href: '/kontakt' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // hero pages have a dark full-bleed image — keep nav white until scrolled
  const isDarkHero = pathname === '/' && !scrolled;

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${isDarkHero ? 'theme-dark' : ''}`}>
      <Link href="/" className="logo-mark" aria-label="FOX Immobilien Darmstadt">
        <img
          src="/assets/fox-logo-bw.png"
          alt="FOX Immobilien"
          height={42}
          width={Math.round(42 * 1002 / 448)}
          className="fox-logo-img"
          style={{ display: 'block', height: 42, width: Math.round(42 * 1002 / 448), flexShrink: 0 }}
        />
        <span className="sub">Immobilien<br />Darmstadt · Rhein-Main</span>
      </Link>
      <div className="nav-links">
        {NAV_ITEMS.map((it) => {
          const isActive = pathname === it.href || pathname?.startsWith(it.href + '/') ||
            it.children?.some(c => pathname === c.href);
          if (it.children) {
            return (
              <div key={it.key} className="nav-dropdown">
                <Link href={it.href} className={`nav-link ${isActive ? 'active' : ''}`}>
                  {it.label}
                  <span className="nav-chevron" aria-hidden="true">›</span>
                </Link>
                <div className="nav-dropdown-menu">
                  {it.children.map(c => (
                    <Link key={c.href} href={c.href}
                      className={`nav-dropdown-item ${pathname === c.href ? 'active' : ''}`}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <Link key={it.key} href={it.href}
              className={`nav-link ${isActive ? 'active' : ''}`}>{it.label}</Link>
          );
        })}
      </div>
      <div className="nav-right">
        <span className="nav-cta-line" aria-hidden="true">
          <span className="dot-live" />
          <span>+49 6151 27 89 40</span>
        </span>
        <Link href="/marktwertanalyse" className="nav-link" style={{ fontWeight: 600 }}>
          Bewertung anfragen ↗
        </Link>
      </div>
    </nav>
  );
}
