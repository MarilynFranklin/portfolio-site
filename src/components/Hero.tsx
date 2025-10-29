import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Gravatar from "react-gravatar"

const Hero = () => {
  return (
    <section className="mt-6 min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <img 
          src="/placeholder.svg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20">
          <Gravatar
            email="marilyn.j.franklin@gmail.com"
            className="w-full h-full object-cover opacity-7"
          />
          <AvatarFallback>YN</AvatarFallback>
        </Avatar>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Marilyn Franklin
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
          Software Engineer & Founder
        </p>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Principal Security Engineer with 10+ years of experience leading infrastructure hardening, threat mitigation, and secure platform architecture across AWS, Terraform, and CI/CD ecosystems.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="group">
            <a href="#experience">View My Work</a>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Download Resume
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/MarilynFranklin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border transition-all hover:scale-110 hover:shadow-glow"
          >
            <Github className="h-5 w-5" />
          </a>
          {/* <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border transition-all hover:scale-110 hover:shadow-glow"
          >
            <Linkedin className="h-5 w-5" />
          </a> */}
          <a
            href="mailto:marilyn.franklin@proton.me"
            className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border transition-all hover:scale-110 hover:shadow-glow"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
