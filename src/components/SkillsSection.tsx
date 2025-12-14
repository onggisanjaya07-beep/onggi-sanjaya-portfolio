import { 
  Code2, 
  Database, 
  GitBranch, 
  TestTube, 
  Gauge, 
  Users 
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Vue.js',
      'Redux',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend & Database',
    icon: <Database className="w-6 h-6" />,
    skills: ['Golang', 'Gin', 'Fiber', 'PostgreSQL', 'SQL Server', 'Drupal CMS'],
  },
  {
    title: 'Version Control',
    icon: <GitBranch className="w-6 h-6" />,
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jenkins CI/CD'],
  },
  {
    title: 'Testing',
    icon: <TestTube className="w-6 h-6" />,
    skills: ['Jest', 'Enzyme', 'Cypress', 'Selenium', 'Postman'],
  },
  {
    title: 'Performance',
    icon: <Gauge className="w-6 h-6" />,
    skills: ['Lighthouse', 'Web Vitals', 'Code Splitting', 'Lazy Loading'],
  },
  {
    title: 'Collaboration',
    icon: <Users className="w-6 h-6" />,
    skills: ['Jira', 'Microsoft Teams', 'Google Workspace', 'Agile/Scrum'],
  },
];

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={cn(
            'font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          Skills & Tools
        </h2>
        <p
          className={cn(
            'text-sm sm:text-base text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          Technologies and tools I use to bring ideas to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={cn(
                'bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft hover:shadow-card transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-display font-semibold text-sm sm:text-base">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-secondary text-secondary-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
