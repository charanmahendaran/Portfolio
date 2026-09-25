import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/loader/Loader";
import Hero from "@/components/hero/Hero";
import Statement from "@/components/statement/Statement";
import TechSystem from "@/components/tech/TechSystem";
import ProjectSection from "@/components/projects/ProjectSection";
import Credentials from "@/components/credentials/Credentials";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Loader />

      <Navbar />

      <main>
        <Hero />
        <Statement />
        <TechSystem />
        <ProjectSection />
        <Credentials />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
