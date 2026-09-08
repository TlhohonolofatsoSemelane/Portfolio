/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { CvModal, triggerCvPrintOrOpen } from './components/CvModal';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleOpenCv = () => {
    triggerCvPrintOrOpen(() => {
      setIsCvModalOpen(true);
    });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-accent/20 selection:text-accent font-sans">
        <Navbar />

        <main id="main-content">
          <Hero onOpenCv={handleOpenCv} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />

        <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
