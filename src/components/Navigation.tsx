import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(`#${current}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const closeMobileMenu = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 350);
  };


  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Onggi
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="group relative py-2"
                >
                  <span
                    className={`text-sm font-medium transition-all duration-300 group-hover:text-primary ${
                      activeSection === item.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </span>
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out ${
                      activeSection === item.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                  {/* Glow effect on hover */}
                  <span
                    className={`absolute -inset-x-2 -inset-y-1 rounded-lg bg-primary/0 transition-all duration-300 group-hover:bg-primary/10 ${
                      activeSection === item.href ? 'bg-primary/5' : ''
                    }`}
                  />
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>
              <button
                onClick={openMobileMenu}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Slide & Fade Animation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop with smooth fade */}
          <div
            className={`absolute inset-0 bg-background/90 backdrop-blur-lg transition-opacity duration-300 ease-out ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMobileMenu}
          />

          {/* Slide-in menu panel from right */}
          <div
            className={`absolute top-0 right-0 h-full w-full max-w-sm bg-background/95 backdrop-blur-md shadow-2xl border-l border-border/50 transform transition-all duration-300 ease-out ${
              isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-border/30">
              <span
                className={`text-lg font-semibold text-primary transition-all duration-300 delay-100 ${
                  isAnimating ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                Menu
              </span>
              <button
                onClick={closeMobileMenu}
                className={`p-2 rounded-lg hover:bg-muted transition-all duration-300 ${
                  isAnimating ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
                }`}
                style={{ transitionDelay: isAnimating ? '50ms' : '0ms' }}
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* Navigation Items with staggered slide-in animation */}
            <div className="flex flex-col py-8 px-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left text-xl font-medium py-4 px-4 rounded-lg transition-all duration-300 hover:bg-muted hover:text-primary transform ${
                    activeSection === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground'
                  } ${
                    isAnimating
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{
                    transitionDelay: isAnimating ? `${index * 60 + 100}ms` : '0ms',
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      activeSection === item.href ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`} />
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Footer decoration */}
            <div
              className={`absolute bottom-8 left-0 right-0 px-6 transition-all duration-500 ${
                isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isAnimating ? '400ms' : '0ms' }}
            >
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <p className="text-center text-sm text-muted-foreground mt-4">
                © 2024 Onggi Sanjaya
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
