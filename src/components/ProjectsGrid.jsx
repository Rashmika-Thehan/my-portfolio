import { useState } from 'react';

export default function ProjectsGrid() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack web application with React and Node.js',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/project1.jpg', // Replace with your project image
      gridArea: 'md:col-span-2 md:row-span-2', // Large square
      color: 'from-blue-900/50 to-slate-900/50'
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat with AI-powered responses',
      tags: ['Python', 'FastAPI', 'OpenAI'],
      image: '/project2.jpg',
      gridArea: 'md:col-span-1 md:row-span-1', // Small square
      color: 'from-teal-900/50 to-slate-900/50'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task tracking with teams',
      tags: ['Next.js', 'Prisma', 'PostgreSQL'],
      image: '/project3.jpg',
      gridArea: 'md:col-span-1 md:row-span-1', // Small square
      color: 'from-cyan-900/50 to-slate-900/50'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio with smooth animations',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      image: '/project4.jpg',
      gridArea: 'md:col-span-1 md:row-span-2', // Tall rectangle
      color: 'from-blue-900/50 to-slate-900/50'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualization',
      tags: ['Vue.js', 'Chart.js', 'API'],
      image: '/project5.jpg',
      gridArea: 'md:col-span-2 md:row-span-1', // Wide rectangle
      color: 'from-teal-900/50 to-slate-900/50'
    },
    {
      id: 6,
      title: 'Mobile Banking App',
      description: 'Secure banking application with biometric authentication',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      image: '/project6.jpg',
      gridArea: 'md:col-span-1 md:row-span-1', // Small square
      color: 'from-cyan-900/50 to-slate-900/50'
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </div>

        {/* cSpell:ignore Bento */}
        {/* Bento Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Project 1 - Large Square (2x2) */}
          <div
            className={`
              group relative overflow-hidden rounded-2xl border border-slate-700 
              hover:border-blue-500/50 transition-all duration-500
              bg-linear-to-br ${projects[0].color}
              backdrop-blur-sm shadow-xl hover:shadow-blue-500/20
              md:col-span-2 md:row-span-2 h-100 md:h-auto
            `}
            onMouseEnter={() => setHoveredProject(projects[0].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-slate-900/80">
              {projects[0].image && (
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                />
              )}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />

            {/* Content */}
            <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                {projects[0].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {projects[0].title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                  {projects[0].description}
                </p>

                <div className={`
                  flex items-center gap-2 text-blue-400 font-semibold text-sm
                  transform transition-all duration-300
                  ${hoveredProject === projects[0].id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
                `}>
                  <span>View Project</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/20 to-teal-500/20 blur-xl" />
            </div>
          </div>

          {/* Project 2 - Small Square (1x1) */}
          <div
            className={`
              group relative overflow-hidden rounded-2xl border border-slate-700 
              hover:border-blue-500/50 transition-all duration-500
              bg-linear-to-br ${projects[1].color}
              backdrop-blur-sm shadow-xl hover:shadow-blue-500/20
              h-70 md:h-auto
            `}
            onMouseEnter={() => setHoveredProject(projects[1].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 bg-slate-900/80">
              {projects[1].image && (
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                {projects[1].tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {projects[1].title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                  {projects[1].description}
                </p>
                <div className={`flex items-center gap-2 text-blue-400 font-semibold text-sm transform transition-all duration-300 ${hoveredProject === projects[1].id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                  <span>View Project</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/20 to-teal-500/20 blur-xl" />
            </div>
          </div>

          {/* Project 3 - Small Square (1x1) */}
          <div
            className={`
              group relative overflow-hidden rounded-2xl border border-slate-700 
              hover:border-blue-500/50 transition-all duration-500
              bg-linear-to-br ${projects[2].color}
              backdrop-blur-sm shadow-xl hover:shadow-blue-500/20
              h-70 md:h-auto
            `}
            onMouseEnter={() => setHoveredProject(projects[2].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 bg-slate-900/80">
              {projects[2].image && (
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                {projects[2].tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {projects[2].title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                  {projects[2].description}
                </p>
                <div className={`flex items-center gap-2 text-blue-400 font-semibold text-sm transform transition-all duration-300 ${hoveredProject === projects[2].id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                  <span>View Project</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/20 to-teal-500/20 blur-xl" />
            </div>
          </div>

          {/* Project 4 - Tall Rectangle (1x2) */}
          <div
            className={`
              group relative overflow-hidden rounded-2xl border border-slate-700 
              hover:border-blue-500/50 transition-all duration-500
              bg-linear-to-br ${projects[3].color}
              backdrop-blur-sm shadow-xl hover:shadow-blue-500/20
              md:row-span-2 h-100 md:h-auto
            `}
            onMouseEnter={() => setHoveredProject(projects[3].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 bg-slate-900/80">
              {projects[3].image && (
                <img
                  src={projects[3].image}
                  alt={projects[3].title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                {projects[3].tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {projects[3].title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                  {projects[3].description}
                </p>
                <div className={`flex items-center gap-2 text-blue-400 font-semibold text-sm transform transition-all duration-300 ${hoveredProject === projects[3].id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                  <span>View Project</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/20 to-teal-500/20 blur-xl" />
            </div>
          </div>

          {/* Project 5 - Wide Rectangle (2x1) */}
          <div
            className={`
              group relative overflow-hidden rounded-2xl border border-slate-700 
              hover:border-blue-500/50 transition-all duration-500
              bg-linear-to-br ${projects[4].color}
              backdrop-blur-sm shadow-xl hover:shadow-blue-500/20
              md:col-span-2 h-70 md:h-auto
            `}
            onMouseEnter={() => setHoveredProject(projects[4].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 bg-slate-900/80">
              {projects[4].image && (
                <img
                  src={projects[4].image}
                  alt={projects[4].title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                {projects[4].tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {projects[4].title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                  {projects[4].description}
                </p>
                <div className={`flex items-center gap-2 text-blue-400 font-semibold text-sm transform transition-all duration-300 ${hoveredProject === projects[4].id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                  <span>View Project</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/20 to-teal-500/20 blur-xl" />
            </div>
          </div>

          {/* Project 6 - Small Square (1x1) */}
          <div
            className={`
              group relative overflow-hidden rounded-2xl border border-slate-700 
              hover:border-blue-500/50 transition-all duration-500
              bg-linear-to-br ${projects[5].color}
              backdrop-blur-sm shadow-xl hover:shadow-blue-500/20
              h-70 md:h-auto
            `}
            onMouseEnter={() => setHoveredProject(projects[5].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 bg-slate-900/80">
              {projects[5].image && (
                <img
                  src={projects[5].image}
                  alt={projects[5].title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                {projects[5].tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {projects[5].title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                  {projects[5].description}
                </p>
                <div className={`flex items-center gap-2 text-blue-400 font-semibold text-sm transform transition-all duration-300 ${hoveredProject === projects[5].id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                  <span>View Project</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/20 to-teal-500/20 blur-xl" />
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}