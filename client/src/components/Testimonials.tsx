const testimonials = [
  {
    quote: "I've tried every cloud storage tool out there. Vogue Cloud is the first one that doesn't make me think about where my files are — they're just always there.",
    name: "Priya Mehta",
    role: "Product Designer at Arcadia",
    initials: "PM",
  },
  {
    quote: "We moved 12 TB of client assets to Vogue Cloud in a weekend. The upload speed was genuinely impressive, and the sharing controls saved us hours every week.",
    name: "James Okafor",
    role: "Head of Engineering, Luminary",
    initials: "JO",
  },
  {
    quote: "The free plan is actually generous. I've been a free user for 8 months and only upgraded because I ran out of space — not because of any artificial limitation.",
    name: "Sophie Larsen",
    role: "Freelance Photographer",
    initials: "SL",
  },
];

const stats = [
  { value: "500K+", label: "Active users" },
  { value: "2B+", label: "Files stored" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "<50ms", label: "Avg. access latency" },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#fafafa", paddingTop: 96, paddingBottom: 96 }}>
      <div className="container">
        {/* Stats row — above testimonials like Dropbox */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 24, marginBottom: 72,
          padding: "40px 48px",
          background: "#ffffff",
          border: "1px solid #ebebeb",
          borderRadius: 16,
          textAlign: "center",
        }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 38, fontWeight: 600, color: "#171717", letterSpacing: "-0.06em", lineHeight: 1, marginBottom: 6 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: "#8f8f8f" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 500, margin: "0 auto 48px" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>What People Say</div>
          <h2 className="h2">Loved by creators,<br />teams, and everyone in between</h2>
        </div>

        {/* Testimonial cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {testimonials.map(t => (
            <div key={t.name} className="card hover-lift" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width={13} height={13} viewBox="0 0 13 13" fill="#171717">
                    <path d="M6.5 1l1.5 3.1L11.5 4.6l-2.5 2.4.6 3.4-3.1-1.6L3.4 10.4l.6-3.4L1.5 4.6l3.5-.5L6.5 1z"/>
                  </svg>
                ))}
              </div>

              <p style={{ fontSize: 15, color: "#4d4d4d", lineHeight: "24px", flex: 1 }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid #f2f2f2", paddingTop: 16 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "#fafafa", border: "1px solid #ebebeb",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 600, color: "#8f8f8f",
                  fontFamily: "var(--font-geist-mono), monospace",
                  flexShrink: 0,
                }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#171717" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#8f8f8f" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
