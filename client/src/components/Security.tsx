const pillars = [
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6L11 2z" stroke="#171717" strokeWidth={1.5} strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="#171717" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AES-256 Encryption",
    body: "Every file is encrypted at rest with AES-256 and in transit with TLS 1.3. Your data is unreadable to anyone — including us.",
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
        <rect x={5} y={10} width={12} height={9} rx={2} stroke="#171717" strokeWidth={1.5}/>
        <path d="M8 10V7a3 3 0 016 0v3" stroke="#171717" strokeWidth={1.5} strokeLinecap="round"/>
        <circle cx={11} cy={15} r={1} fill="#171717"/>
      </svg>
    ),
    title: "Two-Factor Auth",
    body: "Protect your account with TOTP-based two-factor authentication. Passkey support coming soon.",
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
        <circle cx={11} cy={11} r={8} stroke="#171717" strokeWidth={1.5}/>
        <path d="M11 7v4l3 2" stroke="#171717" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Audit Logs",
    body: "See a complete timeline of every login, upload, download, and share event — filterable by user, file, or date.",
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
        <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" stroke="#171717" strokeWidth={1.5}/>
        <path d="M11 7v4" stroke="#171717" strokeWidth={1.5} strokeLinecap="round"/>
        <path d="M8 3.5C9 3 10 2.8 11 2.8" stroke="#171717" strokeWidth={1.5} strokeLinecap="round"/>
      </svg>
    ),
    title: "GDPR & SOC 2",
    body: "Vogue Cloud is fully GDPR compliant and SOC 2 Type II certified. Data stays in your region. You decide retention.",
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
        <rect x={2} y={5} width={18} height={13} rx={2} stroke="#171717" strokeWidth={1.5}/>
        <path d="M2 9h18" stroke="#171717" strokeWidth={1.5}/>
        <path d="M6 14h4" stroke="#171717" strokeWidth={1.5} strokeLinecap="round"/>
      </svg>
    ),
    title: "99.99% Uptime",
    body: "Redundant infrastructure across 3 regions with automated failover. Real-time status at status.voguecloud.com.",
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
        <path d="M4 4h6v6H4zM12 4h6v6h-6zM4 12h6v6H4zM12 12h6v6h-6z" stroke="#171717" strokeWidth={1.5} strokeLinejoin="round"/>
      </svg>
    ),
    title: "Zero-Knowledge Option",
    body: "Enable client-side encryption so your files are encrypted before they ever leave your device. Only you hold the keys.",
  },
];

export default function Security() {
  return (
    <section id="security" className="section" style={{ background: "#ffffff", borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb" }}>
      <div className="container">
        {/* Split layout: text left, grid right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
          {/* Left: text */}
          <div style={{ position: "sticky", top: 80 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Security</div>
            <h2 className="h2" style={{ marginBottom: 20 }}>Your files are safer here than on your hard drive</h2>
            <p className="lead" style={{ marginBottom: 32 }}>
              Vogue Cloud is built on enterprise-grade infrastructure with security controls that most companies only get after years of compliance work. We make it the default.
            </p>
            <div style={{ display: "flex", gap: 32, marginBottom: 36 }}>
              {[["99.99%","Uptime SLA"],["256-bit","AES Encryption"],["3×","Geo-redundant"]].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 26, fontWeight: 600, color: "#171717", letterSpacing: "-0.04em" }}>{v}</div>
                  <div style={{ fontSize: 12, color: "#8f8f8f" }}>{l}</div>
                </div>
              ))}
            </div>
            <a href="#" className="btn-secondary" style={{ display: "inline-flex" }}>
              Read our security docs →
            </a>
          </div>

          {/* Right: 3-col grid of pillars */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {pillars.map(p => (
              <div key={p.title} className="card hover-lift">
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "#fafafa", border: "1px solid #ebebeb",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 14,
                }}>
                  {p.icon}
                </div>
                <h3 className="h3" style={{ marginBottom: 8, fontSize: 15 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "#4d4d4d", lineHeight: "20px" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
