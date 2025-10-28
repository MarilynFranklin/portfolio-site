import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Self Employed",
    titles: [
      {
        name: "Founder",
        period: "Aug 2023 - Present"
      }
    ],
    description: [
      "Launched my business within the timing constraints of an ongoing patent process",
      "Filed patent for the Undercover Curler™: a tool for haircare secrets management",
      "Developed and launched a new hair styling device that offers quick deployment (takes about 3 minutes to install), is infrastructure agnostic (works with lots of hair types), and secure by default (you won't even know it's there)"
    ]
  },
  {
    company: "Stitch Fix",
    titles: [
      {
        name: "Principal Security Engineer",
        period: "Feb 2022 - Aug 2023"
      }
    ],
    description: [
      "Received excellent reviews for my performance under high-turnover conditions",
      "Maintained security standards for hundreds of applications",
      "Partnered across teams to significantly reduce Verification Attacks",
      "Conducted security reviews for application, platform, and datascience teams",
      "Managed Terraform configuration",
      "Maintained internal CSP (Content Security Policy) ruby gem to mitigate XSS attacks across ruby applications",
      "Maintained WAF (Web Application Firewall) automations for web applications",
      "Provided training for new hires",
      "Managed vendor relationships"
    ]
  },
  {
    company: "Tuft & Needle",
    titles: [
      {
        name: "Principal Software Engineer",
        period: "Feb 2020 - Feb 2022"
      }
    ],
    description: [
      "Streamlined CI pipelines and reduced Docker image sizes by approximately 50%",
      "Improved local Docker development performance by 57% (measured with k6)",
      "Implemented CI build tracing with Honeycomb",
      "Built Nomad, Consul, and Vault clusters in AWS",
      "Set up cluster monitoring using Telegraf",
      "Maintained and provided training for Terraform infrastructure pipelines",
      "Automated Heroku account permissions through customized Heroku Terraform Provider"
    ]
  },
  {
    company: "EAB Global",
    titles: [
      {
        name: "Principal Software Engineer",
        period: "Oct 2019 - Feb 2020"
      },
      {
        name: "Senior Software Engineer",
        period: "July 2017 - Oct 2019"
      }
    ],
    description: [
      "Lead the DevOps/Platform team",
      "Built CI/CD Terraform pipeline in GitLab",
      "Re-platformed a multi-million dollar product supporting 500k unique users per-month to Amazon Web Services",
      "Created provisioning templates for blue/green deploys using Packer, Terraform, and Ansible",
      "Received Development Impact and Value Award for automating the manual deployment of our Single-Sign-On server with a ChatBot interface"
    ]
  },
  {
    company: "The Advisory Board Company",
    titles: [
      {
        name: "Software Engineer",
        period: "July 2015 - July 2017"
      },
      {
        name: "Software Engineer",
        company: "Zeumo Communications",
        note: "Zeumo was acquired by the Advisory Board Company in July 2015",
        period: "Feb 2014 - July 2015"
      }
    ],
    description: [
      "Lead the migration from Google Cloud Platform to Amazon Web Services utilizing Terraform (~ 2016)",
      "Migrated from Heroku to Google Cloud Platform utilizing puppet (~ 2014)",
      "Managed PostgreSQL and Elasticsearch databases along with deployments for Ruby on Rails and NodeJS applications, Vault, Sentry, and log/error aggregators.",
      "Developed APIs for consumption by mobile and web apps"
    ]
  },
  {
    company: "Eliza Brock Software",
    titles: [
      {
        name: "Software Developer",
        note: "Eliza Brock Software was a software consultancy specializing in web applications",
        period: "Dec 2012 - Feb 2014"
      }
    ],
    description: [
      "Interfaced with clients for project proposals and feature planning",
      "Lead the development of an online directory and search engine",
      "Integrated recurring payments into online directory application"
    ]
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
                      {exp.titles.map((title, index) => (
                        <div>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-semibold">
                                {title.name}
                              </h3>
                              <div>
                                <span className="text-primary font-medium mb-3">{title.company || exp.company}</span>
                                {title.note && <p className="italic text-muted-foreground">{title.note}</p>}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">{title.period}</span>
                          </div>
                        </div>
                      ))}
                      <ul className="list-outside list-disc">
                      {exp.description.map((d, index) => (
                        <li key={d} className="text-muted-foreground">{d}</li>
                      ))}
                      </ul>
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
