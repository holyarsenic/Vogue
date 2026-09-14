const logos = [
  "Arcadia Studio","Luminary Inc","Nexus Co","Solstice","Meridian","Parallax","Echelon","Vanta","Prism Labs","Clearwave",
];

export default function LogoStrip() {
  const doubled = [...logos, ...logos];

  return (
    <section style={{ borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb", padding: "28px 0", background: "#fafafa", overflow: "hidden" }}>
      <div style={{ marginBottom: 20, textAlign: "center" }}>
        <p className="eyebrow" style={{ color: "#a1a1a1" }}>Trusted by teams at</p>
      </div>
      <div style={{ overflow: "hidden", maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}>
        <div className="ticker-track">
          {doubled.map((name, i) => (
            <span key={i} style={{
              display: "inline-block",
              padding: "0 40px",
              fontSize: 15,
              fontWeight: 600,
              color: "#d0d0d0",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
              userSelect: "none",
            }}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
