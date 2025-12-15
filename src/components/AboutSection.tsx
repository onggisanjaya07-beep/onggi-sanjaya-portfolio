import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { t } = useLanguage();

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
          {t.about.title}
        </h2>

        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>
            {t.about.paragraph1}{' '}
            <span className="font-medium text-foreground">
              {t.about.school}
            </span>{' '}
            {t.about.paragraph2}{' '}
            <span className="font-medium text-foreground">
              {t.about.bootcamp}
            </span>{' '}
            {t.about.paragraph3}{' '}
            <span className="font-medium text-foreground">
              {t.about.fullstack}
            </span>
            .
          </p>

          <p>
            <em className="not-italic text-foreground">
              {t.about.favoritePart}
            </em>{' '}
            {t.about.coreStack}{' '}
            <span className="font-medium text-foreground">
              React.js, Next.js, TypeScript, and Golang
            </span>
            . I am also familiar with Drupal CMS development and DevOps tools
            like Jenkins.
          </p>

          <p>
            {t.about.currentWork}{' '}
            <span className="font-medium text-foreground">
              {t.about.company}
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
