import { skills } from "@/data/skills";

export default function TechSystem() {
  return (
    <section id="stack" className="section min-h-[120svh]">
      <div className="container-main">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">02 / The Stack</span>

            <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              The stack.
            </h2>
          </div>

          <p className="body-text max-w-md">
            Software, frontend, backend, automation, embedded systems and
            robotics — the tools I use to build.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group min-h-32 border-b border-r border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.03]"
            >
              <div className="flex h-full flex-col justify-between">
                <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                  {skill.group}
                </span>

                <span className="text-lg text-white/75 transition-transform duration-300 group-hover:translate-x-1">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
