import img1 from "../assets/project-1.jpg";
import img2 from "../assets/project-2.jpg";
import img3 from "../assets/project-3.jpg";

const images = [img1, img2, img3];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-plaster py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-ochre text-sm uppercase tracking-[0.2em] mb-2">Our work</p>
        <h2 className="text-3xl md:text-4xl font-900 mb-12">On site</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden bg-charcoal/5">
              <img src={src} alt={`021 Projects site work ${i + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          ))}
        </div>
        <p className="font-mono text-xs text-slate mt-8">
          Accredited applicators: Plascon · Dulux · Cemcrete · Terraco · Vandex
        </p>
      </div>
    </section>
  );
}