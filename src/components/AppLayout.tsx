import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

const profileImage = '/images/prof.png';

const AppLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scroll navigation
  const handleNavigate = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ['home', 'projects', 'about', 'testimonials', 'blog', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1f36]">
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(30px, 10px) scale(1.05);
          }
        }
        
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1f36;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #6366f1;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #818cf8;
        }
      `}</style>

      {/* Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} profileImage={profileImage} />

        {/* Projects Section */}
        <Projects />

        {/* About Section */}
        <About profileImage={profileImage} />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Blog Section */}
        <Blog />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default AppLayout;
