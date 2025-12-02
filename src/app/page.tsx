import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import StudyNote from "@/components/StudyNote";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="study-note">
        <StudyNote />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
