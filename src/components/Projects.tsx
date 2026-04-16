import React, { useState, useMemo, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import ProjectCard, { Project } from './ProjectCard';
import ProjectModal from './ProjectModal';

const categories = ['All', 'Wordpress', 'Shopify', 'Webflow', 'Wix', 'Custom'];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch projects from Supabase
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) throw error;

        // Transform database fields to match component interface
        const transformedProjects: Project[] = (data || []).map((p) => ({
          id: p.id,
          title: p.title,
          category: p.category,
          description: p.description,
          image: p.image,
          techStack: p.tech_stack,
          liveUrl: p.live_url,
          githubUrl: p.github_url,
        }));

        setProjects(transformedProjects);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const getCategoryCount = (category: string) => {
    return projects.filter((p) => p.category === category).length;
  };

const educationData = [
  {
    date: "June 15, 2017 - 2019",
    title: "Bachelor’s in Commerce (B.Com)",
    sub: "Premier Govt. College",
    description:
      "Completed coursework in accounting, business management, and economics, building a strong foundation in commerce and financial principles. Graduated with honors, demonstrating academic excellence and a commitment to learning.",
    delay: 400,
  },
  {
    date: "June 12, 2015 - 2017",
    title: "Intermediate (H.S.C – Commerce)",
    sub: "Karachi Board",
    description:
      "Focused on core commerce subjects such as accounting, business studies, and economics, gaining strong analytical, financial, and problem-solving skills, with practical understanding of business operations, market dynamics, and economic principles.",
    delay: 600,
  },
  {
    date: "June 1, 2003 - 2014",
    title: "Matriculation (S.S.C – Science)",
    sub: "Bait-us-Salam High School",
    description:
      "Studied science subjects with a focus on Biology, along with Mathematics and General Science, building a strong academic foundation and analytical skills. Completed Matriculation in the Science stream (Biology), preparing for advanced studies in commerce and related fields. Graduated with a solid understanding of scientific principles and critical thinking abilities.",
    delay: 800,
  },
];

const experienceData = [
  {
    date: "July 12, 2023 - Present",
    title: "Al Rehman Technology",
    sub: "Wordpress Developer | CMS Developer",
    description:
      "Developed custom WooCommerce plugins and advanced features (metafields, filters, AJAX search), including discount and wishlist systems. Built and optimized Shopify themes and BigCommerce stores with advanced customization.",
  },
  {
    date: "December 13, 2021 - 2023",
    title: "Proficient Digital",
    sub: "Frontend Developer | CMS Developer",
    description:
      "Developed custom WordPress themes with Elementor, along with theme/plugin customization and advanced HTML/CSS animation-based websites (including Lottie). Also built Shopify stores and scroll-based animated websites in Webflow.",
  },
  {
    date: "July, 2019 - March, 2020",
    title: "PNT Global | Digitonics Labs",
    sub: "Internship | Jr. Developer",
    description:
      "Built and customized WordPress websites with Elementor, Divi, Avada, and WP Bakery, including custom themes, post types, WooCommerce features, payment integrations, and PSD-to-WordPress conversions. Provided client proposals, technical support, QA, speed optimization, and email/template design.",
  },
];

  
  return (
    <>
        <section id="experience" className="ms-experience padding-tb-80">
      <div className="container">
                  <div className="section-title">
            <h2>
              My <span>Resume</span>
            </h2>
            <span className="ligh-title">Achievements</span>
          </div>
        <div className="row">

          {/* Education Column */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="education ms-ex-box m-b-991">
              <h4>Education</h4>
              <ul className="timeline">
                {educationData.map((edu, index) => (
                  <li
                    key={index}
                    className="timeline-item"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay={edu.delay}
                  >
                    <div className="timeline-info">
                      <span>{edu.date}</span>
                    </div>
                    <div className="timeline-content">
                      <h5 className="timeline-title">
                        {edu.title}
                        <span className="sub">- {edu.sub}</span>
                      </h5>
                      <p>{edu.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Experience Column */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="experiense ms-ex-box">
              <h4>Experience</h4>
              <ul className="timeline">
                {experienceData.map((exp, index) => (
                  <li key={index} className="timeline-item">
                    <div className="timeline-info">
                      <span>{exp.date}</span>
                    </div>
                    <div className="timeline-content">
                      <h5 className="timeline-title">
                        {exp.title}
                        <span className="sub">- {exp.sub}</span>
                      </h5>
                      <p>{exp.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="projects" className="py-24 bg-[#1a1f36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated selection of my best work across web development, mobile apps, and brand design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
              {category !== 'All' && (
                <span className="ml-2 text-xs opacity-60">
                  ({getCategoryCount(category)})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
              <p className="text-gray-400">Loading projects...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}

        {/* View All Button */}
        {!loading && !error && projects.length > 0 && (
          <div className="text-center mt-12">
            <button className="group inline-flex items-center gap-2 px-8 py-4 border border-gray-600 hover:border-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-indigo-500/10">
              View All Projects
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
    </>
  );
};

export default Projects;
