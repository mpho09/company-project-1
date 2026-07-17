import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-plaster/95 backdrop-blur border-b border-charcoal/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-2xl font-900 tracking-tight">
          021<span className="text-ochre">PROJECTS</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wide">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-ochre transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact"
          className="hidden md:inline-block bg-charcoal text-plaster font-mono text-sm uppercase px-5 py-2.5 hover:bg-ochre hover:text-charcoal transition-colors">
          Get a Quote
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-charcoal mb-1.5"></div>
          <div className="w-6 h-0.5 bg-charcoal mb-1.5"></div>
          <div className="w-6 h-0.5 bg-charcoal"></div>
        </button>
      </nav>
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 font-mono text-sm uppercase">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}