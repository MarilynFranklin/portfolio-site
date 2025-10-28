import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Led development of microservices architecture serving 1M+ users. Mentored junior developers and established best practices."
  },
  {
    title: "Full Stack Developer",
    company: "StartUp Inc",
    period: "2020 - 2022",
    description: "Built and maintained web applications using React and Node.js. Reduced page load times by 40% through optimization."
  },
  {
    title: "Software Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Developed client websites and applications. Collaborated with designers to create responsive, user-friendly interfaces."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building impactful products and leading teams across various industries
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="hidden md:flex absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                
                <Card className="ml-0 md:ml-16 p-6 hover:shadow-card transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 md:hidden">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
