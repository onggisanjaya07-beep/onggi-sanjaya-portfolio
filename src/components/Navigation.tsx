import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

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

  return (
    <nav
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-full transition-all duration-300',
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
      </ul>
    </nav>
  );
};
