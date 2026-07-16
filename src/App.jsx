import React, { useState, useEffect } from "react";

/**
 * 021 PROJECTS — redesign, elegant pass
 * Cape Town building contractor: painting, waterproofing, ceilings,
 * partitions, flooring/tiling, brick laying. Est. 2013.
 *
 * Direction: quiet, considered, materials-led. A refined serif for
 * personality, restrained copper accent standing in for the trade's
 * own patina, generous whitespace, hairline rules instead of blocks.
 * Services still carry real work-order spec codes — that's genuine
 * to how scopes get labelled on site, not a decorative device.
 */

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');

.f-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
.f-body { font-family: 'Inter', sans-serif; }
.f-mono { font-family: 'IBM Plex Mono', monospace; }

@keyframes lineDraw {
  0% { width: 0; }
  100% { width: 100%; }
}
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
}
.line-draw {
  animation: lineDraw 1.4s cubic-bezier(.65,0,.35,1) 0.3s both;
}
.fade-up {
  animation: fadeUp 0.9s cubic-bezier(.16,1,.3,1) both;
}
`;

const SERVICES = [
  {
    code: "PT — 01",
    name: "Painting",
    desc: "Interior and exterior coating for homes, offices and commercial property, applied by Dulux- and Plascon-accredited painters.",
    img: "/images/services/painting.jpg",
    pattern: {
      backgroundImage:
        "repeating-linear-gradient(115deg, rgba(120,53,15,0.10) 0px, rgba(120,53,15,0.10) 1px, transparent 1px, transparent 20px)",
    },
  },
  {
    code: "WP — 02",
    name: "Waterproofing",
    desc: "Roof, wall and podium waterproofing systems using Vandex and Safeguard membranes, backed by written workmanship guarantees.",
    img: "/images/services/waterproofing.jpg",
    pattern: {
      backgroundImage:
        "repeating-linear-gradient(45deg, rgba(15,118,110,0.09) 0px, rgba(15,118,110,0.09) 1px, transparent 1px, transparent 18px), repeating-linear-gradient(-45deg, rgba(15,118,110,0.09) 0px, rgba(15,118,110,0.09) 1px, transparent 1px, transparent 18px)",
    },
  },
  {
    code: "CL — 03",
    name: "Ceilings",
    desc: "Suspended, rhino board and bulkhead ceilings, plastered and finished flush for a clean, uninterrupted line.",
    img: "/images/services/ceilings.jpg",
    pattern: {
      backgroundImage:
        "linear-gradient(rgba(87,83,78,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(87,83,78,0.14) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    },
  },
  {
    code: "PN — 04",
    name: "Partitions",
    desc: "Drywalling and office partitioning for space reconfigurations, fitted with sound-rated boards where the brief calls for it.",
    img: "/images/services/partitions.jpg",
    pattern: {
      backgroundImage:
        "linear-gradient(90deg, rgba(120,53,15,0.10) 1px, transparent 1px)",
      backgroundSize: "26px 100%",
    },
  },
  {
    code: "FL — 05",
    name: "Flooring & Tiling",
    desc: "Screeding, floor tiling and Cemcrete decorative finishes, laid true and level for domestic and commercial floors.",
    img: "/images/services/flooring.jpg",
    pattern: {
      backgroundImage:
        "linear-gradient(rgba(87,83,78,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(87,83,78,0.14) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
    },
  },
  {
    code: "BR — 06",
    name: "Brick Laying",
    desc: "Structural and face brickwork for extensions, boundary walls and new builds, set out square and true.",
    img: "/images/services/brickwork.jpg",
    pattern: {
      backgroundImage:
        "linear-gradient(rgba(120,53,15,0.10) 1px, transparent 1px)",
      backgroundSize: "100% 14px",
    },
  },
];

/**
 * ImageSlot — drop-in spot for a real project photo.
 * Give it `src` (e.g. "/images/services/painting.jpg") and it will
 * show the photo once one exists at that path. Until then it shows
 * a quiet placeholder with the expected path, so it's obvious where
 * to add photography later — nothing to rewire.
 */
function ImageSlot({ src, alt, pattern, className = "", label }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`relative flex items-end justify-center overflow-hidden bg-stone-200/60 border border-dashed border-stone-400/70 ${className}`}
      >
        <div className="absolute inset-0" style={pattern} />
        <div className="relative flex flex-col items-center gap-2 text-center px-4 pb-5 pt-8">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="text-stone-400"
          >
            <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="8.5" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M21 15.5L15.5 11 6 19" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span className="f-mono text-[10px] text-stone-500 tracking-wide">
            {label || "Photo goes here"}
          </span>
          <span className="f-mono text-[9px] text-stone-400">{src}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

const PILLARS = [
  {
    title: "Responsive",
    body: "We answer the call, price the job quickly and show up when we say we will.",
  },
  {
    title: "Quality",
    body: "Safe working conditions and careful workmanship, checked before we call a job done.",
  },
  {
    title: "Support",
    body: "A dedicated team stays on your project from quote to sign-off, so nothing gets lost.",
  },
];

const BRANDS = [
  "Plascon",
  "Dulux",
  "Cemcrete",
  "Terraco",
  "Vandex",
  "Carboline",
  "Safeguard",
  "Maris",
  "Coprox",
];

const NAV_LINKS = ["Home", "Services", "Gallery", "About", "Contact"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (sent) {
      const t = setTimeout(() => setSent(false), 5000);
      return () => clearTimeout(t);
    }
  }, [sent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="f-body bg-stone-50 text-stone-900 min-h-screen antialiased">
      <style>{FONT_IMPORT}</style>

      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-stone-50/90 backdrop-blur-md border-b border-stone-200"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 border flex items-center justify-center f-display text-xs tracking-wide transition-colors duration-500 ${
                scrolled
                  ? "border-stone-900 text-stone-900"
                  : "border-stone-50 text-stone-50"
              }`}
            >
              021
            </div>
            <span
              className={`f-display text-sm tracking-[0.15em] transition-colors duration-500 ${
                scrolled ? "text-stone-900" : "text-stone-50"
              }`}
            >
              PROJECTS
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`f-mono text-[11px] tracking-widest uppercase transition-colors duration-300 hover:text-amber-800 ${
                  scrolled ? "text-stone-500" : "text-stone-300"
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          <a
            href="tel:0789131494"
            className={`hidden md:inline-flex items-center f-mono text-[11px] tracking-wide px-5 py-2.5 border transition-colors duration-300 ${
              scrolled
                ? "border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50"
                : "border-stone-50/40 text-stone-50 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            078 913 1494
          </a>

          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-stone-900" : "text-stone-50"
            }`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-px bg-current mb-1.5" />
            <div className="w-5 h-px bg-current mb-1.5" />
            <div className="w-5 h-px bg-current" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-stone-50 border-t border-stone-200 px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="f-mono text-xs tracking-widest text-stone-600 uppercase"
              >
                {link}
              </a>
            ))}
            <a href="tel:0789131494" className="f-mono text-xs text-amber-800">
              078 913 1494
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative bg-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(120,53,15,0.25), transparent 60%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 pt-40 pb-20 sm:pt-48 sm:pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-end">
          <div>
            <div className="f-mono text-[11px] tracking-[0.3em] text-amber-700 uppercase mb-8 fade-up">
              Cape Town — Est. 2013
            </div>

            <h1
              className="f-display text-stone-50 font-normal leading-[1.02] tracking-tight text-5xl sm:text-6xl lg:text-7xl fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Built to last,
              <br />
              <span className="italic text-stone-400">finished right.</span>
            </h1>

            <div
              className="h-px bg-amber-700/70 mt-10 mb-10 line-draw"
              style={{ maxWidth: "220px" }}
            />

            <p
              className="f-body font-light text-stone-400 text-base sm:text-lg max-w-lg leading-relaxed fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              A small, highly skilled construction crew handling painting,
              waterproofing, ceilings, partitions, flooring and brickwork —
              for domestic and commercial property across Cape Town.
            </p>

            <div
              className="flex flex-wrap gap-5 mt-12 fade-up"
              style={{ animationDelay: "0.65s" }}
            >
              <a
                href="#contact"
                className="bg-stone-50 hover:bg-amber-700 hover:text-stone-50 text-stone-900 f-body text-sm font-medium px-7 py-4 transition-colors duration-300"
              >
                Get a quote
              </a>
              <a
                href="#gallery"
                className="border border-stone-700 hover:border-stone-400 text-stone-300 hover:text-stone-50 f-body text-sm font-medium px-7 py-4 transition-colors duration-300"
              >
                View our work
              </a>
            </div>
          </div>

          <ImageSlot
            src="/images/hero-site.jpg"
            alt="021 Projects crew on site"
            label="Hero photo — crew or finished job on site"
            pattern={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
            className="w-full aspect-[4/5] fade-up"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 pb-28 sm:pb-36">
          <div
            className="grid grid-cols-3 gap-8 max-w-md fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            {[
              ["12+", "Years on site"],
              ["6", "Trades covered"],
              ["9", "Accredited brands"],
            ].map(([num, label]) => (
              <div key={label} className="border-t border-stone-800 pt-4">
                <div className="f-display text-3xl text-stone-50 font-normal">
                  {num}
                </div>
                <div className="f-mono text-[10px] text-stone-500 uppercase tracking-widest mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <div className="grid sm:grid-cols-[1fr_auto] items-end gap-6 mb-16">
          <div>
            <div className="f-mono text-[11px] tracking-[0.3em] text-amber-800 uppercase mb-4">
              Scope of work
            </div>
            <h2 className="f-display text-4xl sm:text-5xl font-normal tracking-tight">
              Six trades, one crew
            </h2>
          </div>
          <p className="f-body text-stone-500 text-sm max-w-xs leading-relaxed">
            Every job is logged against a trade code, the same way we track
            it on site — so quotes stay specific, not vague.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {SERVICES.map((s) => (
            <div
              key={s.code}
              className="bg-stone-50 p-9 relative overflow-hidden group transition-colors duration-500 hover:bg-white"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={s.pattern}
              />
              <div className="relative">
                <div className="f-mono text-[10px] tracking-[0.2em] text-stone-400 uppercase mb-6">
                  {s.code}
                </div>
                <h3 className="f-display text-2xl font-normal mb-3">{s.name}</h3>
                <p className="f-body text-sm text-stone-500 leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 pb-24 sm:pb-32">
        <ImageSlot
          src="/images/featured-project.jpg"
          alt="Featured 021 Projects job"
          label="Featured project photo — a recent job, wide shot"
          pattern={{
            backgroundImage:
              "linear-gradient(rgba(87,83,78,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(87,83,78,0.14) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          className="w-full aspect-[21/9]"
        />
      </section>

      {/* WHY US */}
      <section className="bg-stone-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
          <div className="f-mono text-[11px] tracking-[0.3em] text-amber-800 uppercase mb-4">
            Why clients stay
          </div>
          <h2 className="f-display text-4xl sm:text-5xl font-normal tracking-tight mb-20 max-w-xl">
            Formed by a small crew who wanted to do it properly
          </h2>

          <div className="grid sm:grid-cols-3 gap-12">
            {PILLARS.map((p, i) => (
              <div key={p.title}>
                <div className="f-display italic text-stone-300 text-4xl mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="f-display text-xl font-normal mb-3">{p.title}</h3>
                <p className="f-body text-sm text-stone-500 leading-relaxed font-light">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITED BRANDS */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-20">
        <div className="f-mono text-[11px] tracking-[0.3em] text-stone-400 uppercase mb-8 text-center">
          Licensed &amp; accredited applicator
        </div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {BRANDS.map((b) => (
            <span key={b} className="f-display text-stone-400 text-lg italic">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <div className="f-mono text-[11px] tracking-[0.3em] text-amber-800 uppercase mb-4">
          Recent work
        </div>
        <h2 className="f-display text-4xl sm:text-5xl font-normal tracking-tight mb-16">
          A look at the finish
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.code}
              className="aspect-[4/3] bg-stone-900 relative overflow-hidden group cursor-default"
            >
              <ImageSlot
                src={s.img}
                alt={`${s.name} project by 021 Projects`}
                label={`${s.name} photo`}
                pattern={{
                  ...s.pattern,
                  filter: "invert(1) brightness(0.9)",
                }}
                className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-6 pointer-events-none">
                <div className="f-mono text-[10px] text-amber-500 tracking-[0.2em] uppercase mb-2">
                  {s.code}
                </div>
                <div className="f-display text-white text-xl font-normal">{s.name}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="f-mono text-[11px] text-stone-400 mt-8 text-center">
          Drop photos into <span className="text-stone-600">/public/images/services/</span> using the filenames above and they'll appear automatically.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-stone-900">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="f-mono text-[11px] tracking-[0.3em] text-amber-700 uppercase mb-4">
              Get in touch
            </div>
            <h2 className="f-display text-4xl sm:text-5xl font-normal tracking-tight text-stone-50 mb-7">
              Tell us about the job
            </h2>
            <p className="f-body text-stone-400 text-sm font-light leading-relaxed mb-14 max-w-sm">
              Send the details and we'll come back with a price. For
              anything urgent, call or WhatsApp directly.
            </p>

            <div className="space-y-8">
              <div>
                <div className="f-mono text-[10px] text-stone-500 uppercase tracking-[0.2em] mb-2">
                  Phone / WhatsApp
                </div>
                <a
                  href="tel:0789131494"
                  className="f-display text-stone-50 text-xl hover:text-amber-600 transition-colors"
                >
                  078 913 1494
                </a>
              </div>
              <div>
                <div className="f-mono text-[10px] text-stone-500 uppercase tracking-[0.2em] mb-2">
                  Email
                </div>
                <a
                  href="mailto:Info@021projects.co.za"
                  className="f-display text-stone-50 text-xl hover:text-amber-600 transition-colors"
                >
                  Info@021projects.co.za
                </a>
              </div>
              <div>
                <div className="f-mono text-[10px] text-stone-500 uppercase tracking-[0.2em] mb-2">
                  Office
                </div>
                <p className="f-display text-stone-50 text-xl">
                  59 51st Street, Thulani, Roodepoort, 1724
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid sm:grid-cols-2 gap-7">
              <div>
                <label className="f-mono text-[10px] text-stone-500 uppercase tracking-[0.2em] block mb-3">
                  Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-stone-700 focus:border-amber-700 outline-none text-stone-50 py-2.5 f-body text-sm font-light transition-colors"
                  required
                />
              </div>
              <div>
                <label className="f-mono text-[10px] text-stone-500 uppercase tracking-[0.2em] block mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-stone-700 focus:border-amber-700 outline-none text-stone-50 py-2.5 f-body text-sm font-light transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label className="f-mono text-[10px] text-stone-500 uppercase tracking-[0.2em] block mb-3">
                Subject
              </label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-transparent border-b border-stone-700 focus:border-amber-700 outline-none text-stone-50 py-2.5 f-body text-sm font-light transition-colors"
              />
            </div>
            <div>
              <label className="f-mono text-[10px] text-stone-500 uppercase tracking-[0.2em] block mb-3">
                Message *
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-stone-700 focus:border-amber-700 outline-none text-stone-50 py-2.5 f-body text-sm font-light resize-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-stone-50 hover:bg-amber-700 hover:text-stone-50 text-stone-900 f-body text-sm font-medium px-7 py-4 transition-colors duration-300"
            >
              Send message
            </button>

            {sent && (
              <p className="f-mono text-xs text-amber-600">
                Message ready — we'll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 border border-stone-700 flex items-center justify-center f-display text-[10px] text-stone-400">
              021
            </div>
            <span className="f-mono text-[11px] text-stone-500">
              © {new Date().getFullYear()} 021 Projects (Pty) Ltd
            </span>
          </div>
          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="f-mono text-[11px] text-stone-500 hover:text-amber-700 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
