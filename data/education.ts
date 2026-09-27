export type Education = {
  institution: string;
  degree: string;
  period: string;
  score: string;
  description: string;
};

export const education: Education[] = [
  {
    institution: "Global Academy of Technology",
    degree: "B.E. Electronics & Communication Engineering",
    period: "2022 — 2026",
    score: "CGPA 9.18",
    description:
      "Bachelor of Engineering in Electronics & Communication Engineering.",
  },
  {
    institution: "Shree Bhagawan Mahaveer Jain College",
    degree: "PUC — PCMB",
    period: "2020 — 2022",
    score: "82.66%",
    description:
      "Pre-University Course with Physics, Chemistry, Mathematics and Biology.",
  },
  {
    institution: "Oxford English School",
    degree: "ICSE",
    period: "2010 — 2020",
    score: "83.16%",
    description: "Secondary school education under the ICSE curriculum.",
  },
];
