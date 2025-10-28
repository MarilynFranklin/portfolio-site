import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center hover:shadow-card transition-all animate-scale-in">
            <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:contact@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              contact@example.com
            </a>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-card transition-all animate-scale-in" style={{ animationDelay: "100ms" }}>
            <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              +1 (555) 555-5555
            </a>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-card transition-all animate-scale-in" style={{ animationDelay: "200ms" }}>
            <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">
              San Francisco, CA
            </p>
          </Card>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Mail className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
