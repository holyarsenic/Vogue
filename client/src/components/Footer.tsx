"use client";

const cols = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#security" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "API Docs", href: "#" },
    { label: "Status", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

const socials = [
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#fafafa", borderTop: "1px solid #ebebeb", paddingTop: 64, paddingBottom: 40 }}>
      <div className="container">
        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "200px repeat(4, 1fr)",
          gap: 40, marginBottom: 56,
          alignItems: "start",
        }}>
          {/* Brand */}
          <div>
            <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginBottom: 12 }}>
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                <path d="M3 12l5-5 4 4 4-4 5 5" stroke="#171717" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 17l5-5 4 4 4-4 5 5" stroke="#171717" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0.35}/>
              </svg>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#171717", letterSpacing: "-0.02em" }}>Vogue Cloud</span>
            </a>
            <p style={{ fontSize: 12, color: "#8f8f8f", lineHeight: "18px", marginBottom: 16 }}>
              Secure cloud storage for individuals and teams. 5 GB free.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  style={{
                    width: 30, height: 30, borderRadius: 6, border: "1px solid #ebebeb",
                    background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#a1a1a1", textDecoration: "none", transition: "color 0.15s, border-color 0.15s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#171717"; (e.currentTarget as HTMLElement).style.borderColor = "#d0d0d0"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#a1a1a1"; (e.currentTarget as HTMLElement).style.borderColor = "#ebebeb"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols — desktop */}
          {Object.entries(cols).map(([group, links]) => (
            <div key={group} className="hidden md:block">
              <div className="eyebrow" style={{ color: "#171717", fontSize: 11, marginBottom: 14 }}>{group}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                {links.map(l => (
                  <li key={l.label}>
                    <a href={l.href}
                      style={{ fontSize: 13, color: "#8f8f8f", textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#171717")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#8f8f8f")}
                    >{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile link grid */}
        <div className="grid grid-cols-2 gap-8 mb-12 md:hidden">
          {Object.entries(cols).map(([group, links]) => (
            <div key={group}>
              <div className="eyebrow" style={{ color: "#171717", fontSize: 11, marginBottom: 10 }}>{group}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} style={{ fontSize: 12, color: "#8f8f8f", textDecoration: "none" }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #ebebeb", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p style={{ fontSize: 12, color: "#a1a1a1", margin: 0 }}>
            © 2026 Vogue Cloud, Inc. · voguecloud.com
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            {["Privacy", "Terms", "Cookies"].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: "#a1a1a1", textDecoration: "none" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#171717")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#a1a1a1")}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
