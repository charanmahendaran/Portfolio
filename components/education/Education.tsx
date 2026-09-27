import { education } from "@/data/education";

export default function Education() {
  const [degree, puc, school] = education;

  return (
    <section id="education" className="section">
      <div className="container-main w-full">
        {/* Section heading */}
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="eyebrow">05 / Education</span>

            <h2 className="work-title mt-[clamp(40px,6vh,80px)] whitespace-nowrap text-[clamp(3.25rem,8vw,8rem)]">
              Where I&apos;ve studied.
            </h2>
          </div>

          <span className="eyebrow mb-2 hidden text-white/35 sm:block">
            03 Qualifications
          </span>
        </div>

        {/* Bento grid */}
        <div className="mt-[clamp(70px,10vh,140px)] grid gap-3 md:grid-cols-12">
          {/* B.E. */}
          <article className="border border-white/10 p-6 md:col-span-7 md:min-h-[420px] md:p-7 lg:p-8">
            {/* Category + Year */}
            <div className="flex items-center justify-between gap-6">
              <span className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                Undergraduate
              </span>

              <span className="shrink-0 font-mono text-[10px] tracking-[0.12em] text-white/40">
                {degree.period}
              </span>
            </div>

            {/* Education */}
            <div className="mt-7">
              <h3 className="max-w-[850px] text-4xl font-medium leading-[0.92] tracking-[-0.055em] text-white md:text-5xl lg:text-6xl">
                {degree.institution}
              </h3>

              <p className="mt-4 max-w-2xl text-xs uppercase leading-5 tracking-[0.12em] text-white/40 md:text-sm">
                {degree.degree}
              </p>
            </div>

            {/* Result */}
            <div className="mt-12">
              <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                Result
              </span>

              <p className="mt-1 text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">
                {degree.score}
              </p>
            </div>
          </article>

          {/* PUC */}
          <article className="border border-white/10 p-6 md:col-span-5 md:min-h-[420px] md:p-7 lg:p-8">
            {/* Category + Year */}
            <div className="flex items-center justify-between gap-6">
              <span className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                Pre-University
              </span>

              <span className="shrink-0 font-mono text-[10px] tracking-[0.12em] text-white/40">
                {puc.period}
              </span>
            </div>

            {/* Education */}
            <div className="mt-7">
              <h3 className="max-w-[650px] text-3xl font-medium leading-[0.92] tracking-[-0.05em] text-white md:text-4xl lg:text-5xl">
                {puc.institution}
              </h3>

              <p className="mt-4 text-xs uppercase leading-5 tracking-[0.12em] text-white/40">
                {puc.degree}
              </p>
            </div>

            {/* Result */}
            <div className="mt-12">
              <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                Result
              </span>

              <p className="mt-1 text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">
                {puc.score}
              </p>
            </div>
          </article>

          {/* School */}
          <article className="border border-white/10 p-6 md:col-span-12 md:p-7 lg:p-8">
            {/* Category + Year */}
            <div className="flex items-center justify-between gap-6">
              <span className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                Secondary Education
              </span>

              <span className="shrink-0 font-mono text-[10px] tracking-[0.12em] text-white/40">
                {school.period}
              </span>
            </div>

            {/* School information */}
            <div className="mt-7">
              <div className="flex flex-col gap-5 md:flex-row md:items-baseline md:justify-between md:gap-10">
                <h3 className="min-w-0 text-3xl font-medium leading-[0.92] tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
                  {school.institution}
                </h3>

                <div className="flex shrink-0 items-baseline gap-3 md:gap-4">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                    Result
                  </span>

                  <span className="text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl lg:text-4xl">
                    {school.score}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs uppercase tracking-[0.12em] text-white/40">
                {school.degree}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
