"use client";
import { useState } from "react";
import Link from "next/link";

const nav = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(250,250,250,0.88)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: "1px solid #ebebeb",
    }}>
      <div className="container" style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
            <path d="M3 12l5-5 4 4 4-4 5 5" stroke="#171717" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 17l5-5 4 4 4-4 5 5" stroke="#171717" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0.35}/>
          </svg>
          <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.03em", color: "#171717" }}>Vogue Cloud</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden md:flex">
          {nav.map(n => (
            <a key={n.label} href={n.href} style={{
              fontSize: 13, color: "#4d4d4d", padding: "5px 12px",
              borderRadius: 9999, textDecoration: "none",
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#f2f2f2"; (e.currentTarget as HTMLElement).style.color = "#171717"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#4d4d4d"; }}
            >{n.label}</a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }} className="hidden md:flex">
          <a href="#" className="btn-nav-ghost">Log In</a>
          <a href="#" className="btn-nav-primary">Get Started Free</a>
        </div>

        {/* Mobile trigger */}
        <button onClick={() => setOpen(v => !v)} className="md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", flexDirection: "column", gap: 5 }}
          aria-label={open ? "Close" : "Menu"}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: 20, height: 1.5, background: "#171717",
              transition: "transform 0.2s, opacity 0.2s",
              transform: open ? (i===0 ? "translateY(6.5px) rotate(45deg)" : i===2 ? "translateY(-6.5px) rotate(-45deg)" : "none") : "none",
              opacity: open && i===1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden" style={{
        maxHeight: open ? 400 : 0, overflow: "hidden",
        transition: "max-height 0.3s ease",
        borderTop: open ? "1px solid #ebebeb" : "none",
        background: "#fafafa",
      }}>
        <div className="container" style={{ paddingTop: 16, paddingBottom: 20, display: "flex", flexDirection: "column", gap: 4 }}>
          {nav.map(n => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)}
              style={{ fontSize: 14, color: "#4d4d4d", padding: "10px 12px", borderRadius: 8, textDecoration: "none", display: "block" }}>
              {n.label}
            </a>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12, paddingTop: 12, borderTop: "1px solid #ebebeb" }}>
            <a href="#" className="btn-nav-ghost" style={{ justifyContent: "center" }}>Log In</a>
            <a href="#" className="btn-nav-primary" style={{ justifyContent: "center" }}>Get Started Free</a>
          </div>
        </div>
      </div>
    </header>
  );
}
