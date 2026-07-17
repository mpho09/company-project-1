const pillars = [
  { title: "Responsive", body: "Always available with the skills and knowledge to meet any requirement in the construction industry." },
  { title: "Quality", body: "Safe working conditions are a very high priority — for our crew and for your property." },
  { title: "Support", body: "Dedicated staff serve every client's interest, finishing on time and to the required standard." },
];

export default function WhyUs() {
  return (
    <section className="bg-charcoal text-plaster py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-ochre text-sm uppercase tracking-[0.2em] mb-2">Why our service is the best</p>
        <h2 className="text-3xl md:text-4xl font-900 mb-12 max-w-xl">
          A small, highly skilled crew, hands-on since day one.
        </h2>
        <div className="grid md:grid-cols-3 gap-px plaster/10">
          {pillars.map((p) => (
            <div key={p.title} className="bg-charcoal p-8">
              <h3 className="font-display text-xl mb-3 text-ochre">{p.title}</h3>
              <p className="font-body text-plaster/70 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}