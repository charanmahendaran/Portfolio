import { credentials } from "@/data/credentials";

export default function Credentials() {
  return (
    <section id="credentials" className="section min-h-[120svh]">
      <div className="container-main">
        <span className="eyebrow">06 / Credentials</span>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
            Learning in public.
          </h2>

          <p className="body-text max-w-md">
            Certifications and workshops that have shaped the way I approach
            software, systems and engineering.
          </p>
        </div>

        <div className="mt-16">
          {credentials.map((credential, index) => (
            <div
              key={`${credential.title}-${index}`}
              className="grid gap-5 border-t border-white/10 py-7 md:grid-cols-[100px_1fr_1fr]"
            >
              <span className="font-mono text-xs text-white/25">
                {credential.year}
              </span>

              <div>
                <h3 className="text-lg text-white/85">{credential.title}</h3>

                <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/30">
                  {credential.organization}
                </p>
              </div>

              <p className="text-sm leading-6 text-white/40">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
