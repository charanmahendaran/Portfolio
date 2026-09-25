export default function Statement() {
  return (
    <section
      id="statement"
      className="section flex min-h-[100svh] items-center"
    >
      <div className="container-main">
        <span className="eyebrow">01 / Statement</span>

        <div className="mt-12 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">
              Designing
              <br />
              for purpose
              <br />
              &amp; scale.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-xl leading-[1.45] tracking-[-0.02em] text-white/55 md:text-3xl">
              I enjoy turning engaging problems into useful digital products,
              efficient systems and experiences that have a reason to exist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
