import { projects } from "@/data/projects";

export default function ProjectSection() {
  return (
    <section id="work" className="section">
      <div className="container-main w-full">
        {/* Section header */}
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="eyebrow">03 / Selected Work</span>

            <h2 className="work-title mt-[clamp(40px,6vh,80px)]">
              Things I&apos;ve built.
            </h2>
          </div>

          <span className="eyebrow mb-2 text-white/35">
            {String(projects.length).padStart(2, "0")} Projects
          </span>
        </div>

        {/* Project list */}
        <div className="mt-[clamp(70px,10vh,140px)]">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group border-t border-white/10 py-[clamp(50px,6vw,90px)]"
            >
              <div className="grid grid-cols-[64px_1fr] gap-6 md:grid-cols-[80px_0.8fr_1.4fr_120px] md:gap-8">
                {/* Number */}
                <div>
                  <span className="eyebrow text-white/35">
                    {project.number}
                  </span>
                </div>

                {/* Project identity */}
                <div>
                  <h3 className="text-3xl font-medium tracking-[-0.045em] text-white md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    {project.category}
                  </p>
                </div>

                {/* Description + technologies */}
                <div className="mt-6 md:mt-0">
                  <p className="max-w-2xl text-base leading-7 tracking-[-0.015em] text-white/55 md:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white/40"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status + links */}
                <div className="mt-6 flex flex-col items-start gap-3 md:mt-0 md:items-end">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-white/30">
                    {project.status}
                  </span>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[0.12em] text-white transition-colors hover:text-white/55"
                    >
                      Live ↗
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[0.12em] text-white transition-colors hover:text-white/55"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
