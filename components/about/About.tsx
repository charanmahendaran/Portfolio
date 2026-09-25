export default function About() {
  return (
    <section id="about" className="section min-h-[100svh]">
      <div className="container-main">
        <span className="eyebrow">07 / About</span>

        <div className="mt-12 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Curious
            <br />
            by default.
          </h2>

          <div className="max-w-2xl">
            <p className="text-2xl leading-[1.35] tracking-[-0.025em] text-white/80 md:text-4xl">
              I enjoy building things that sit between technology and experience
              — from full-stack applications and AI workflows to embedded
              systems and connected devices.
            </p>

            <p className="body-text mt-10">
              My background in Electronics and Communication Engineering gave me
              an interest in both hardware and software. Today, I&apos;m moving
              deeper into software development, full-stack Java, frontend
              experiences and intelligent automation.
            </p>

            <p className="body-text mt-6">
              I like engaging problems, learning quickly and figuring out how
              different pieces of a system can work together efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
