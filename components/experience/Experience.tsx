import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section min-h-[100svh]">
      <div className="container-main">
        <span className="eyebrow">04 / Experience</span>

        <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
          Where I&apos;ve worked.
        </h2>

        <div className="mt-16">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="grid gap-8 border-t border-white/10 py-10 md:grid-cols-[180px_1fr]"
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.12em] text-white/30">
                  {item.period}
                </span>
              </div>

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
          ))}
        </div>
      </div>
    </section>
  );
}
