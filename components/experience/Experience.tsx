import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section min-h-[100svh]">
      <div className="container-main">
        <span className="eyebrow">04 / Experience</span>

        <h2 className="work-title mt-[clamp(40px,6vh,80px)]">
          Where I&apos;ve worked.
        </h2>

        <div className="relative mt-16 border-t border-white/10 md:mt-24">
          {/* Continuous timeline rail */}
          <div className="absolute bottom-0 left-[8px] top-0 w-px bg-white/10 md:left-[188px]" />

          {experience.map((item, index) => {
            const isCurrent = index === 1;

            return (
              <article
                key={`${item.company}-${item.role}`}
                className="relative grid gap-8 py-[clamp(50px,6vw,90px)] md:grid-cols-[180px_1fr]"
              >
                {/* Timeline marker */}
                <div className="absolute left-[8px] top-[clamp(50px,6vw,90px)] -translate-x-1/2 md:left-[188px]">
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                      isCurrent
                        ? "border-white/80 bg-[#0a0a0a]"
                        : "border-white/20 bg-[#0a0a0a]"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isCurrent ? "bg-white" : "bg-white/20"
                      }`}
                    />
                  </span>
                </div>

                {/* Period */}
                <div className="pl-7 md:pl-0">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-white/30">
                    {item.period}
                  </span>

                  <span
                    className={`mt-3 block text-[9px] uppercase tracking-[0.15em] ${
                      isCurrent ? "text-white/40" : "text-white/20"
                    }`}
                  >
                    {isCurrent ? "Currently" : "Previous"}
                  </span>
                </div>

                {/* Experience content */}
                <div className="pl-7 md:pl-0">
                  <div className="flex flex-col justify-between gap-3 md:flex-row">
                    <div>
                      <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                        {item.role}
                      </h3>

                      <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/30">
                        {item.company}
                      </p>
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.15em] text-white/20">
                      Professional Experience
                    </span>
                  </div>

                  <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45">
                    {item.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-6 text-white/40"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
