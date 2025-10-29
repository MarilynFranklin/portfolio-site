import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skills = {
  "Infrastructure": [ "AWS", "Ansible", "Beats", "CI/CD", "CentOS", "Consul", "Consul Connect", "Debian", "Docker", "ElasticSearch", "GCE", "Golang", "Kibana", "Linux", "Logstash", "NGINX", "Nomad", "Packer", "Puppet", "Redis", "Shell Scripting", "Telegraf", "Terraform", "Terragrunt", "Unix", "Vault", "Waypoint"],
  "Security": ["Bot Management", "Certificate Management", "CSP (Content Security Policy)", "Secrets Management", "WAF (Web Application Firewall)"],
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "ReactNative"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "MySQL", "APIs", "GraphQL", "REST", "Rails", "Ruby"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full development stack with a focus on modern, scalable solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <Card 
              key={category} 
              className="p-6 backdrop-blur-sm bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-card transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="text-sm py-1.5 px-3 hover:bg-primary/10 hover:border-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
