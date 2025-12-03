import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen gradient-hero flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="relative inline-block mb-8 animate-fade-up">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-elevated border-4 border-card animate-float">
            <img
              src={profilePhoto}
              alt="Onggi Sanjaya - Frontend Engineer"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="absolute -bottom-2 -right-2 text-4xl md:text-5xl animate-wave"
            role="img"
            aria-label="wave"
          >
            👋
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Hello, <span className="text-gradient">Onggi Sanjaya</span>
          <br />
          I'm a{' '}
          <span className="text-foreground">Frontend Engineer</span>
          <br />
          with{' '}
          <span className="text-primary">2+ years</span> of experience
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          I enjoy building <em className="text-foreground not-italic font-medium">sites & apps</em>.
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
          className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 gap-2 shadow-soft hover:shadow-elevated transition-shadow"
          >
            <a href="#contact">
              Contact Me Here
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 gap-2"
          >
            <a href="/CV_Onggi_Sanjaya.pdf" download>
              Download CV
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
