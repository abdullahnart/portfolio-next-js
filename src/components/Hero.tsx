import React from 'react';

interface HeroProps {
  onNavigate: (section: string) => void;
  profileImage: string;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, profileImage }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[#1a1f36]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-pink-600/20 animate-pulse" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/30 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-indigo-300 text-sm font-medium">Avail for freelance work</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Abdullah Naseem
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-4">
              WordPress & CMS Developer
            </p>
            
            <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              I craft beautiful, user-centric digital experiences that combine stunning visuals 
              with seamless functionality. Let's build something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="group w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
              >
                View My Work
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 border border-gray-600 hover:border-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-indigo-500/10"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-10">
              <a
                href="https://github.com/abdullahnart"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-naseem-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/abdullah.naseem.319/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Dribbble"
              >

                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg>
              </a>
              <a
                href="https://profiles.wordpress.org/abdullahart/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M125.7 233.4L227.2 511.4C156.2 477 107.3 404.2 107.3 320C107.3 289.1 113.9 259.9 125.7 233.4zM463.6 309.3C463.6 283 454.2 264.8 446.1 250.6C435.3 233.1 425.2 218.2 425.2 200.7C425.2 181.1 440 162.9 460.9 162.9C461.8 162.9 462.7 163 463.7 163.1C425.8 128.4 375.4 107.2 320 107.2C245.7 107.2 180.3 145.3 142.2 203.1C147.2 203.3 151.9 203.4 155.9 203.4C178.1 203.4 212.6 200.7 212.6 200.7C224.1 200 225.4 216.9 214 218.2C214 218.2 202.5 219.5 189.7 220.2L267.2 450.6L313.8 311L280.7 220.2C269.2 219.5 258.4 218.2 258.4 218.2C246.9 217.5 248.3 200 259.7 200.7C259.7 200.7 294.8 203.4 315.7 203.4C337.9 203.4 372.4 200.7 372.4 200.7C383.9 200 385.2 216.9 373.8 218.2C373.8 218.2 362.3 219.5 349.5 220.2L426.4 448.9L447.6 378C456.6 348.6 463.6 327.5 463.6 309.3zM323.7 338.6L259.9 524.1C279 529.7 299.1 532.8 320 532.8C344.8 532.8 368.5 528.5 390.6 520.7C390 519.8 389.5 518.8 389.1 517.8L323.7 338.6zM506.7 217.9C507.6 224.7 508.1 231.9 508.1 239.8C508.1 261.4 504.1 285.6 491.9 316L426.9 503.9C490.2 467 532.7 398.5 532.7 320C532.7 283 523.3 248.2 506.7 217.9zM72 320C72 183 183 72 320 72C457 72 568 183 568 320C568 457 457 568 320 568C183 568 72 457 72 320zM556.6 320C556.6 189.3 450.7 83.4 320 83.4C189.3 83.4 83.4 189.3 83.4 320C83.4 450.7 189.3 556.6 320 556.6C450.7 556.6 556.6 450.7 556.6 320z"/></svg>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-sm" />
              <div className="absolute inset-2 rounded-full bg-[#1a1f36]" />
              <img
                src={profileImage}
                alt="Abdullah Naseem"
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-full object-top"
              />
              {/* Floating badges */}
              <div className="absolute -right-4 top-1/4 px-4 py-2 bg-[#1a1f36]/90 backdrop-blur border border-indigo-500/30 rounded-lg shadow-xl">
                <p className="text-indigo-400 text-sm font-semibold">5+ Years</p>
                <p className="text-gray-400 text-xs">Experience</p>
              </div>
              <div className="absolute -left-4 bottom-1/4 px-4 py-2 bg-[#1a1f36]/90 backdrop-blur border border-purple-500/30 rounded-lg shadow-xl">
                <p className="text-purple-400 text-sm font-semibold">100+ Projects</p>
                <p className="text-gray-400 text-xs">Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="z-50 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-400 text-sm">Scroll to explore</span>
        <a className='exp' href = "#experience"><div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-indigo-500 rounded-full animate-bounce" />
        </div></a>
      </div>
    </section>
    
  );
};

export default Hero;
