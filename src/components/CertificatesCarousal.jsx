import React from 'react';

export default function CertificatesCarousel() {
  
  const certificates = [
    {
      id: 1,
      // cSpell:ignore Multicloud
      title: 'Aviatrix Multicloud Associate',
      image: '/cert1.png', 
    },
    {
      id: 2,
      title: 'Pandas',
      image: '/cert2.png', 
    },
    {
      id: 3,
      title: 'Fortinet Cybersecurity Fundamentals',
      image: '/cert3.png', 
    },
    {
      id: 4,
      title: 'Intermediate Machine Learning',
      image: '/cert4.png', 
    },
    {
      id: 5,
      title: 'AI Data Security Specialist',
      image: '/cert5.png', 
    },
    {
      id: 6,
      title: 'Data Analysis with Python',
      image: '/cert6.jpeg', 
    },
    {
      id: 7,
      title: 'Intro to Machine Learning',
      image: '/cert7.png', 
    },
    {
      id: 8,
      title: 'KodeKloud AWS Basics',
      image: '/cert8.png', 
    },
  ];

  // Duplicate certificates multiple times for truly seamless infinite scroll
  const duplicatedCertificates = [...certificates, ...certificates, ...certificates, ...certificates];

  return (
    <section id="certificates" className="relative py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Infinite Carousel Container */}
        <div className="relative overflow-hidden py-6">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
          
          {/* Infinite Scrolling Track */}
          <div className="flex animate-infiniteScroll">
            {duplicatedCertificates.map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="shrink-0 mx-3 w-95 sm:w-105"
              >
                <div className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-blue-500/20 h-65">
                  {/* Certificate Image */}
                  <div className="h-full flex flex-col items-center justify-center p-3">
                    <div className="w-full h-50 mb-2 overflow-hidden rounded-md bg-slate-900/50">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-200 text-center px-2 line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        .animate-infiniteScroll {
          animation: infiniteScroll 40s linear infinite;
          display: flex;
          width: max-content;
        }

        /* Ensure smooth loop without visible reset */
        .animate-infiniteScroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}