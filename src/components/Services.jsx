const services = [
  "Painting", "Waterproofing", "Ceilings", "Partitions",
  "Flooring", "Tiling", "Brick Laying",
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-ochre text-sm uppercase tracking-[0.2em] mb-2">What we do</p>
        <h2 className="text-3xl md:text-4xl font-900 mb-12">Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={s}
              className="group bg-paper border border-charcoal/10 p-6 hover:border-ochre transition-colors">
              <span className="font-mono text-xs text-slate">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl mt-2 group-hover:text-ochre transition-colors">{s}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}