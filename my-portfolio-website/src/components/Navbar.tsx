import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { navItems, personalInfo } from '../data/portfolioData';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--border))]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <a
            id="brand-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif text-lg font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
          >
            {personalInfo.shortName}
          </a>

          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                id={`nav-${item.label.toLowerCase()}`}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              id="theme-toggle-btn"
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            <Button
              id="mobile-menu-toggle-btn"
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-foreground cursor-pointer"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div id="mobile-menu-overlay" className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="absolute top-16 left-0 right-0 bg-card border-b border-border px-6 py-4 flex flex-col gap-1 shadow-md"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                id={`mobile-nav-${item.label.toLowerCase()}`}
                onClick={() => scrollToSection(item.href)}
                className="text-base font-medium text-foreground hover:text-accent py-3 text-left border-b border-border last:border-0 transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
