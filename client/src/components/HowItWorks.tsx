const steps = [
  {
    num: "01",
    title: "Create a free account",
    body: "Sign up in 30 seconds with your email. No credit card, no trial period — 5 GB is yours immediately, forever.",
    accent: "#007cf0",
  },
  {
    num: "02",
    title: "Upload your files",
    body: "Drag files from your desktop or sync a folder. Our smart uploader handles any size, pausing and resuming automatically.",
    accent: "#7928ca",
  },
  {
    num: "03",
    title: "Organize with folders & tags",
    body: "Create a structure that works for you. Search across file contents, not just names — even inside PDFs and documents.",
    accent: "#ff0080",
  },
  {
    num: "04",
    title: "Share or access anywhere",
    body: "Grab a link, set permissions, and send. Or open Vogue Cloud on any device — phone, tablet, laptop — and pick up right where you left off.",
    accent: "#f9cb28",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" style={{ background: "#ffffff", borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 540, margin: "0 auto 72px" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>How It Works</div>
          <h2 className="h2" style={{ marginBottom: 16 }}>Up and running in minutes</h2>
          <p className="lead">Four steps. No setup complexity. Just your files, safe and organized.</p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, position: "relative" }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{ padding: "32px 28px", position: "relative", borderRight: i < steps.length - 1 ? "1px solid #ebebeb" : "none" }}>
              {/* Step number badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 48, height: 48, borderRadius: 12,
                background: "#fafafa", border: "1px solid #ebebeb",
                marginBottom: 24, position: "relative",
              }}>
                {/* Accent dot */}
                <span style={{
                  position: "absolute", top: -5, right: -5,
                  width: 12, height: 12, borderRadius: "50%",
                  background: s.accent,
                  boxShadow: `0 0 0 3px #ffffff`,
                }} />
                <span style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 13, fontWeight: 600, color: "#171717",
                }}>{s.num}</span>
              </div>

              <h3 className="h3" style={{ marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#4d4d4d", lineHeight: "22px" }}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 56, paddingTop: 48, borderTop: "1px solid #ebebeb" }}>
          <a href="#" className="btn-primary">Create Your Free Account</a>
        </div>
      </div>
    </section>
  );
}
