export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-main flex flex-col justify-between gap-4 text-[9px] uppercase tracking-[0.15em] text-white/25 md:flex-row">
        <span>Charan M</span>

        <span>Software / AI / Connected Systems</span>

        <a href="#top" className="transition-colors hover:text-white">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
