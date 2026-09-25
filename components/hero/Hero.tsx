export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden pb-16 pt-32"
    >
      <div className="container-main relative z-10">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-white/30" />

          <span className="eyebrow">Bengaluru / India</span>
        </div>

        <h1 className="max-w-[1200px] text-[clamp(4rem,12vw,12rem)] font-medium leading-[0.78] tracking-[-0.075em]">
          CHARAN
          <br />
          <span className="text-white/35">M.</span>
        </h1>

        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/10 pt-6 md:flex-row">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              Software Developer
            </p>

            <p className="mt-2 text-sm text-white/40">
              Full Stack / AI Automation / Connected Systems
            </p>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/45">
            I build digital products and connected systems where software,
            hardware and intelligent automation meet.
          </p>
        </div>
      </div>
    </section>
  );
}
