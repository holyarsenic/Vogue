"use client";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section style={{ position: "relative", background: "#fafafa", paddingTop: 148, paddingBottom: 120, overflow: "hidden" }}>
      {/* Mesh gradient */}
      <div className="hero-mesh" aria-hidden="true" />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>

          {/* Eyebrow pill */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 12, fontWeight: 500, color: "#4d4d4d",
              background: "#ffffff", border: "1px solid #ebebeb",
              padding: "5px 12px", borderRadius: 100,
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%", background: "#007cf0",
                boxShadow: "0 0 0 2px rgba(0,124,240,0.2)",
              }} />
              Now with 5 GB free — no card required
            </span>
          </div>

          {/* Headline */}
          <h1 className="display" style={{ marginBottom: 24 }}>
            The smarter way<br />
            to store your world
          </h1>

          {/* Subheadline */}
          <p className="lead" style={{ maxWidth: 520, margin: "0 auto 40px", color: "#4d4d4d" }}>
            Upload, organize, and share every file you care about — from any device, instantly.
            Vogue Cloud gives you 5 GB free to start, and grows with you.
          </p>

          {/* Email CTA (Dropbox-style inline form) */}
          <form
            onSubmit={e => { e.preventDefault(); /* signup flow */ }}
            style={{
              display: "flex", gap: 10, maxWidth: 460, margin: "0 auto 16px",
              flexWrap: "wrap", justifyContent: "center",
            }}
          >
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ flex: "1 1 220px", minWidth: 0 }}
              aria-label="Email address"
            />
            <button type="submit" className="btn-primary" style={{ flex: "0 0 auto" }}>
              Get Started Free
            </button>
          </form>

          {/* Trust micro-copy */}
          <p className="eyebrow" style={{ color: "#a1a1a1", marginBottom: 0 }}>
            Free forever · No credit card · Cancel anytime
          </p>
        </div>

        {/* ── Hero UI Mockup ── */}
        <div style={{ position: "relative", marginTop: 72, maxWidth: 860, margin: "72px auto 0" }}>
          {/* Main window */}
          <div style={{
            background: "#ffffff", border: "1px solid #ebebeb",
            borderRadius: 16, overflow: "hidden",
          }} className="mockup-shadow">
            {/* Window chrome */}
            <div style={{
              height: 44, background: "#fafafa",
              borderBottom: "1px solid #ebebeb",
              display: "flex", alignItems: "center", padding: "0 16px", gap: 8,
            }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ebebeb" }}/>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ebebeb" }}/>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ebebeb" }}/>
              <span style={{ flex: 1 }} />
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "#f2f2f2", border: "1px solid #ebebeb",
                borderRadius: 6, padding: "4px 12px",
                fontSize: 11, color: "#8f8f8f", fontFamily: "monospace",
              }}>
                app.voguecloud.com
              </div>
              <span style={{ flex: 1 }} />
            </div>

            {/* App body */}
            <div style={{ display: "flex", minHeight: 340 }}>
              {/* Sidebar */}
              <div style={{
                width: 200, borderRight: "1px solid #ebebeb", padding: "20px 12px",
                display: "flex", flexDirection: "column", gap: 2, flexShrink: 0,
              }} className="hidden md:flex">
                {["All Files", "Recent", "Shared with me", "Starred", "Trash"].map((item, i) => (
                  <div key={item} style={{
                    padding: "7px 10px", borderRadius: 6, fontSize: 13,
                    color: i === 0 ? "#171717" : "#8f8f8f",
                    background: i === 0 ? "#f2f2f2" : "transparent",
                    fontWeight: i === 0 ? 500 : 400, cursor: "pointer",
                  }}>{item}</div>
                ))}
                <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid #ebebeb" }}>
                  <div style={{ fontSize: 11, color: "#a1a1a1", marginBottom: 6 }}>Storage used</div>
                  <div style={{ height: 4, background: "#f2f2f2", borderRadius: 2, marginBottom: 5 }}>
                    <div style={{ width: "62%", height: "100%", background: "#171717", borderRadius: 2 }}/>
                  </div>
                  <div style={{ fontSize: 11, color: "#8f8f8f" }}>3.1 GB of 5 GB</div>
                </div>
              </div>

              {/* File grid */}
              <div style={{ flex: 1, padding: "20px 24px" }}>
                {/* Toolbar */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#171717" }}>My Files</span>
                  <div style={{ display: "flex", gap: 8 }}>
                    <div style={{
                      height: 30, padding: "0 14px", background: "#171717", color: "#fff",
                      borderRadius: 6, fontSize: 12, fontWeight: 500,
                      display: "flex", alignItems: "center", gap: 5, cursor: "pointer",
                    }}>
                      <svg width={12} height={12} viewBox="0 0 12 12" fill="none">
                        <path d="M6 2v8M2 6h8" stroke="#fff" strokeWidth={1.5} strokeLinecap="round"/>
                      </svg>
                      Upload
                    </div>
                  </div>
                </div>

                {/* File rows */}
                {[
                  { name: "Brand Assets", type: "folder", size: "—", color: "#f9cb28", mod: "2h ago" },
                  { name: "Q3 Strategy.pdf", type: "pdf", size: "2.4 MB", color: "#ff4d4d", mod: "Yesterday" },
                  { name: "Profile Photos.zip", type: "zip", size: "18 MB", color: "#7928ca", mod: "3 days ago" },
                  { name: "Campaign Video.mp4", type: "video", size: "204 MB", color: "#007cf0", mod: "Last week" },
                  { name: "Design System.fig", type: "fig", size: "46 MB", color: "#50e3c2", mod: "Sep 10" },
                ].map((f, i) => (
                  <div key={f.name} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "9px 0",
                    borderBottom: i < 4 ? "1px solid #f2f2f2" : "none",
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 7, flexShrink: 0,
                      background: f.color + "18", display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <div style={{ width: 14, height: 14, borderRadius: 3, background: f.color }}/>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 500, color: "#171717", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{f.name}</div>
                      <div style={{ fontSize: 11, color: "#a1a1a1" }}>{f.mod}</div>
                    </div>
                    <div style={{ fontSize: 12, color: "#a1a1a1", flexShrink: 0 }}>{f.size}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating share card */}
          <div style={{
            position: "absolute", bottom: -20, right: -20,
            background: "#ffffff", border: "1px solid #ebebeb",
            borderRadius: 12, padding: "14px 16px", width: 200,
            boxShadow: "0 4px 8px rgba(0,0,0,0.06), 0 16px 32px -8px rgba(0,0,0,0.12)",
          }} className="hidden md:block">
            <div style={{ fontSize: 11, fontWeight: 600, color: "#171717", marginBottom: 8 }}>Shared link ready</div>
            <div style={{
              background: "#fafafa", border: "1px solid #ebebeb",
              borderRadius: 6, padding: "6px 10px", fontSize: 10,
              fontFamily: "monospace", color: "#8f8f8f", marginBottom: 10,
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}>vogue.cloud/s/xK9...</div>
            <div style={{
              display: "flex", gap: 6,
            }}>
              {["#007cf0","#7928ca","#ff4d4d"].map((c,i) => (
                <div key={i} style={{ width: 22, height: 22, borderRadius: "50%", background: c + "20", border: `1px solid ${c}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: c }}/>
                </div>
              ))}
              <span style={{ fontSize: 11, color: "#8f8f8f", alignSelf: "center" }}>+2 more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
