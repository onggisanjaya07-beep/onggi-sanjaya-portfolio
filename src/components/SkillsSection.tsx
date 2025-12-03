import { 
  Code2, 
  Database, 
  GitBranch, 
  TestTube, 
  Gauge, 
  Users 
} from 'lucide-react';

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
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Skills & Tools
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-display font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
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
