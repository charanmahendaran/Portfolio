export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-main flex flex-col justify-between gap-4 text-xs uppercase tracking-[0.14em] text-white/35 md:flex-row">
        <span>Charan M</span>
        <span>Software / AI / Connected Systems</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
