export default function Footer() {
  return (
    <footer className="bg-charcoal text-plaster/60 py-8 px-6 font-mono text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} 021 Projects. Built right, finished right.</span>
        <span>Thulani.  Roodeport 1724 · Johannesburg</span>
      </div>
    </footer>
  );
}