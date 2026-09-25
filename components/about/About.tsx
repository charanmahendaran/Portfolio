export default function About() {
  return (
    <section id="about" className="section section-border">
      <div className="container-main">
        <span className="eyebrow">05 / About</span>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.5fr]">
          <h2 className="text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Curious by
            <br />
            default.
          </h2>

          <div className="max-w-2xl">
            <p className="text-2xl leading-[1.35] tracking-[-0.025em] text-white/80 md:text-4xl">
              I enjoy building things that sit between technology and experience
              — from full-stack applications and AI workflows to embedded
              systems and connected devices.
            </p>

            <p className="body-text mt-10">
              My background in Electronics and Communication Engineering gave me
              an interest in both hardware and software. Today, my focus is
              moving deeper into software development, full-stack Java, frontend
              experiences and intelligent automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
