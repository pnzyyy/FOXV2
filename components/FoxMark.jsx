export default function FoxMark({ size = 44, style = {}, alt = "FOX" }) {
  return (
    <img
      src="/assets/fox-mark-bw.png"
      alt={alt}
      width={size}
      height={size}
      style={{ display: "block", width: size, height: size, objectFit: "contain", flexShrink: 0, ...style }}
    />
  );
}
