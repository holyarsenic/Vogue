"use client";
import { useState } from "react";

const plans = [
  {
    key: "free",
    name: "Free",
    monthly: 0,
    annual: 0,
    tagline: "Everything you need to get started.",
    storage: "5 GB",
    cta: "Get Started Free",
    ctaStyle: "secondary" as const,
    popular: false,
    features: [
      "5 GB storage",
      "Unlimited file uploads",
      "Shareable links",
      "Web & mobile access",
      "Basic folder organization",
      "Standard file preview",
      "Email support",
    ],
  },
  {
    key: "plus",
    name: "Plus",
    monthly: 8,
    annual: 6,
    tagline: "More space, more control.",
    storage: "2 TB",
    cta: "Start Plus",
    ctaStyle: "primary" as const,
    popular: true,
    features: [
      "2 TB storage",
      "Everything in Free",
      "Version history (90 days)",
      "Password-protected links",
      "Link expiry dates",
      "Priority sync & CDN",
      "Advanced access controls",
      "Priority support",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    monthly: 20,
    annual: 15,
    tagline: "For teams that move fast.",
    storage: "5 TB",
    cta: "Start Pro",
    ctaStyle: "secondary" as const,
    popular: false,
    features: [
      "5 TB pooled storage",
      "Everything in Plus",
      "Team workspace (up to 10)",
      "Admin dashboard",
      "Audit logs",
      "SSO & SAML",
      "API access",
      "Dedicated support",
    ],
  },
];

function Check() {
  return (
    <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2.5 7.5l3 3 7-7" stroke="#171717" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="section" style={{ background: "#fafafa" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 520, margin: "0 auto 52px" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Pricing</div>
          <h2 className="h2" style={{ marginBottom: 16 }}>Start free. Scale when ready.</h2>
          <p className="lead" style={{ marginBottom: 32 }}>
            No hidden fees. Upgrade or downgrade at any time.
          </p>
          {/* Billing toggle */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
            <div className="toggle-track">
              <button className={`toggle-btn${!annual ? " active" : ""}`} onClick={() => setAnnual(false)}>Monthly</button>
              <button className={`toggle-btn${annual ? " active" : ""}`} onClick={() => setAnnual(true)}>Annual</button>
            </div>
            {annual && (
              <span style={{
                fontSize: 11, fontWeight: 600, color: "#50e3c2",
                background: "rgba(80,227,194,0.12)", border: "1px solid rgba(80,227,194,0.3)",
                padding: "3px 8px", borderRadius: 100,
                fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.04em",
              }}>SAVE 25%</span>
            )}
          </div>
        </div>

        {/* Plan cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, maxWidth: 960, margin: "0 auto" }}>
          {plans.map(plan => (
            <div
              key={plan.key}
              className="card-lg hover-lift"
              style={{
                display: "flex", flexDirection: "column",
                border: plan.popular ? "1.5px solid #171717" : "1px solid #ebebeb",
                position: "relative",
              }}
            >
              {plan.popular && (
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  background: "#171717", color: "#fff",
                  fontSize: 10, fontWeight: 600, letterSpacing: "0.06em",
                  padding: "3px 10px", borderRadius: 100,
                  fontFamily: "var(--font-geist-mono), monospace",
                }}>MOST POPULAR</div>
              )}

              <div style={{ marginBottom: 24 }}>
                <div className="eyebrow" style={{ color: "#8f8f8f", marginBottom: 8 }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                  <span style={{ fontSize: 48, fontWeight: 600, color: "#171717", letterSpacing: "-0.08em", lineHeight: 1 }}>
                    ${annual ? plan.annual : plan.monthly}
                  </span>
                  {plan.monthly > 0 && (
                    <span style={{ fontSize: 14, color: "#8f8f8f" }}>/mo{annual ? ", billed annually" : ""}</span>
                  )}
                </div>
                <p style={{ fontSize: 13, color: "#4d4d4d", lineHeight: "19px" }}>{plan.tagline}</p>
              </div>

              <a
                href="#"
                className={plan.ctaStyle === "primary" ? "btn-primary" : "btn-secondary"}
                style={{ marginBottom: 24, justifyContent: "center" }}
              >
                {plan.cta}
              </a>

              <div style={{ borderTop: "1px solid #ebebeb", paddingTop: 24, flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#171717", marginBottom: 12 }}>
                  {plan.storage} storage
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#4d4d4d" }}>
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <p style={{ textAlign: "center", marginTop: 36, fontSize: 14, color: "#8f8f8f" }}>
          Need more?{" "}
          <a href="#" style={{ color: "#0070f3", fontWeight: 500, textDecoration: "none" }}>
            View Enterprise options →
          </a>
        </p>
      </div>
    </section>
  );
}
