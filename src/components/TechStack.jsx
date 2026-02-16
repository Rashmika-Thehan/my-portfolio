import React from 'react';

// SVG Logo Components (simplified for badges)
const HTMLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#E34F26">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
  </svg>
);

const JSIcon = () => (
  <span className="text-yellow-400 text-sm font-bold">JS</span>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#61DAFB">
    <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#06B6D4">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#339933">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
  </svg>
);

const ExpressIcon = () => (
  <span className="text-white text-xs font-bold">eX</span>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path fill="#3776AB" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05z"/>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#47A248">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z"/>
  </svg>
);

const SQLIcon = () => (
  <span className="text-white text-xs font-bold">SQL</span>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
  </svg>
);

const LinuxIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.035.218.094.446.182.661.063.174.119.325.227.514.111.164.228.316.35.465.393.49.876.916 1.428 1.266.784.495 1.67.832 2.586 1.036 1.07.238 2.17.337 3.276.337s2.207-.099 3.276-.337c.916-.204 1.802-.541 2.586-1.036.552-.35 1.035-.776 1.428-1.266.121-.149.239-.301.35-.465.107-.189.163-.34.227-.514.088-.215.147-.443.182-.661.123-.805-.009-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021z"/>
  </svg>
);

const CanvaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export default function TechStack() {
  const categories = {
    frontend: {
      label: 'FRONTEND',
      color: 'cyan',
      items: [
        { name: 'HTML', Icon: HTMLIcon, color: 'border-orange-500 text-orange-400' },
        { name: 'JavaScript', Icon: JSIcon, color: 'border-yellow-500 text-yellow-400' },
        { name: 'React.js', Icon: ReactIcon, color: 'border-cyan-500 text-cyan-400' },
        { name: 'Tailwind CSS', Icon: TailwindIcon, color: 'border-teal-500 text-teal-400' },
      ]
    },
    backend: {
      label: 'BACKEND',
      color: 'green',
      items: [
        { name: 'Node.js', Icon: NodeIcon, color: 'border-green-500 text-green-400' },
        { name: 'Express.js', Icon: ExpressIcon, color: 'border-gray-500 text-gray-400' },
      ]
    },
    ml: {
      label: 'MACHINE LEARNING',
      color: 'purple',
      items: [
        { name: 'Python', Icon: PythonIcon, color: 'border-blue-500 text-blue-400' },
      ]
    },
    database: {
      label: 'DATABASE',
      color: 'orange',
      items: [
        { name: 'MongoDB', Icon: MongoIcon, color: 'border-green-500 text-green-400' },
        { name: 'SQL', Icon: SQLIcon, color: 'border-blue-500 text-blue-400' },
      ]
    },
    tools: {
      label: 'TOOLS',
      color: 'purple',
      items: [
        { name: 'GitHub', Icon: GitHubIcon, color: 'border-gray-500 text-gray-400' },
        { name: 'VS Code', Icon: VSCodeIcon, color: 'border-blue-500 text-blue-400' },
        { name: 'Linux', Icon: LinuxIcon, color: 'border-yellow-500 text-yellow-400' },
        { name: 'Canva', Icon: CanvaIcon, color: 'border-purple-500 text-purple-400' },
      ]
    }
  };

  return (
    <section id="tech-stack" className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 pt-8">
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">WHAT I WORK WITH</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Tech Stack
          </h2>
        </div>

        {/* Mobile Layout - Stacked (< md breakpoint) */}
        <div className="block md:hidden space-y-6 max-w-sm mx-auto pb-8">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="flex flex-col items-center gap-2">
              <div className={`px-3 py-1 rounded-full border-2 border-${category.color}-500 bg-gray-900/90 backdrop-blur-sm`}>
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full bg-${category.color}-500`}></div>
                  <span className={`text-${category.color}-400 text-xs font-semibold tracking-wider`}>{category.label}</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {category.items.map((item, i) => (
                  <div key={i} className={`px-2.5 py-1 rounded-full border ${item.color} bg-gray-900/90 backdrop-blur-sm flex items-center gap-1.5`}>
                    <item.Icon />
                    <span className="text-gray-300 text-xs font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Central Badge - Mobile */}
          <div className="flex justify-center pt-4">
            <div className="w-16 h-16 rounded-full border-4 border-cyan-500 bg-gray-950 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-cyan-400 font-bold text-xs tracking-wider">STACK</span>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout - Radial (>= md breakpoint) */}
        <div className="hidden md:block">
          <div className="relative flex items-center justify-center h-[480px]">
            {/* Central Circle */}
            <div className="absolute z-10 w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-cyan-500 bg-gray-950 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-cyan-400 font-bold text-xs lg:text-sm tracking-wider">STACK</span>
            </div>

            {/* Vertical Line */}
            <div className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

            {/* Horizontal Line */}
            <div className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            {/* Frontend - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <div className="px-3 py-1 rounded-full border-2 border-cyan-500 bg-gray-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                  <span className="text-cyan-400 text-xs font-semibold tracking-wider">FRONTEND</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-1.5 max-w-md">
                {categories.frontend.items.map((item, i) => (
                  <div key={i} className={`px-2.5 py-1 rounded-full border ${item.color} bg-gray-900/90 backdrop-blur-sm flex items-center gap-1.5 hover:scale-105 transition-transform duration-200`}>
                    <item.Icon />
                    <span className="text-gray-300 text-xs font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend - Top Right */}
            <div className="absolute top-10 right-2 lg:right-4 flex flex-col items-end gap-2">
              <div className="px-3 py-1 rounded-full border-2 border-green-500 bg-gray-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-green-400 text-xs font-semibold tracking-wider">BACKEND</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                {categories.backend.items.map((item, i) => (
                  <div key={i} className={`px-2.5 py-1 rounded-full border ${item.color} bg-gray-900/90 backdrop-blur-sm flex items-center gap-1.5 hover:scale-105 transition-transform duration-200`}>
                    <item.Icon />
                    <span className="text-gray-300 text-xs font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Machine Learning - Left */}
            <div className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 flex flex-col items-start gap-2">
              <div className="px-3 py-1 rounded-full border-2 border-purple-500 bg-gray-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  <span className="text-purple-400 text-xs font-semibold tracking-wider whitespace-nowrap">MACHINE LEARNING</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                {categories.ml.items.map((item, i) => (
                  <div key={i} className={`px-2.5 py-1 rounded-full border ${item.color} bg-gray-900/90 backdrop-blur-sm flex items-center gap-1.5 hover:scale-105 transition-transform duration-200`}>
                    <item.Icon />
                    <span className="text-gray-300 text-xs font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database - Right */}
            <div className="absolute right-2 lg:right-4 top-1/2 translate-y-6 flex flex-col items-end gap-2">
              <div className="px-3 py-1 rounded-full border-2 border-orange-500 bg-gray-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <span className="text-orange-400 text-xs font-semibold tracking-wider">DATABASE</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                {categories.database.items.map((item, i) => (
                  <div key={i} className={`px-2.5 py-1 rounded-full border ${item.color} bg-gray-900/90 backdrop-blur-sm flex items-center gap-1.5 hover:scale-105 transition-transform duration-200`}>
                    <item.Icon />
                    <span className="text-gray-300 text-xs font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools - Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <div className="flex flex-wrap justify-center gap-1.5 max-w-sm">
                {categories.tools.items.map((item, i) => (
                  <div key={i} className={`px-2.5 py-1 rounded-full border ${item.color} bg-gray-900/90 backdrop-blur-sm flex items-center gap-1.5 hover:scale-105 transition-transform duration-200`}>
                    <item.Icon />
                    <span className="text-gray-300 text-xs font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
              <div className="px-3 py-1 rounded-full border-2 border-purple-500 bg-gray-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  <span className="text-purple-400 text-xs font-semibold tracking-wider">TOOLS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}