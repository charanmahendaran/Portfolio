export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  status: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "FindMyCrib",
    category: "AI / PRODUCT / WEB",
    description:
      "An AI-powered real-estate platform designed to help users discover properties, understand pricing, compare options and make financially informed decisions.",
    technologies: ["React", "Three.js", "R3F", "n8n", "AI"],
    github: "https://github.com/charanmahendaran/FindMyCrib",
    live: "https://find-my-crib-tau.vercel.app",
    status: "LIVE",
  },
  {
    number: "02",
    title: "Orbit Store",
    category: "FULL STACK / E-COMMERCE",
    description:
      "A full-stack e-commerce platform built around a React frontend, Java backend, REST APIs, JDBC and MySQL.",
    technologies: ["React", "Java", "JDBC", "MySQL", "REST API"],
    status: "IN DEVELOPMENT",
  },
  {
    number: "03",
    title: "Mine-Bot",
    category: "IOT / EMBEDDED / ROBOTICS",
    description:
      "An underground mine monitoring rover combining environmental sensing, live video, Bluetooth control and Telegram-based hazard alerts.",
    technologies: ["ESP32", "ESP32-CAM", "Embedded C", "IoT"],
    github: "https://github.com/charanmahendaran/Major-Project-MineBot",
    status: "FUNCTIONAL",
  },
  {
    number: "04",
    title: "Smart Lock",
    category: "EMBEDDED / IOT",
    description:
      "A connected access-control prototype using ESP32 and Telegram for remote locking and unlocking.",
    technologies: ["ESP32", "Telegram", "IoT"],
    github: "https://github.com/charanmahendaran/Mini-Project-Locking-System",
    status: "ARCHIVE",
  },
  {
    number: "05",
    title: "Samsung RISC-V",
    category: "RISC-V / VLSI",
    description:
      "A six-week RISC-V workshop covering the VSDSquadron Mini, toolchains, synthesis, physical design and machine-code analysis.",
    technologies: ["RISC-V", "Verilog", "VLSI"],
    github: "https://github.com/charanmahendaran/Samsung-RISC-V-Workshop",
    status: "ARCHIVE",
  },
  {
    number: "06",
    title: "ROS2 / TurtleBot",
    category: "ROBOTICS / SIMULATION",
    description:
      "A robotics simulation project exploring ROS2, Linux, package creation and TurtleBot navigation through Gazebo and RViz.",
    technologies: ["ROS2", "Gazebo", "RViz", "Linux"],
    github: "https://github.com/charanmahendaran/ROS2_Workshop_GAT",
    status: "ARCHIVE",
  },
];
