"use client";
import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");

  return (
    <section style={{
      position: "relative", overflow: "hidden",
      background: "#fafafa",
      paddingTop: 120, paddingBottom: 120,
      textAlign: "center",
    }}>
      {/* Subtle mesh echo */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background:
          "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,124,240,0.07) 0%, rgba(121,40,202,0.04) 50%, transparent 75%)",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>Get Started Today</div>

        <h2 style={{
          fontSize: "clamp(36px, 5.5vw, 60px)",
          fontWeight: 600, letterSpacing: "-0.05em",
          lineHeight: 1.08, color: "#171717", marginBottom: 20,
        }}>
          Your files deserve<br />a better home.
        </h2>

        <p className="lead" style={{ maxWidth: 440, margin: "0 auto 40px", color: "#4d4d4d" }}>
          Join 500,000+ users who trust Vogue Cloud to keep their files safe, organized, and always within reach. Start with 5 GB — free forever.
        </p>

        {/* Email form */}
        <form onSubmit={e => e.preventDefault()} style={{
          display: "flex", gap: 10, maxWidth: 440, margin: "0 auto 20px",
          flexWrap: "wrap", justifyContent: "center",
        }}>
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ flex: "1 1 200px" }}
          />
          <button type="submit" className="btn-primary" style={{ flex: "0 0 auto", height: 46, fontSize: 15 }}>
            Get 5GB Free
          </button>
        </form>

        {/* Trust row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
          {["No credit card", "Free forever", "AES-256 encrypted", "Cancel anytime"].map(t => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#a1a1a1" }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none">
                <path d="M2 6l2.5 2.5L10 3" stroke="#a1a1a1" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t}
            </span>
          ))}
        </div>

        {/* App download CTA — Dropbox-style */}
        <div style={{
          marginTop: 56, paddingTop: 40, borderTop: "1px solid #ebebeb",
          display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", alignItems: "center",
        }}>
          <span style={{ fontSize: 13, color: "#8f8f8f" }}>Also available on</span>
          {[
            { label: "macOS", icon: "⌘" },
            { label: "Windows", icon: "⊞" },
            { label: "iOS", icon: "◆" },
            { label: "Android", icon: "▲" },
          ].map(app => (
            <a key={app.label} href="#" className="btn-secondary" style={{ height: 36, padding: "0 16px", fontSize: 13, gap: 8 }}>
              <span style={{ fontSize: 14 }}>{app.icon}</span>
              {app.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
