'use client';
import Link from 'next/link';
import Reveal from './Reveal';

export default function PageHeader({ eyebrow, title, sub, current, parent }) {
  return (
    <header className="page-header">
      <div className="container">
        <Reveal>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">FOX</Link>
            <span className="sep">/</span>
            {parent && (
              <>
                <Link href={parent.href}>{parent.label}</Link>
                <span className="sep">/</span>
              </>
            )}
            <span className="cur">{current}</span>
          </nav>
        </Reveal>
        <div className="page-header-row" style={{ marginTop: 56 }}>
          <div>
            <Reveal delay={80}>
              <div className="t-eyebrow">{eyebrow}</div>
            </Reveal>
            <Reveal delay={160}>
              <h1 className="t-display" style={{ marginTop: 32, maxWidth: '14ch' }} dangerouslySetInnerHTML={{ __html: title }} />
            </Reveal>
          </div>
          {sub && (
            <Reveal delay={240}>
              <p className="t-lead" style={{ maxWidth: '32ch', paddingBottom: 12 }}>{sub}</p>
            </Reveal>
          )}
        </div>
      </div>
    </header>
  );
}
