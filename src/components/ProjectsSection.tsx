import { ExternalLink } from 'lucide-react';
import projectBriapi from '@/assets/project-briapi.jpg';
import projectNeo from '@/assets/project-neo.jpg';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: 'BRIAPI Dashboard',
    description:
      'Contributed to the development of BRIAPI Dashboard at Bank Rakyat Indonesia, adding new features and fixing UI bugs for the banking API management platform.',
    image: projectBriapi,
    tags: ['Next.js', 'Redux', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'Neo Production',
    description:
      'Official website for an Event Organizer company specializing in tour packages across Indonesia. Built as a full-stack project with modern web technologies.',
    image: projectNeo,
    tags: ['React.js', 'Node.js', 'Tailwind CSS', 'REST API'],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div
      className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 bg-card rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          My Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project has helped
          me grow as a developer and solve real-world problems.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
