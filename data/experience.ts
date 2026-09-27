export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
};

export const experience: Experience[] = [
  {
    company: "Learner's Byte Global Info Vision",
    role: "AI Intern",
    period: "JAN 2026 — MAY 2026",
    description:
      "Worked with generative AI tools, automation workflows and AI-assisted application development.",
    responsibilities: [
      "Worked with generative AI tools including ChatGPT, Gemini, Ideogram, Kling AI and Perchance AI.",
      "Built and explored automation workflows using n8n.",
      "Applied AI-assisted development approaches to application development.",
    ],
  },

  {
    company: "Tap Academy",
    role: "Fullstack Web Development",
    period: "JUL 2026 — PRESENT",
    description:
      "Currently pursuing full-stack web development training with hands-on work across Java, backend technologies, databases and frontend development.",
    responsibilities: [
      "Core Java including OOP, Collections, Exception Handling, Multithreading and Java 8 features.",
      "Advanced Java including JDBC, J2EE and Servlets, along with Spring and Hibernate.",
      "Database development using MySQL and frontend development with responsive UI design.",
      "Developing an Online Food Delivery application as a capstone project.",
    ],
  },
];
