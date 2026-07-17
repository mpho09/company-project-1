export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="font-mono text-ochre text-sm uppercase tracking-[0.2em] mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-900 mb-8">Let's spec your project</h2>
          <dl className="space-y-6 font-body text-sm">
            <div><dt className="text-slate font-mono uppercase text-xs mb-1">Office</dt>
              <dd>59 51st Street, Thulani, Roodepoort, 1724</dd></div>
            <div><dt className="text-slate font-mono uppercase text-xs mb-1">Phone</dt>
              <dd><a href="tel:0789131494" className="hover:text-ochre">078 913 1494</a></dd></div>
            <div><dt className="text-slate font-mono uppercase text-xs mb-1">Email</dt>
              <dd><a href="mailto:021projectsza@gmail.com" className="hover:text-ochre">021projectsza@gmail.com</a></dd></div>
          </dl>
        </div>

        <form className="bg-paper border border-charcoal/10 p-8 space-y-4">
          <input className="w-full bg-transparent border-b border-charcoal/20 py-2 outline-none focus:border-ochre" placeholder="Name" />
          <input className="w-full bg-transparent border-b border-charcoal/20 py-2 outline-none focus:border-ochre" placeholder="Email" type="email" />
          <input className="w-full bg-transparent border-b border-charcoal/20 py-2 outline-none focus:border-ochre" placeholder="Subject" />
          <textarea className="w-full bg-transparent border-b border-charcoal/20 py-2 outline-none focus:border-ochre" placeholder="Message" rows="4" />
          <button type="submit" className="bg-charcoal text-plaster font-mono text-sm uppercase px-6 py-3 hover:bg-ochre hover:text-charcoal transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}