import React from 'react'
import HeroSection from '../components/HeroSection'
import CertificatesCarousal from '../components/CertificatesCarousal'
import ProjectsGrid from '../components/ProjectsGrid'

const Home = () => {
  return (
    <div className='relative min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Main Content */}
      <div className='relative z-10'>
        <HeroSection/>
        <CertificatesCarousal/>
        <ProjectsGrid/>
      </div>
    </div>

  )
}

export default Home