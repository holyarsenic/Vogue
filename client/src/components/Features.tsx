const features = [
  {
    eyebrow: "Upload",
    title: "Drop it in. Done.",
    body: "Drag files of any type from your desktop — images, videos, PDFs, archives, design files. Vogue Cloud handles everything up to 50 GB per file with no format restrictions. Resumable uploads mean large files always finish.",
    visual: (
      <div style={{ background: "#ffffff", border: "1px solid #ebebeb", borderRadius: 14, padding: 24 }} className="mockup-shadow">
        {/* Upload zone */}
        <div style={{
          border: "2px dashed #ebebeb", borderRadius: 10, padding: "32px 24px",
          textAlign: "center", marginBottom: 20,
          transition: "border-color 0.2s",
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10, background: "#fafafa",
            border: "1px solid #ebebeb", margin: "0 auto 12px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
              <path d="M10 13V4M6 8l4-4 4 4" stroke="#171717" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 15v1a1 1 0 001 1h12a1 1 0 001-1v-1" stroke="#171717" strokeWidth={1.5} strokeLinecap="round"/>
            </svg>
          </div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#171717", marginBottom: 4 }}>Drop files here</p>
          <p style={{ fontSize: 12, color: "#8f8f8f" }}>or <span style={{ color: "#0070f3" }}>browse your computer</span></p>
        </div>
        {/* Upload progress rows */}
        {[
          { name: "Campaign_Finals.zip", pct: 100, color: "#50e3c2" },
          { name: "Product_Shoot.mp4", pct: 72, color: "#007cf0" },
          { name: "Brand_Manual.pdf", pct: 38, color: "#7928ca" },
        ].map(f => (
          <div key={f.name} style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span style={{ fontSize: 12, color: "#4d4d4d", fontWeight: 500 }}>{f.name}</span>
              <span style={{ fontSize: 11, color: "#8f8f8f", fontFamily: "monospace" }}>{f.pct}%</span>
            </div>
            <div style={{ height: 3, background: "#f2f2f2", borderRadius: 2 }}>
              <div style={{ height: "100%", width: `${f.pct}%`, background: f.color, borderRadius: 2, transition: "width 0.5s" }}/>
            </div>
          </div>
        ))}
      </div>
    ),
    flip: false,
  },
  {
    eyebrow: "Organize",
    title: "Your files, your way.",
    body: "Smart folders, custom tags, and a full-text search that reads inside documents. Find any file in under two seconds — even if you can only remember a word from inside a PDF from three years ago.",
    visual: (
      <div style={{ background: "#ffffff", border: "1px solid #ebebeb", borderRadius: 14, padding: 24 }} className="mockup-shadow">
        {/* Search bar */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "#fafafa", border: "1px solid #ebebeb", borderRadius: 8,
          padding: "9px 14px", marginBottom: 20,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
            <circle cx={6} cy={6} r={4.5} stroke="#a1a1a1" strokeWidth={1.5}/>
            <path d="M9.5 9.5L12 12" stroke="#a1a1a1" strokeWidth={1.5} strokeLinecap="round"/>
          </svg>
          <span style={{ fontSize: 13, color: "#a1a1a1" }}>Search all files...</span>
          <span style={{ marginLeft: "auto", fontSize: 11, color: "#c8c8c8", fontFamily: "monospace" }}>⌘K</span>
        </div>
        {/* Folder list */}
        {[
          { name: "Design Assets", count: 142, color: "#f9cb28" },
          { name: "Client Projects", count: 68, color: "#007cf0" },
          { name: "Marketing", count: 93, color: "#7928ca" },
          { name: "Finance 2026", count: 31, color: "#50e3c2" },
        ].map(f => (
          <div key={f.name} style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "10px 0", borderBottom: "1px solid #f2f2f2",
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: f.color + "20", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                <path d="M2 4a1 1 0 011-1h4l1.5 2H13a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" fill={f.color} fillOpacity={0.6}/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#171717" }}>{f.name}</div>
            </div>
            <div style={{ fontSize: 11, color: "#a1a1a1" }}>{f.count} files</div>
          </div>
        ))}
      </div>
    ),
    flip: true,
  },
  {
    eyebrow: "Share",
    title: "Sharing that actually works.",
    body: "Generate a secure link in one click. Set expiry dates, password-protect files, limit downloads, and see who accessed what. Vogue Cloud tracks every view — so you always know where your files went.",
    visual: (
      <div style={{ background: "#ffffff", border: "1px solid #ebebeb", borderRadius: 14, padding: 24 }} className="mockup-shadow">
        {/* Share modal sim */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#171717", marginBottom: 16 }}>Share "Q3 Strategy.pdf"</div>
          {/* Link row */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8, background: "#fafafa",
            border: "1px solid #ebebeb", borderRadius: 8, padding: "8px 12px", marginBottom: 16,
          }}>
            <span style={{ flex: 1, fontSize: 12, color: "#8f8f8f", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              vogue.cloud/s/xK9mT4qRs
            </span>
            <span style={{
              fontSize: 11, fontWeight: 600, color: "#0070f3", cursor: "pointer", flexShrink: 0,
            }}>Copy</span>
          </div>
          {/* Options */}
          {[
            { label: "Expires in", val: "7 days" },
            { label: "Password", val: "Set" },
            { label: "Downloads", val: "Disabled" },
          ].map(o => (
            <div key={o.label} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "9px 0", borderBottom: "1px solid #f2f2f2",
            }}>
              <span style={{ fontSize: 13, color: "#4d4d4d" }}>{o.label}</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: "#171717" }}>{o.val}</span>
            </div>
          ))}
        </div>
        {/* Views */}
        <div style={{ fontSize: 11, color: "#8f8f8f", marginBottom: 8 }}>Recent activity</div>
        {[
          { name: "Priya M.", time: "2 min ago", action: "Viewed" },
          { name: "James O.", time: "1h ago", action: "Downloaded" },
        ].map(a => (
          <div key={a.name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#f2f2f2", border: "1px solid #ebebeb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 600, color: "#8f8f8f", fontFamily: "monospace", flexShrink: 0 }}>
              {a.name.split(" ").map(w => w[0]).join("")}
            </div>
            <span style={{ fontSize: 12, color: "#4d4d4d", flex: 1 }}><strong>{a.name}</strong> · {a.action}</span>
            <span style={{ fontSize: 11, color: "#a1a1a1" }}>{a.time}</span>
          </div>
        ))}
      </div>
    ),
    flip: false,
  },
  {
    eyebrow: "Access Anywhere",
    title: "Every device. One cloud.",
    body: "Vogue Cloud syncs in real time across web, iOS, Android, and desktop. Open a file on your phone, continue on your laptop. Your cloud follows you — always up to date, always in reach.",
    visual: (
      <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
        {/* Phone mockup */}
        <div style={{
          width: 130, flexShrink: 0,
          background: "#ffffff", border: "1px solid #ebebeb",
          borderRadius: 20, overflow: "hidden", padding: "10px 8px",
        }} className="mockup-shadow">
          <div style={{ height: 6, width: 40, background: "#ebebeb", borderRadius: 3, margin: "0 auto 10px" }}/>
          {[1,2,3].map(i => (
            <div key={i} style={{ height: 40, background: "#fafafa", border: "1px solid #ebebeb", borderRadius: 8, marginBottom: 8, display: "flex", alignItems: "center", padding: "0 8px", gap: 8 }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: ["#007cf0","#f9cb28","#7928ca"][i-1] + "30" }}/>
              <div style={{ flex: 1 }}>
                <div style={{ height: 5, background: "#ebebeb", borderRadius: 2, marginBottom: 4 }}/>
                <div style={{ height: 4, background: "#f2f2f2", borderRadius: 2, width: "60%" }}/>
              </div>
            </div>
          ))}
        </div>
        {/* Laptop mockup */}
        <div style={{ flex: 1 }}>
          <div style={{
            background: "#ffffff", border: "1px solid #ebebeb",
            borderRadius: 10, overflow: "hidden",
          }} className="mockup-shadow">
            <div style={{ height: 28, background: "#fafafa", borderBottom: "1px solid #ebebeb", display: "flex", alignItems: "center", padding: "0 12px", gap: 5 }}>
              {["#ebebeb","#ebebeb","#ebebeb"].map((c,i) => <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c }}/>)}
            </div>
            <div style={{ padding: 12 }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{ height: 28, background: "#fafafa", border: "1px solid #f2f2f2", borderRadius: 6, marginBottom: 8, display: "flex", alignItems: "center", padding: "0 10px", gap: 8 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 3, background: ["#007cf0","#f9cb28","#7928ca","#50e3c2"][i-1] + "40" }}/>
                  <div style={{ height: 4, background: "#ebebeb", borderRadius: 2, flex: 1 }}/>
                  <div style={{ height: 4, background: "#f2f2f2", borderRadius: 2, width: 30 }}/>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0" }}>
                <span style={{ fontSize: 10, color: "#50e3c2", fontWeight: 600 }}>● Synced</span>
                <span style={{ fontSize: 10, color: "#a1a1a1" }}>Just now</span>
              </div>
            </div>
          </div>
          {/* Tablet base */}
          <div style={{ height: 6, background: "#ebebeb", borderRadius: "0 0 4px 4px", margin: "0 12px" }}/>
        </div>
      </div>
    ),
    flip: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="section" style={{ background: "#fafafa" }}>
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 80px" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>What You Get</div>
          <h2 className="h2" style={{ marginBottom: 16 }}>
            Built for how you actually work
          </h2>
          <p className="lead">
            Every feature in Vogue Cloud is designed around one idea: your files should be effortless to manage.
          </p>
        </div>

        {/* Alternating splits */}
        <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
          {features.map((f, i) => (
            <div key={f.eyebrow} className="feature-split">
              {/* Text */}
              <div style={{ order: f.flip ? 2 : 1 }}>
                <div className="eyebrow" style={{ marginBottom: 14 }}>{f.eyebrow}</div>
                <h3 className="h2" style={{ marginBottom: 16, fontSize: "clamp(26px, 3vw, 36px)" }}>{f.title}</h3>
                <p className="lead" style={{ marginBottom: 28 }}>{f.body}</p>
                <a href="#" className="btn-secondary" style={{ display: "inline-flex" }}>
                  Learn more →
                </a>
              </div>
              {/* Visual */}
              <div style={{ order: f.flip ? 1 : 2 }}>
                {f.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
