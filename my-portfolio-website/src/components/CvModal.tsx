import React from 'react';
import { Download, Printer, X } from 'lucide-react';
import { generateCvHtml, personalInfo } from '../data/portfolioData';
import { Button } from './ui/Button';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    const iframe = document.getElementById('cv-print-frame') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } else {
      window.print();
    }
  };

  const handleDownloadHtml = () => {
    const html = generateCvHtml();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_${personalInfo.fullName.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="cv-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-4xl bg-card border border-border rounded-xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40">
          <div>
            <h3 className="font-serif font-bold text-foreground text-lg">Curriculum Vitae</h3>
            <p className="text-xs text-muted-foreground">{personalInfo.fullName}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              id="cv-modal-print-btn"
              size="sm"
              variant="outline"
              onClick={handlePrint}
              className="gap-1.5 cursor-pointer text-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </Button>
            <Button
              id="cv-modal-download-btn"
              size="sm"
              onClick={handleDownloadHtml}
              className="gap-1.5 cursor-pointer text-xs bg-primary text-primary-foreground"
            >
              <Download className="w-3.5 h-3.5" />
              Download HTML
            </Button>
            <Button
              id="cv-modal-close-btn"
              size="icon"
              variant="ghost"
              onClick={onClose}
              className="w-8 h-8 rounded-full text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* CV iframe preview */}
        <div className="flex-1 bg-white overflow-hidden relative">
          <iframe
            id="cv-print-frame"
            srcDoc={generateCvHtml()}
            title="CV Preview"
            className="w-full h-[72vh] border-0"
          />
        </div>
      </div>
    </div>
  );
};

export const triggerCvPrintOrOpen = (onOpenModalFallback: () => void) => {
  try {
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(generateCvHtml());
      win.document.close();
      win.focus();
      setTimeout(() => {
        try {
          win.print();
        } catch {
          // ignore error if print dialog blocked
        }
      }, 600);
      return;
    }
  } catch {
    // blocked popup in sandboxed iframe
  }
  onOpenModalFallback();
};
