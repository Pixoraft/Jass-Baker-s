import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur shadow-xl' : 'bg-white/95 backdrop-blur shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.svg" 
                alt="Jass Baker's Logo" 
                className="h-10 w-auto cursor-pointer"
                onClick={() => window.location.href = "/"}
              />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-[var(--chocolate)] hover:text-[var(--gold)] transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-[var(--chocolate)] hover:text-[var(--gold)] transition-colors duration-300 font-medium"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-[var(--chocolate)] hover:text-[var(--gold)] transition-colors duration-300 font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[var(--chocolate)] hover:text-[var(--gold)] transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--chocolate)] hover:text-[var(--gold)]"
            >
              <i className="fas fa-bars text-xl"></i>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-[var(--chocolate)] hover:text-[var(--gold)] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left px-3 py-2 text-[var(--chocolate)] hover:text-[var(--gold)] transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-3 py-2 text-[var(--chocolate)] hover:text-[var(--gold)] transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-[var(--chocolate)] hover:text-[var(--gold)] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
