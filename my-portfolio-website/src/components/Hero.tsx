import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, typingRoles } from '../data/portfolioData';
import { Button } from './ui/Button';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [imgSrc, setImgSrc] = useState(personalInfo.photoUrl);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targetRole = typingRoles[roleIndex];

    if (isTyping) {
      if (currentText.length < targetRole.length) {
        const timeout = setTimeout(() => {
          setCurrentText(targetRole.slice(0, currentText.length + 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2200);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % typingRoles.length);
        setIsTyping(true);
      }
    }
  }, [currentText, isTyping, roleIndex]);

  const scrollTo = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-20">
      {/* Background radial and grid effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--accent)/0.08),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      <div
        className={`relative z-10 max-w-6xl mx-auto w-full transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Left bio & CTA column */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {personalInfo.status}
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              {personalInfo.name}
              <br />
              <span className="gradient-text">{personalInfo.surname}</span>
            </h1>

            {/* Typing dynamic subtitle */}
            <div className="h-8 flex items-center justify-center md:justify-start mb-4">
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                {currentText}
                <span className="animate-pulse text-accent ml-0.5">|</span>
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <Button
                id="hero-view-projects-btn"
                size="lg"
                onClick={() => scrollTo('#projects')}
                className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold px-7 cursor-pointer"
              >
                View Projects
              </Button>

              <Button
                id="hero-get-in-touch-btn"
                size="lg"
                variant="outline"
                onClick={() => scrollTo('#contact')}
                className="border-border hover:bg-muted font-semibold px-7 cursor-pointer"
              >
                Get in Touch
              </Button>

              <Button
                id="hero-download-cv-btn"
                size="lg"
                variant="outline"
                onClick={onOpenCv}
                className="border-accent/50 hover:bg-accent/10 hover:border-accent font-semibold px-7 gap-2 cursor-pointer text-foreground"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </div>

            {/* Social icons row */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a
                id="hero-github-link"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                id="hero-linkedin-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                id="hero-email-link"
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right photo column */}
          <div className="shrink-0 flex justify-center">
            <div
              id="hero-photo-container"
              className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden border-2 border-accent/20 shadow-[0_0_0_8px_hsl(var(--accent)/0.06),var(--shadow-md)]"
            >
              <img
                id="hero-profile-image"
                src={imgSrc}
                alt={personalInfo.fullName}
                onError={() => {
                  if (imgSrc !== personalInfo.fallbackPhotoUrl) {
                    setImgSrc(personalInfo.fallbackPhotoUrl);
                  }
                }}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Down arrow scroll helper */}
      <button
        id="scroll-to-about-btn"
        onClick={() => scrollTo('#about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
};
