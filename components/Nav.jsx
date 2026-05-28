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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on navigation path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isDarkHero = pathname === '/' && !scrolled;

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${isDarkHero ? 'theme-dark' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <Link href="/" className="logo-mark" aria-label="FOX Immobilien Darmstadt" onClick={() => setIsOpen(false)}>
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

        {/* Desktop Links */}
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

        {/* Desktop Right */}
        <div className="nav-right">
          <Link href="/marktwertanalyse" className="nav-link" style={{ fontWeight: 600 }}>
            Bewertung anfragen ↗
          </Link>
        </div>

        {/* Hamburger Toggle */}
        <button
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
          aria-expanded={isOpen}
        >
          <span className="line" />
          <span className="line" />
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`nav-mobile-overlay ${isOpen ? 'is-open' : ''}`}>
        <div className="nav-mobile-links">
          {NAV_ITEMS.map((it) => {
            const isActive = pathname === it.href || pathname?.startsWith(it.href + '/') ||
              it.children?.some(c => pathname === c.href);
            return (
              <div key={it.key} style={{ display: 'flex', flexDirection: 'column' }}>
                <Link
                  href={it.href}
                  className={`nav-mobile-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {it.label}
                </Link>
                {it.children && (
                  <div className="nav-mobile-sublinks">
                    {it.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`nav-mobile-sublink ${pathname === c.href ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="nav-mobile-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
            <span className="dot-live" style={{ width: 6, height: 6, background: '#5fb878', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(95,184,120,0.18)' }} />
            <a href="tel:+496151151522" style={{ color: 'inherit', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
              06151 151522
            </a>
          </div>
          <Link
            href="/marktwertanalyse"
            className="btn"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setIsOpen(false)}
          >
            <span>Bewertung anfragen</span>
            <span className="arrow">↗</span>
          </Link>
        </div>
      </div>
    </>
  );
}
