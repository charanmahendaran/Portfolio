export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-[64px]"
    >
      <div className="container-main flex min-h-[calc(100svh-64px)] w-full flex-col">
        {/* Top metadata */}

        <div className="flex items-center justify-between pt-8 md:pt-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/40" />

            <span className="eyebrow">Bengaluru / India</span>
          </div>

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-white/20 sm:block">
            2026 / Portfolio
          </span>
        </div>

        {/* Main hero composition */}

        <div className="flex flex-1 items-start pt-[clamp(45px,7vh,80px)] pb-12 md:items-start">
          <div className="grid w-full items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(520px,1.05fr)] md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(600px,1.05fr)] lg:gap-16">
            {/* Identity */}

            <div className="min-w-0 pt-[clamp(70px,11vh,130px)]">
              <p className="mb-7 text-[10px] uppercase tracking-[0.2em] text-white/35">
                Software Developer
              </p>

              <h1 className="display-xl max-w-[900px]">
                CHARAN
                <br />
                <span className="text-white/25">M.</span>
              </h1>

              <div className="mt-8 max-w-[620px]">
                <p className="text-sm leading-7 text-white/40">
                  Full Stack
                  <span className="mx-2 text-white/15">/</span>
                  AI Automation
                  <span className="mx-2 text-white/15">/</span>
                  Connected Systems
                </p>
              </div>
            </div>

            {/* Reserved visual area — 18:16 / 9:8 */}

            <div className="-mt-[clamp(0px,2vh,100px)] flex justify-end">
              <div className="aspect-[9/7] w-full max-w-[760px] border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
