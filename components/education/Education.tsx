import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section min-h-[100svh]">
      <div className="container-main">
        <span className="eyebrow">05 / Education</span>

        <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
          Where I learned.
        </h2>

        <div className="relative mt-16 border-l border-white/10">
          {education.map((item, index) => (
            <article
              key={`${item.institution}-${item.period}`}
              className="relative grid gap-6 pb-14 pl-8 last:pb-0 md:grid-cols-[180px_1fr]"
            >
              <span className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full border border-white/50 bg-[#0a0a0a]" />

              <div>
                <span className="font-mono text-[10px] tracking-[0.12em] text-white/30">
                  {item.period}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-4xl">
                  {item.institution}
                </h3>

                <p className="mt-3 text-sm text-white/45">
                  {item.qualification}
                </p>

                <p className="mt-5 text-[10px] uppercase tracking-[0.15em] text-white/25">
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
