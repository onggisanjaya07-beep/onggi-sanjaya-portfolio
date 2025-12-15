import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import profilePhoto from '@/assets/profile-photo.jpg';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen gradient-hero flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Profile Image */}
        <div className="relative inline-block mb-6 sm:mb-8 animate-fade-up">
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-elevated border-4 border-card animate-float">
            <img
              src={profilePhoto}
              alt="Onggi Sanjaya - Frontend Engineer"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-wave"
            role="img"
            aria-label="wave"
          >
            👋
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-up px-2"
          style={{ animationDelay: '0.1s' }}
        >
          {t.hero.greeting} <span className="text-gradient">Onggi Sanjaya</span>
          <br />
          {t.hero.role}{' '}
          <span className="text-foreground">Frontend Engineer</span>
          <br />
          {t.hero.experience}{' '}
          <span className="text-primary">2+ years</span> of experience
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-up px-2"
          style={{ animationDelay: '0.2s' }}
        >
          {t.hero.description} <em className="text-foreground not-italic font-medium">{t.hero.sitesAndApps}</em>.
          My focus is{' '}
          <a
            href="#skills"
            className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
          >
            React & Next.js
          </a>
          .
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-up px-4"
          style={{ animationDelay: '0.3s' }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-6 sm:px-8 gap-2 shadow-soft hover:shadow-elevated transition-shadow w-full sm:w-auto"
          >
            <a href="#contact">
              {t.hero.contactMe}
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-6 sm:px-8 gap-2 w-full sm:w-auto"
          >
            <a href="/CV_Onggi_Sanjaya.pdf" download>
              {t.hero.downloadCV}
              <Download className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="https://linkedin.com/in/onggi-sanjaya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/onggisanjaya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:onggisanjaya@gmail.com"
            className="p-3 rounded-full bg-card shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
