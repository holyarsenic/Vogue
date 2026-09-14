"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What file types can I upload?",
    a: "Vogue Cloud supports all file types with no format restrictions — images (JPG, PNG, WEBP, GIF, SVG, RAW), documents (PDF, DOCX, XLSX, PPTX, TXT), videos (MP4, MOV, AVI, MKV), archives (ZIP, RAR, TAR.GZ), code files, design files (Figma, Sketch, XD), and more. Individual file size limit is 50 GB on Plus and Pro.",
  },
  {
    q: "Is the 5 GB free plan really forever?",
    a: "Yes — genuinely free, no time limit, no credit card. You keep your 5 GB as long as your account is active. We will never convert it into a trial or lock you out without 30 days notice.",
  },
  {
    q: "Can people without a Vogue Cloud account access shared files?",
    a: "Yes. Shared links are accessible in any browser — no account required. On Plus and Pro plans you can also require a password before the link resolves, set an expiry date, and disable direct downloads.",
  },
  {
    q: "How is my data encrypted?",
    a: "Files are encrypted with AES-256 at rest and protected by TLS 1.3 in transit. Pro plan users can enable client-side (zero-knowledge) encryption, which means your files are encrypted before they leave your device — even we cannot read them.",
  },
  {
    q: "Can I restore deleted or overwritten files?",
    a: "On the Free plan, deleted files stay in Trash for 30 days. On Plus and Pro plans, you get full version history — restore any previous version of a file from the last 90 days, and recover deleted files within 180 days.",
  },
  {
    q: "How do I upgrade, downgrade, or cancel?",
    a: "Everything is self-serve from your account settings. Upgrades take effect immediately (prorated billing). Downgrades apply at the end of the billing cycle. Cancellation is instant — you keep access until your period ends, and we export your data on request.",
  },
  {
    q: "Do you have desktop or mobile apps?",
    a: "Yes — Vogue Cloud has native apps for macOS, Windows, iOS, and Android. The desktop app provides selective sync (choose which folders sync locally) and offline access. Mobile apps support background sync and camera roll backup.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.22s ease", flexShrink: 0 }}>
      <path d="M4 6l4 4 4-4" stroke="#8f8f8f" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section" style={{ background: "#ffffff", borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
          {/* Left: sticky heading */}
          <div style={{ position: "sticky", top: 80 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>FAQ</div>
            <h2 className="h2" style={{ marginBottom: 20 }}>Questions we get a lot</h2>
            <p className="lead" style={{ marginBottom: 32 }}>
              Can&apos;t find what you&apos;re looking for? Our support team is one message away.
            </p>
            <a href="#" className="btn-secondary" style={{ display: "inline-flex" }}>
              Contact Support →
            </a>
          </div>

          {/* Right: accordion */}
          <div style={{ border: "1px solid #ebebeb", borderRadius: 16, overflow: "hidden", background: "#fafafa" }}>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #ebebeb" : "none" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%", padding: "20px 24px",
                      background: isOpen ? "#ffffff" : "transparent",
                      border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      gap: 16, textAlign: "left",
                      transition: "background 0.15s",
                    }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#171717", lineHeight: "21px" }}>
                      {faq.q}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </button>
                  <div className={`accordion-body${isOpen ? " open" : ""}`}>
                    <p style={{ padding: "0 24px 20px", fontSize: 14, color: "#4d4d4d", lineHeight: "22px", margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
