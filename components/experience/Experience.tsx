import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section min-h-[100svh]">
      <div className="container-main">
        {/* Section heading */}
        <span className="eyebrow">04 / Experience</span>

        <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
          Where I&apos;ve worked.
        </h2>

        {/* Experience timeline */}
        <div className="relative mt-16 border-t border-white/10 md:mt-24">
          {/* Vertical timeline rail */}
          <div className="absolute bottom-0 left-[5px] top-0 hidden w-px bg-white/10 md:block" />

          {experience.map((item, index) => {
            const isCurrent = index === experience.length - 1;

            return (
              <article
                key={`${item.company}-${item.role}`}
                className="relative grid gap-8 py-[clamp(50px,6vw,90px)] md:grid-cols-[180px_1fr]"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 top-0 hidden h-full md:block">
                  <span
                    className={[
                      "absolute left-0 top-10 z-10 h-[11px] w-[11px] rounded-full border",
                      isCurrent
                        ? "border-white bg-[#0a0a0a] shadow-[0_0_0_4px_#0a0a0a]"
                        : "border-white/25 bg-[#0a0a0a]",
                    ].join(" ")}
                  />

                  {isCurrent && (
                    <span className="absolute left-[3px] top-[43px] z-20 h-[5px] w-[5px] rounded-full bg-white" />
                  )}
                </div>

                {/* Period + status */}
                <div className="pl-8 md:pl-12">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-white/30">
                    {item.period}
                  </span>

                  <div className="mt-4 flex items-center gap-2">
                    <span
                      className={[
                        "h-1.5 w-1.5 rounded-full",
                        isCurrent ? "bg-white" : "bg-white/25",
                      ].join(" ")}
                    />

                    <span
                      className={[
                        "text-[9px] uppercase tracking-[0.15em]",
                        isCurrent ? "text-white/60" : "text-white/25",
                      ].join(" ")}
                    >
                      {isCurrent ? "Currently" : "Previous"}
                    </span>
                  </div>
                </div>

                {/* Experience content */}
                <div>
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
