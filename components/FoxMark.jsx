export default function FoxMark({ size = 44, style = {}, alt = "FOX", variant = "light" }) {
  const cls = variant === "dark" ? "foxmark-dark" : "foxmark-light";
  return (
    <img
      src="/assets/fox-mark-bw.png"
      alt={alt}
      width={size}
      height={size}
      className={cls}
      style={{ display: "block", width: size, height: size, objectFit: "contain", flexShrink: 0, ...style }}
    />
  );
}
