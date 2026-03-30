import React from 'react';
import { useState, useRef, useEffect } from "react";
interface FooterProps {
  onNavigate: (section: string) => void;
}


const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  // Toggle panel open/close
  const togglePanel = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };


  // Close panel if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const footerLinks = {
    navigation: [
      { label: 'Home', section: 'home' },
      { label: 'Projects', section: 'projects' },
      { label: 'About', section: 'about' },
      { label: 'Blog', section: 'blog' },
      { label: 'Contact', section: 'contact' },
    ],
    services: [
      { label: 'Web Development', href: '#' },
      { label: 'Mobile Apps', href: '#' },
      { label: 'UI/UX Design', href: '#' },
      { label: 'Brand Identity', href: '#' },
      { label: 'Consulting', href: '#' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '#' },
      { label: 'Free Resources', href: '#' },
      { label: 'Newsletter', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )},
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )},
    { name: 'Dribbble', href: 'https://dribbble.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" clipRule="evenodd"/>
      </svg>
    )},
    { name: 'Twitter', href: 'https://twitter.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )},
  ];

  return (
    <footer className="bg-[#12151f] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => onNavigate('home')}
              className="text-white font-bold text-2xl tracking-tight hover:text-indigo-400 transition-colors mb-4 block"
            >
              <span className="text-indigo-500">A</span>lex.dev
            </button>
            <p className="text-gray-400 mb-6">
              Full-stack developer and UI/UX designer crafting beautiful digital experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 hover:bg-indigo-500/20 rounded-lg text-gray-400 hover:text-indigo-400 transition-all duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thanks for subscribing!');
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Abdullah Naseem. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
          <div className="progress-wrap active-progress">
      <a href="#home" className="relative z-10 h-full items-center justify-center flex text-white">
        <i className="fa-sharp fa-solid fa-arrow-up"></i>
        </a>
    </div>
<div className="ms-style ms-right-bottom">
      {/* Chat Panel */}
      <div
        ref={panelRef}
        className="ms-panel"
        style={{
          display: isOpen ? "block" : "none",
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
          transition: "all 0.6s ease",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="ms-header">
          <strong>Need Help?</strong>
          <p>Chat with us on WhatsApp</p>
        </div>
        <div className="ms-body">
          <ul>
            <li>
              <a
              href='https://web.WhatsApp.com/send?phone=923248204797&text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you.'
              target='blank'
                className="ms-list"
                data-number="923248204797"
              >
                <div className="d-flex bd-highlight">
                  <div className="ms-img-cont">
                    <img
                      src="/images/w-icon.png"
                      className="ms-user-img"
                      alt="Profile image"
                    />
                    <span className="ms-status-icon ms-online"></span>
                  </div>
                  <div className="ms-user-info">
                    <span>Abdullah Naseem</span>
                    <p>Abdullah is online</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Chat Button */}
      <div className="ms-right-bottom">
        <div className="ms-box">
          <div
            ref={buttonRef}
            className={`ms-button ${isOpen ? "rotateForward" : "rotateBackward"}`}
            onClick={togglePanel}
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
