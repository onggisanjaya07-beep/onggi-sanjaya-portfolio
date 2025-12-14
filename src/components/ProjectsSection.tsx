import { ExternalLink, Eye } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { ProjectDetailModal } from './ProjectDetailModal';
import projectBriapi from '@/assets/project-briapi.jpg';
import projectNeo from '@/assets/project-neo.jpg';
import projectDevportal from '@/assets/project-devportal.jpg';
import projectOnefis from '@/assets/project-onefis.jpg';
import projectHomecare from '@/assets/project-homecare.jpg';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  fullDescription?: string;
  features?: string[];
  gallery?: string[];
}

const projects: Project[] = [
  {
    title: 'BRIAPI Devportal',
    description:
      'Developer portal for BRIAPI at Bank Rakyat Indonesia, providing comprehensive API documentation, sandbox testing environment, and developer tools for banking integration services.',
    fullDescription:
      'BRIAPI Devportal is the official developer platform for Bank Rakyat Indonesia\'s open banking APIs. The platform enables third-party developers and fintech companies to integrate with BRI\'s banking services through well-documented RESTful APIs.',
    image: projectDevportal,
    tags: ['Next.js', 'TypeScript', 'REST API', 'Drupal'],
    link: 'https://developers.bri.co.id/id',
    features: [
      'Comprehensive API documentation with interactive examples',
      'Sandbox environment for testing integrations',
      'API key management and analytics dashboard',
      'Multi-language SDK support',
    ],
  },
  {
    title: 'Onefis Pertamina',
    description:
      'Enterprise application for PT Pertamina, featuring data visualization dashboards, analytics reporting, and internal operational management tools for the national oil and gas company.',
    fullDescription:
      'Onefis is an enterprise-grade application developed for PT Pertamina, Indonesia\'s national oil and gas company. The platform provides comprehensive data visualization and analytics capabilities for monitoring operational metrics across multiple business units.',
    image: projectOnefis,
    tags: ['React.js', 'TypeScript', 'REST API', 'Chart.js'],
    features: [
      'Real-time data visualization dashboards',
      'Advanced analytics and reporting tools',
      'Role-based access control system',
      'Export capabilities for reports and data',
    ],
  },
  {
    title: 'Homecare',
    description:
      'Healthcare mobile application connecting patients with medical professionals for home care services, featuring appointment booking, real-time tracking, and medical records management.',
    fullDescription:
      'Homecare is a comprehensive healthcare mobile application designed to bridge the gap between patients and medical professionals. The app facilitates home-based medical care services with seamless booking and tracking capabilities.',
    image: projectHomecare,
    tags: ['React Native', 'TypeScript', 'REST API', 'Firebase'],
    features: [
      'Easy appointment booking with healthcare professionals',
      'Real-time tracking of medical staff location',
      'Secure medical records management',
      'In-app chat and video consultation',
    ],
  },
  {
    title: 'BRIAPI Dashboard',
    description:
      'Contributed to the development of BRIAPI Dashboard at Bank Rakyat Indonesia, adding new features and fixing UI bugs for the banking API management platform.',
    fullDescription:
      'BRIAPI Dashboard is an internal management platform for Bank Rakyat Indonesia\'s API services. The dashboard enables API administrators to monitor usage, manage access, and track performance metrics of the banking APIs.',
    image: projectBriapi,
    tags: ['Next.js', 'Redux', 'TypeScript', 'PostgreSQL'],
    features: [
      'API usage monitoring and analytics',
      'User and access management',
      'Performance metrics visualization',
      'Audit logging and reporting',
    ],
  },
  {
    title: 'Neo Production',
    description:
      'Official website for an Event Organizer company specializing in tour packages across Indonesia. Built as a full-stack project with modern web technologies.',
    fullDescription:
      'Neo Production is the official website for an event organizer company that specializes in creating memorable tour packages and events across Indonesia. The platform showcases their services and allows customers to explore and book various tour packages.',
    image: projectNeo,
    tags: ['React.js', 'Node.js', 'Tailwind CSS', 'REST API'],
    features: [
      'Interactive tour package catalog',
      'Online booking and inquiry system',
      'Gallery showcasing past events',
      'Contact and consultation forms',
    ],
  },
];

const ProjectCard = ({ 
  project, 
  index, 
  isVisible, 
  onOpenDetail 
}: { 
  project: Project; 
  index: number; 
  isVisible: boolean;
  onOpenDetail: (project: Project) => void;
}) => {
  return (
    <div
      className={cn(
        'group relative bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
      onClick={() => onOpenDetail(project)}
    >
      {/* Project Image */}
      <div className="relative h-44 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
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
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-card rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        )}
      </div>

      {/* Project Info */}
      <div className="p-4 sm:p-6">
        <h3 className="font-display text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Detail Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetail(project);
          }}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
        >
          <Eye className="w-4 h-4" />
          View Detail
        </button>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        ref={ref as React.RefObject<HTMLElement>}
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className={cn(
              'font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            My Projects
          </h2>
          <p
            className={cn(
              'text-sm sm:text-base text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100 px-2',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            Here are some of the projects I've worked on. Each project has helped
            me grow as a developer and solve real-world problems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index} 
                isVisible={isVisible}
                onOpenDetail={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
