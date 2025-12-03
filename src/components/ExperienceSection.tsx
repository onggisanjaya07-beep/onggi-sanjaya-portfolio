import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface TimelineItem {
  type: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  location?: string;
  period: string;
  description?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    type: 'work',
    title: 'Frontend Engineer',
    organization: 'PT Bank Rakyat Indonesia',
    location: 'Jakarta, Indonesia',
    period: 'Sep 2022 – Present',
    description: [
      'Contributing to BRIAPI Dashboard development using Next.js, Redux, and TypeScript',
      'Developing banking services with Drupal CMS and Golang (Gin, Fiber)',
      'Implementing CI/CD pipelines using Jenkins for microservices',
      'Working with PostgreSQL for secure data management',
    ],
  },
  {
    type: 'education',
    title: 'Bootcamp Frontend Engineer',
    organization: 'Cronos Studio Indonesia',
    location: 'Depok, Indonesia',
    period: 'Aug 2021 – Sep 2022',
    description: ['Intensive bootcamp covering fundamental frontend engineering concepts'],
  },
  {
    type: 'education',
    title: 'Software Engineering',
    organization: 'SMK Bhakti Insani Bogor',
    location: 'Bogor, Indonesia',
    period: 'Mar 2016 – 2019',
    description: ['Vocational high school specializing in software development'],
  },
  {
    type: 'certification',
    title: 'Certifications',
    organization: 'Dicoding Indonesia',
    period: 'Various',
    description: [
      'Pemrograman Web',
      'Frontend Development',
      'React.js Development',
    ],
  },
];

const getIcon = (type: TimelineItem['type']) => {
  switch (type) {
    case 'work':
      return <Briefcase className="w-5 h-5" />;
    case 'education':
      return <GraduationCap className="w-5 h-5" />;
    case 'certification':
      return <Award className="w-5 h-5" />;
  }
};

const getIconBg = (type: TimelineItem['type']) => {
  switch (type) {
    case 'work':
      return 'bg-primary text-primary-foreground';
    case 'education':
      return 'bg-accent text-accent-foreground';
    case 'certification':
      return 'bg-muted text-muted-foreground';
  }
};

export const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className={cn(
            'font-display text-3xl md:text-4xl font-bold text-center mb-4 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          Experience & Education
        </h2>
        <p
          className={cn(
            'text-muted-foreground text-center mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          My professional journey and educational background.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'relative pl-16 transition-all duration-500',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-3 w-6 h-6 rounded-full flex items-center justify-center ${getIconBg(
                    item.type
                  )}`}
                >
                  {getIcon(item.type)}
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display font-bold text-lg">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {item.organization}
                      </p>
                      {item.location && (
                        <p className="text-sm text-muted-foreground">
                          {item.location}
                        </p>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>

                  {item.description && (
                    <ul className="mt-4 space-y-2">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
