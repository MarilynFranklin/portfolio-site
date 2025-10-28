import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© 2024 Software Engineer. Built with React & TypeScript.</p>
      </footer>
    </div>
  );
};

export default Index;
