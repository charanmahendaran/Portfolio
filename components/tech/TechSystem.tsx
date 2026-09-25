export default function TechSystem() {
  const categories = [
    {
      number: "01",
      name: "Languages",
      technologies: ["Java", "Python", "C", "C++", "Embedded C"],
    },
    {
      number: "02",
      name: "Frontend",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Next.js"],
    },
    {
      number: "03",
      name: "Backend",
      technologies: ["Java", "JDBC", "REST APIs", "Node.js"],
    },
    {
      number: "04",
      name: "Database",
      technologies: ["MySQL", "PostgreSQL", "SQL", "SQLite"],
    },
    {
      number: "05",
      name: "AI / Automation",
      technologies: ["n8n", "Gemini API", "OpenCV", "TensorFlow Lite"],
    },
    {
      number: "06",
      name: "Embedded / IoT",
      technologies: ["ESP32", "ESP32-CAM", "Arduino", "MQTT", "ROS2"],
    },
  ];

  return (
    <section id="stack" className="section min-h-[120svh]">
      <div className="container-main w-full">
        {/* Section header */}
        <div className="flex items-start justify-between gap-8">
          <span className="eyebrow">02 / The Stack</span>

          <span className="eyebrow text-white/35">06 Categories</span>
        </div>

        {/* Statement */}
        <div className="mt-[clamp(80px,12vh,160px)]">
          <h2 className="stack-title text-left">
            Technology
            <br />
            is a tool.
            <br />
            <span className="text-white/30">The system is the skill.</span>
          </h2>
        </div>

        {/* Technology system */}
        <div className="mt-[clamp(140px,16vh,240px)] pb-[clamp(60px,7vh,120px)]">
          <div className="border-t border-white/10">
            {categories.map((category) => (
              <div
                key={category.number}
                className="grid grid-cols-[64px_180px_1fr] items-start gap-5 border-b border-white/10 py-5 md:grid-cols-[80px_220px_1fr] md:gap-6 md:py-6"
              >
                {/* Number */}
                <span className="eyebrow text-white/35">{category.number}</span>

                {/* Category */}
                <span className="text-[15px] font-medium tracking-[-0.02em] text-white/80 md:text-base">
                  {category.name}
                </span>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-sm tracking-[-0.01em] text-white/50 transition-colors duration-300 hover:text-white md:text-base"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
