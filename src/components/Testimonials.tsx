import React, { useState } from 'react';


interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'David Wilson',
    role: 'Freelance Client',
    company: 'TechVentures Inc.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6970c8a99e4ef2eb1ce0384f_1768999243699_9a3239e9.jpg',
    quote: "Abdullah delivered the project professionally and improved our website speed significantly. He was responsive, communicative, and went above and beyond to ensure our satisfaction. Highly recommended for WordPress and Shopify development!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'InnovateLabs',
    image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/381ea973208b5883ccf1cd92d6e4555a-1570317254894/5354bc44-324a-4456-9c8b-f9e072c86bcd.jpeg',
    quote: "So far the best price-quality ratio that I found on Fiver for Elementor! It shows in his work that he has good knowledge of the tool and does not get lost in the design details.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Freelance Client',
    company: 'Corpboot',
    image: 'https://d64gsuwffb70l.cloudfront.net/6970c8a99e4ef2eb1ce0384f_1768999243875_6c7e0f11.jpg',
    quote: "Excellent WordPress and Shopify developer with strong Elementor skills. He understands custom development, design implementation, and troubleshooting very well, while delivering clean, responsive, and professional websites with great attention to detail.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Mitchell Park',
    role: 'Project Manager',
    company: 'Shopify Solutions',
    image: 'https://d64gsuwffb70l.cloudfront.net/6970c8a99e4ef2eb1ce0384f_1768999244996_51193879.jpg',
    quote: "Strong Shopify developer with solid theme customization skills and quick problem-solving ability, delivering clean and reliable solutions.",
    rating: 5,
  },
];

const educationData = [
  {
    date: "June 15, 2018 - Appyling",
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

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
        <section id="testimonials" className="ms-experience pt-20">
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
    <section id="testimonials" className="py-24 bg-[#1a1f36] hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some of my clients have to say about working with me.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative bg-[#1e2340] rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-indigo-500/20">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl text-gray-200 leading-relaxed mb-8">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-500/30"
                />
                <div>
                  <div className="text-white font-semibold text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-[#1e2340] hover:bg-[#232848] rounded-full text-gray-400 hover:text-white transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-indigo-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-[#1e2340] hover:bg-[#232848] rounded-full text-gray-400 hover:text-white transition-all duration-200"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Client Logos */}
        {/* <div className="mt-20">
          <p className="text-center text-gray-500 text-sm mb-8">Trusted by companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-50">
            {['TechVentures', 'InnovateLabs', 'DesignStudio', 'CloudScale', 'DataFlow', 'NextGen'].map(
              (company, index) => (
                <div
                  key={index}
                  className="text-gray-400 font-bold text-lg sm:text-xl tracking-wider hover:text-gray-300 transition-colors"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div> */}
      </div>
    </section>
    </>
  );
};

export default Testimonials;
