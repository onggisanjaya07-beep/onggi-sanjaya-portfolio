import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          About Me
        </h2>

        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>
            After graduating from{' '}
            <span className="font-medium text-foreground">
              SMK Bhakti Insani Bogor
            </span>{' '}
            with a focus on Software Engineering, I decided to pursue my passion
            for programming. I enrolled in a coding bootcamp at{' '}
            <span className="font-medium text-foreground">
              Cronos Studio Indonesia
            </span>{' '}
            and learned{' '}
            <span className="font-medium text-foreground">
              full-stack web development
            </span>
            .
          </p>

          <p>
            <em className="not-italic text-foreground">
              My favorite part of programming is the problem-solving aspect.
            </em>{' '}
            I love the feeling of finally figuring out a solution to a complex
            problem. My core stack is{' '}
            <span className="font-medium text-foreground">
              React.js, Next.js, TypeScript, and Golang
            </span>
            . I am also familiar with Drupal CMS development and DevOps tools
            like Jenkins.
          </p>

          <p>
            Currently, I'm working at{' '}
            <span className="font-medium text-foreground">
              PT Bank Rakyat Indonesia (BRI)
            </span>{' '}
            as a Frontend Engineer, contributing to the development of banking
            applications and internal dashboards. I'm always eager to learn new
            technologies and take on challenging projects.
          </p>
        </div>
      </div>
    </section>
  );
};
