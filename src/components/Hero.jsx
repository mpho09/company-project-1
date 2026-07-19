export default function Hero() {
  return (
    <section id="home" className="grid md:grid-cols-2 min-h-[85vh]">
      <div className="bg-charcoal text-plaster flex flex-col justify-center px-8 md:px-16 py-20">
        <span className="font-mono text-ochre text-sm uppercase tracking-[0.2em] mb-6">
          Domestic &amp; Commercial Workmanship
        </span>
        <h1 className="text-5xl md:text-6xl font-900 leading-[0.95] mb-6">
          Built right.<br />Finished right.
        </h1>
        <p className="font-body text-plaster/70 max-w-md mb-8 leading-relaxed">
          Painting, waterproofing, ceilings, partitions, flooring, tiling and brick laying —
          delivered by a small, highly skilled crew since 2013.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="bg-ochre text-charcoal font-mono text-sm uppercase px-6 py-3 hover:plaster transition-colors">
            Request a Quote
          </a>
          <a href="#services" className="border border-plaster/30 font-mono text-sm uppercase px-6 py-3 hover:border-ochre hover:text-ochre transition-colors">
            Our Services
          </a>
        </div>
      </div>

      <div className="relative bg-[radial-gradient(circle_at_30%_20%,#FBF9F5,#EFEAE0)] flex items-center justify-center px-8 py-20">
        <div className="bg-paper border border-charcoal/10 shadow-xl p-8 max-w-sm w-full">
          <p className="font-mono text-xs uppercase tracking-widest text-slate mb-4">Company Spec</p>
          <dl className="space-y-4 font-body text-sm">
            <div className="flex justify-between border-b border-charcoal/10 pb-2">
              <dt className="text-slate">Founded</dt><dd className="font-medium">2013</dd>
            </div>
            <div className="flex justify-between border-b border-charcoal/10 pb-2">
              <dt className="text-slate">Based</dt><dd className="font-medium">Thulani.Roodeport &amp; Johannesburg</dd>
            </div>
            <div className="flex justify-between border-b border-charcoal/10 pb-2">
              <dt className="text-slate">Focus</dt><dd className="font-medium">Property renovation &amp; finishing</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate">Priority</dt><dd className="font-medium">Safety on every site</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}