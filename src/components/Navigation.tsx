import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={cn(
          'fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-full transition-all duration-300 hidden md:block',
          isScrolled
            ? 'bg-card/90 shadow-elevated backdrop-blur-lg'
            : 'bg-card/70 shadow-soft backdrop-blur-md'
        )}
      >
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  activeSection === item.href.slice(1)
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50 flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className={cn(
            'p-3 rounded-full transition-all duration-200',
            isScrolled
              ? 'bg-card/90 shadow-elevated backdrop-blur-lg'
              : 'bg-card/70 shadow-soft backdrop-blur-md'
          )}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            'p-3 rounded-full transition-all duration-200',
            isScrolled
              ? 'bg-card/90 shadow-elevated backdrop-blur-lg'
              : 'bg-card/70 shadow-soft backdrop-blur-md'
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-all duration-300 md:hidden',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-2">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={cn(
                  'transition-all duration-300',
                  isMobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'px-6 py-3 rounded-full text-lg font-medium transition-all duration-200',
                    activeSection === item.href.slice(1)
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
