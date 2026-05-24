'use client';
import Link from 'next/link';
import Reveal from './Reveal';
import ArchImage from './ArchImage';

export default function ListingCard({ l, index = 0 }) {
  return (
    <Reveal delay={index * 80}>
      <Link className="listing-card" href={`/objekte/${l.slug}`}>
        <div className="lc-media">
          <div className={`lc-status ${l.status === 'Verkauft' ? 'sold' : ''}`}>
            <span className="dot" />{l.status}
          </div>
          <div className="lc-num">№ {String(index + 1).padStart(2, '0')} / DA</div>
          <ArchImage seed={l.slug} label={l.imgLabel || 'Objektansicht'} style={{ height: '100%', width: '100%' }} />
        </div>
        <div className="lc-body">
          <div>
            <div className="lc-title">{l.title}</div>
            <div className="lc-location">{l.location}</div>
          </div>
          <div className="lc-price">{l.price}</div>
        </div>
        <div className="lc-meta">
          <span><b>{l.size}</b>m²</span>
          <span><b>{l.rooms}</b>&nbsp;Zimmer</span>
          <span><b>{l.year}</b></span>
          <span style={{ marginLeft: 'auto' }}>{l.type}</span>
        </div>
      </Link>
    </Reveal>
  );
}
