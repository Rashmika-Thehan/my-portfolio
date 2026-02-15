import { useState, useEffect } from 'react';

const roles = ['Full Stack', 'UI/UX Designing', 'Problem Solving', 'Backend Developing'];

export default function PortfolioHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const id = setTimeout(() => setIsVisible(true), 0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(id);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navItems = ['Home', 'Certificates', 'Projects', 'Tech-Stack', 'Contact'];

  return (
    <div 
      id="home"
      className="relative z-10 min-h-screen w-full overflow-hidden bg-linear-to-br from-slate-900 via-gray-900 to-slate-800"
      onMouseMove={handleMouseMove}
    >
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="shrink-0">
              {/* cSpell:ignore Rashmika */}
              <a href="#home" className="text-2xl sm:text-3xl font-bold text-white hover:text-blue-400 transition-all duration-300">
                Rashmika.Dev
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-gray-400 hover:text-blue-400 font-medium transition-colors duration-300 group"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-colors duration-300"
              >
                <span className="sr-only">Open main menu</span>
                {!mobileMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-400 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg font-medium transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 50%)`,
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column - Text content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Hi There,
                  <br />
                  {/* cSpell:ignore Rashmika Thehan */}
                  I'm <span className="text-blue-400">Rashmika Thehan</span>
                </h1>
                <p className="text-2xl sm:text-3xl text-gray-400 font-light">
                  I Am Into <span aria-live="polite" className="text-teal-400 font-semibold">{roles[currentRole]}</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30">
                  <span className="relative z-10">View My Work</span>
                </button>
                
                <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-slate-700 transition-all duration-300 hover:bg-slate-700/50 hover:border-blue-500 hover:scale-105">
                  Get In Touch
                </button>
              </div>

              {/* Social links */}
              <div className="flex gap-4 pt-4">
                {/* Social icons removed as requested */}
              </div>
            </div>

            {/* Right column - Profile Image */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Profile image container */}
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-600 to-teal-600 animate-spin-slow opacity-15 blur-2xl" />
                <div className="absolute -inset-4 rounded-full border-2 border-blue-500/30 animate-pulse" />
                <div className="absolute -inset-8 rounded-full border-2 border-teal-500/20 animate-pulse animation-delay-1000" />
                
                {/* Main image placeholder */}
                <div className="relative aspect-square rounded-full bg-linear-to-br from-blue-600 via-teal-600 to-cyan-700 p-1 animate-float">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden border-4 border-slate-800">
                    {/* Replace with actual image */}
                    <div className="text-9xl">
                        <img src='../public/me.png' alt="Profile" />
                    </div>
                  </div>
                </div>

                {/* Floating skill badges */}
                <div className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/50 shadow-lg shadow-blue-500/20 animate-float animation-delay-500">
                  <span className="text-white font-semibold text-sm">React</span>
                </div>
                <div className="absolute top-1/4 -left-8 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-teal-500/50 shadow-lg shadow-teal-500/20 animate-float animation-delay-1000">
                  <span className="text-white font-semibold text-sm">Python</span>
                </div>
                <div className="absolute bottom-12 -right-8 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/50 shadow-lg shadow-cyan-500/20 animate-float animation-delay-1500">
                  <span className="text-white font-semibold text-sm">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-600">
          <span className="text-sm">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}