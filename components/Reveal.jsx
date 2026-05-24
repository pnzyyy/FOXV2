'use client';
import { useRef, useState, useEffect } from 'react';

export default function Reveal({ children, className = "", as: As = "div", delay = 0, kind = "fade", once = true, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) setShown(false);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [once]);
  const cls = `${kind === "image" ? "reveal-image" : kind === "rule" ? "reveal-rule" : "reveal"} ${shown ? "in" : ""} ${className}`;
  const style = { "--reveal-delay": `${delay}ms`, ...(rest.style || {}) };
  return <As ref={ref} className={cls} style={style} {...rest}>{children}</As>;
}
