import { credentials } from "@/data/credentials";

export default function Credentials() {
  return (
    <section className="section section-border">
      <div className="container-main">
        <span className="eyebrow">04 / Credentials</span>

        <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
          Learning in public.
        </h2>

        <div className="mt-16">
          {credentials.map((credential, index) => (
            <div
              key={`${credential.title}-${index}`}
              className="grid gap-4 border-t border-white/10 py-7 md:grid-cols-[120px_1fr_1fr]"
            >
              <span className="font-mono text-xs text-white/30">
                {credential.year}
              </span>

              <div>
                <h3 className="text-lg text-white/85">{credential.title}</h3>

                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/30">
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
