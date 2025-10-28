import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <img 
          src="/placeholder.svg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20">
          <AvatarImage src="/placeholder.svg" alt="Your Name" />
          <AvatarFallback>YN</AvatarFallback>
        </Avatar>
        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
          <span className="text-sm font-medium text-primary">Available for opportunities</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Your Name
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
          Software Engineer
        </p>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building elegant solutions with modern technologies. Specialized in full-stack development and scalable architectures.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Download Resume
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border transition-all hover:scale-110 hover:shadow-glow"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border transition-all hover:scale-110 hover:shadow-glow"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:contact@example.com"
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
