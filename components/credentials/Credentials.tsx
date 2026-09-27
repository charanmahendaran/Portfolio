import { credentials } from "@/data/credentials";

export default function Credentials() {
  return (
    <section id="credentials" className="section">
      <div className="container-main w-full">
        {/* Section heading */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="min-w-0">
            <span className="eyebrow">06 / Credentials</span>

            <h2 className="work-title mt-[clamp(40px,6vh,80px)] whitespace-nowrap">
              Learning in public.
            </h2>
          </div>

          <p className="max-w-[520px] shrink-0 text-sm leading-7 text-white/40 lg:mb-2 lg:w-[32%]">
            Certifications and workshops that have shaped the way I approach
            software, systems and engineering.
          </p>
        </div>

        {/* Credential archive */}
        <div className="mt-[clamp(70px,10vh,140px)] border-t border-white/10">
          {credentials.map((credential) => (
            <article
              key={`${credential.year}-${credential.title}`}
              className="group border-b border-white/10 py-8 transition-colors duration-300 md:py-10 lg:py-11"
            >
              <button
                type="button"
                className="block w-full text-left"
                aria-label={`View ${credential.title}`}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
                  {/* Year */}
                  <div className="shrink-0 lg:w-[90px]">
                    <span className="font-mono text-[10px] tracking-[0.12em] text-white/30 transition-colors duration-300 group-hover:text-white/60">
                      {credential.year}
                    </span>
                  </div>

                  {/* Credential */}
                  <div className="min-w-0 flex-1">
                    <h3 className="max-w-3xl text-2xl font-medium tracking-[-0.035em] text-white transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                      {credential.title}
                    </h3>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/30">
                      {credential.issuer}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 lg:max-w-[420px] lg:justify-end">
                    {credential.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-white/35 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/55"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="hidden shrink-0 lg:block">
                    <span className="inline-flex h-9 w-9 items-center justify-center border border-white/10 text-sm text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-white/30 group-hover:text-white">
                      ↗
                    </span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
