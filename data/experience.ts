export type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  responsibilities: string[];
};

export const experience: Experience[] = [
  {
    period: "JAN 2026 — MAY 2026",
    role: "AI Intern",
    company: "Learner's Byte Global Info Vision",
    description:
      "Worked with generative AI tools, automation workflows and AI-assisted application development.",
    responsibilities: [
      "Worked with GenAI tools including ChatGPT, Gemini, Ideogram, Kling AI and Perchance AI.",
      "Built and explored n8n workflows for AI-powered automation.",
      "Worked on AI-assisted application development.",
    ],
  },
];
