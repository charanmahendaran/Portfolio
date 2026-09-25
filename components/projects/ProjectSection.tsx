import { projects } from "@/data/projects";

export default function ProjectSection() {
  return (
    <section id="work" className="section">
      <div className="container-main">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">03 / Selected Work</span>

            <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              Things I&apos;ve built.
            </h2>
          </div>

          <span className="text-xs uppercase tracking-[0.15em] text-white/30">
            {projects.length.toString().padStart(2, "0")} projects
          </span>
        </div>

        <div className="mt-16">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group border-t border-white/10 py-9 transition-colors duration-300 hover:bg-white/[0.02] md:py-11"
            >
              <div className="grid gap-6 md:grid-cols-[70px_1fr_1.4fr_150px] md:items-start">
                <span className="font-mono text-xs text-white/25">
                  {project.number}
                </span>

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-white/30">
                    {project.category}
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-7 text-white/45">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/10 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-white/35"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 md:items-end">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                    {project.status}
                  </span>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs uppercase tracking-[0.12em] text-white/70 underline underline-offset-4 hover:text-white"
                    >
                      Live ↗
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs uppercase tracking-[0.12em] text-white/40 hover:text-white"
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
