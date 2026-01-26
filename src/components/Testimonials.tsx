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
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechVentures Inc.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6970c8a99e4ef2eb1ce0384f_1768999243699_9a3239e9.jpg',
    quote: "Alex transformed our vision into reality with exceptional attention to detail. The web application he built has significantly improved our user engagement and conversion rates. His technical expertise combined with design sensibility is truly rare.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Director',
    company: 'InnovateLabs',
    image: 'https://d64gsuwffb70l.cloudfront.net/6970c8a99e4ef2eb1ce0384f_1768999244750_2f8d3a86.jpg',
    quote: "Working with Alex was an absolute pleasure. He delivered our mobile app ahead of schedule and exceeded all expectations. His proactive communication and problem-solving skills made the entire development process smooth and efficient.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'DesignStudio Co.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6970c8a99e4ef2eb1ce0384f_1768999243875_6c7e0f11.jpg',
    quote: "Alex's brand identity work for our company was nothing short of brilliant. He captured our essence perfectly and created a visual language that resonates with our audience. The attention to detail in every deliverable was impressive.",
    rating: 5,
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CTO',
    company: 'CloudScale Systems',
    image: 'https://d64gsuwffb70l.cloudfront.net/6970c8a99e4ef2eb1ce0384f_1768999244996_51193879.jpg',
    quote: "We hired Alex to rebuild our entire platform, and he delivered an exceptional product. His deep understanding of both frontend and backend technologies, combined with his clean code practices, made him an invaluable partner.",
    rating: 5,
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
    <section id="testimonials" className="py-24 bg-[#1a1f36]">
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
                    {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
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
        <div className="mt-20">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
