export default function About() {
  return (
    <section id="about" className="section min-h-[100svh]">
      <div className="container-main flex min-h-[calc(100svh-200px)] flex-col">
        <span className="eyebrow">07 / About</span>

        <div className="flex flex-1 items-center">
          <div className="grid w-full gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Left */}
            <div>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                Built to engineer
              </span>

              <h2 className="work-title mt-6 max-w-[700px]">
                Curious
                <br />
                by default.
              </h2>
            </div>

            {/* Right */}
            <div className="min-w-0 max-w-4xl">
              {/* Main statement */}
              <p className="text-xl font-medium leading-[1.25] tracking-[-0.035em] text-white/75 md:text-2xl lg:text-3xl">
                From <span className="text-white">hardware-level systems</span>{" "}
                to interactive digital experiences, I build across the layers —
                with my focus now firmly on{" "}
                <span className="text-white">software development</span>, from
                full-stack Java applications to{" "}
                <span className="text-white">AI-driven automation</span>.
              </p>

              {/* Supporting content */}
              <div className="mt-8 max-w-3xl space-y-6">
                <p className="body-text">
                  My foundation in{" "}
                  <span className="text-white/75">
                    Electronics and Communication Engineering
                  </span>{" "}
                  shaped the way I understand technology — how systems connect,
                  communicate and work together.
                </p>

                <p className="body-text">
                  That foundation led me deeper into{" "}
                  <span className="text-white/75">software development</span>,
                  where I&apos;m building with Java, React and modern web
                  technologies while exploring AI and intelligent automation.
                </p>

                <p className="body-text">
                  I&apos;m interested in the space between disciplines —
                  bringing the systems thinking I developed through engineering
                  into software that is useful, interactive and thoughtfully
                  built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
