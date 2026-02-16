import { useState } from 'react';

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard = ({ project, isLarge, hoveredProject, setHoveredProject }) => (
  <div className={`
      group relative overflow-hidden rounded-xl border border-slate-700 
      hover:border-slate-600 transition-all duration-200
      bg-gradient-to-br ${project.color}
      backdrop-blur-sm shadow-xl hover:shadow-2xl
      hover:scale-[1.02] hover:-translate-y-1
      ${project.gridArea} ${isLarge ? 'min-h-[350px] md:min-h-[400px]' : 'min-h-[280px]'}
    `}
    onMouseEnter={() => setHoveredProject(project.id)}
    onMouseLeave={() => setHoveredProject(null)}
  >
    {/* Background Image */}
    <div className="absolute inset-0 bg-slate-900/50">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
        />
      )}
    </div>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

    {/* Content */}
    <div className="relative h-full flex flex-col">
      {/* Tags at top */}
      <div className={`${isLarge ? 'p-4 md:p-6' : 'p-4'} pb-0`}>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 text-xs font-medium text-blue-100 bg-blue-500/40 backdrop-blur-sm rounded-full border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Spacer to push content to bottom */}
      <div className="flex-grow" />

      {/* Title, Description & Links at bottom */}
      <div className={`${isLarge ? 'p-4 md:p-6' : 'p-4'} pt-3`}>
        <div className="space-y-2">
          <h3 className={`${isLarge ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} font-bold text-white group-hover:text-blue-400 transition-colors duration-200`}>
            {project.title}
          </h3>
          <p className={`text-gray-400 ${isLarge ? 'text-sm md:text-base' : 'text-xs md:text-sm'} line-clamp-2 group-hover:text-gray-300 transition-colors duration-200`}>
            {project.description}
          </p>

          {/* Links */}
          <div className="flex items-center gap-3 pt-1.5">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                text-gray-300 hover:text-white transition-all duration-200
                transform
                ${hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
              `}
              aria-label="View on GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold text-xs
                transform transition-all duration-200
                ${hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
              `}
            >
              <span>View Project</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function ProjectsGrid() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'GreenAid',
      description: 'Community driven platform for plant-disease diagnosis',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/projects/project1.jpeg',
      github: 'https://github.com/Rashmika-Thehan/GreenAid',
      gridArea: 'md:col-span-2 md:row-span-2',
      color: 'from-blue-900/50 to-slate-900/50'
    },
    {
      id: 2,
      title: 'AI Article Summarizer',
      description: 'Chrome extension summarizing websites articles/paragraphs',
      tags: ['JavaScript', 'MistralAPI', 'CSS'],
      image: '/projects/project2.png',
      github: 'https://github.com/Rashmika-Thehan/AI_Article_Summerizer',
      gridArea: 'md:col-span-1 md:row-span-1',
      color: 'from-teal-900/50 to-slate-900/50'
    },
    {
      id: 3,
      title: 'RTCODE',
      description: 'Landing Page with a 3D interactive model',
      tags: ['Spline', 'React', 'TailwindCSS'],
      image: '/projects/project3.png',
      github: 'https://github.com/Rashmika-Thehan/3D_application',
      gridArea: 'md:col-span-1 md:row-span-1',
      color: 'from-cyan-900/50 to-slate-900/50'
    },
    {
      id: 4,
      title: 'SmartCart',
      description: 'Daraz Review Analyzer Chrome Extension',
      tags: ['React', 'TailwindCSS', 'MistralAPI'],
      image: '/projects/project4.png',
      github: 'https://github.com/Rashmika-Thehan/SmartCart',
      gridArea: 'md:col-span-1 md:row-span-2',
      color: 'from-blue-900/50 to-slate-900/50'
    },
    {
      id: 5,
      title: 'Metro Fitness',
      description: 'Gym Workout Generation Application',
      tags: ['React', 'TailwindCSS'],
      image: '/projects/project5.png',
      github: 'https://github.com/Rashmika-Thehan/metro-fitness',
      gridArea: 'md:col-span-2 md:row-span-1',
      color: 'from-teal-900/50 to-slate-900/50'
    },
    {
      id: 6,
      title: 'Movie Search',
      description: 'Simple Application for Search Movies Using an API',
      tags: ['React','CSS'],
      image: '/projects/project6.png',
      github: 'https://github.com/Rashmika-Thehan/Movie-search',
      gridArea: 'md:col-span-1 md:row-span-1',
      color: 'from-cyan-900/50 to-slate-900/50'
    },
  ];

  return (
    <section id="projects" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project} 
              isLarge={index === 0}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}