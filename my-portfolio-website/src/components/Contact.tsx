import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { contactData, personalInfo } from '../data/portfolioData';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'mail':
        return <Mail className="w-5 h-5 text-accent" />;
      case 'phone':
        return <Phone className="w-5 h-5 text-accent" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-accent" />;
      case 'github':
        return <Github className="w-5 h-5 text-accent" />;
      default:
        return <Mail className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="contact" className="py-24 px-6 section-divider bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
            06 — Contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base">
            I'm open to internship opportunities, collaborative projects, and conversations about
            software engineering and emerging technologies. Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-16 items-start">
          {/* Contact Details Column */}
          <div className="space-y-4">
            {contactData.map((item, index) => {
              const cardContent = (
                <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 shadow-xs hover:shadow-md hover:border-accent/40 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    {getIcon(item.iconType)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-foreground font-medium truncate">{item.value}</p>
                  </div>
                  {item.external && (
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                  )}
                </div>
              );

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="block cursor-pointer"
                >
                  {cardContent}
                </a>
              ) : (
                <div key={index}>{cardContent}</div>
              );
            })}
          </div>

          {/* Quick Contact Card Column */}
          <div>
            <div className="bg-card border border-border rounded-xl p-8 shadow-md">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                Ready to work together?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Whether you have an internship opportunity, a project idea, or just want to talk
                tech — I'd love to hear from you. My inbox is always open.
              </p>

              <div className="space-y-3">
                <Button
                  id="contact-send-email-btn"
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold cursor-pointer"
                >
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Send an Email
                  </a>
                </Button>

                <div className="flex gap-3">
                  <Button
                    id="contact-linkedin-btn"
                    asChild
                    variant="outline"
                    className="flex-1 border-border hover:bg-muted font-medium cursor-pointer"
                  >
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>

                  <Button
                    id="contact-github-btn"
                    asChild
                    variant="outline"
                    className="flex-1 border-border hover:bg-muted font-medium cursor-pointer"
                  >
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
