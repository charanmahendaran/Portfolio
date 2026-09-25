import type { Metadata } from "next";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charan M — Software Developer",
  description:
    "Portfolio of Charan M — software developer building full-stack applications, AI-powered systems, and connected engineering projects.",
  keywords: [
    "Charan Mahendaran",
    "Charan M",
    "Software Developer",
    "Full Stack Developer",
    "Java Developer",
    "React Developer",
    "AI",
    "IoT",
  ],
  authors: [{ name: "Charan Mahendaran" }],
  openGraph: {
    title: "Charan M — Software Developer",
    description: "Software, AI, automation and connected systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
