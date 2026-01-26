import React from 'react';

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'AWS / Cloud', level: 78 },
];

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Git', icon: '📦' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'Tailwind', icon: '💨' },
];

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '15+', label: 'Awards Won' },
];

interface AboutProps {
  profileImage: string;
}

const About: React.FC<AboutProps> = ({ profileImage }) => {
  return (
    <section id="about" className="py-24 bg-[#161929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Passionate About Creating
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combining technical expertise with creative vision to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Bio & Image */}
          <div>
            <div className="relative mb-8">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Alex Chen working"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-600/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-600/20 rounded-2xl -z-10" />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Hello! I'm Alex Chen
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a full-stack developer and UI/UX designer based in San Francisco with over 5 years 
                of experience creating digital products that make a difference. I specialize in building 
                scalable web applications and crafting intuitive user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in tech started with a curiosity about how things work, which led me to 
                pursue a degree in Computer Science. Since then, I've had the privilege of working 
                with startups, agencies, and Fortune 500 companies, helping them bring their visions to life.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or sharing knowledge through my blog and tech talks.
              </p>

              {/* Download Resume Button */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
                <a
                  href="mailto:alex@example.com"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:bg-indigo-500/10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Me
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div className="space-y-10">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-[#1e2340] rounded-2xl text-center hover:bg-[#232848] transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills Progress Bars */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Core Skills</h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-indigo-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Grid */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Technologies I Use</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-[#1e2340] rounded-xl hover:bg-[#232848] hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    <span className="text-2xl mb-2">{tech.icon}</span>
                    <span className="text-gray-300 text-xs text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
