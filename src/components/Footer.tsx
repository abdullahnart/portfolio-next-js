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
      { label: 'Experience', section: 'testimonials' },
      { label: 'Projects', section: 'projects' },
      { label: 'About', section: 'about' },
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
    { name: 'GitHub', href: 'https://github.com/abdullahnart', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )},
    { name: 'LinkedIn', href: 'https://linkedin.com/in/abdullah-naseem-dev/ ', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )},
    { name: 'Facebook', href: 'https://www.facebook.com/abdullah.naseem.319/', icon: (
      <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg>
    )},
    { name: 'Wordpress', href: 'https://profiles.wordpress.org/abdullahart/', icon: (
      <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M125.7 233.4L227.2 511.4C156.2 477 107.3 404.2 107.3 320C107.3 289.1 113.9 259.9 125.7 233.4zM463.6 309.3C463.6 283 454.2 264.8 446.1 250.6C435.3 233.1 425.2 218.2 425.2 200.7C425.2 181.1 440 162.9 460.9 162.9C461.8 162.9 462.7 163 463.7 163.1C425.8 128.4 375.4 107.2 320 107.2C245.7 107.2 180.3 145.3 142.2 203.1C147.2 203.3 151.9 203.4 155.9 203.4C178.1 203.4 212.6 200.7 212.6 200.7C224.1 200 225.4 216.9 214 218.2C214 218.2 202.5 219.5 189.7 220.2L267.2 450.6L313.8 311L280.7 220.2C269.2 219.5 258.4 218.2 258.4 218.2C246.9 217.5 248.3 200 259.7 200.7C259.7 200.7 294.8 203.4 315.7 203.4C337.9 203.4 372.4 200.7 372.4 200.7C383.9 200 385.2 216.9 373.8 218.2C373.8 218.2 362.3 219.5 349.5 220.2L426.4 448.9L447.6 378C456.6 348.6 463.6 327.5 463.6 309.3zM323.7 338.6L259.9 524.1C279 529.7 299.1 532.8 320 532.8C344.8 532.8 368.5 528.5 390.6 520.7C390 519.8 389.5 518.8 389.1 517.8L323.7 338.6zM506.7 217.9C507.6 224.7 508.1 231.9 508.1 239.8C508.1 261.4 504.1 285.6 491.9 316L426.9 503.9C490.2 467 532.7 398.5 532.7 320C532.7 283 523.3 248.2 506.7 217.9zM72 320C72 183 183 72 320 72C457 72 568 183 568 320C568 457 457 568 320 568C183 568 72 457 72 320zM556.6 320C556.6 189.3 450.7 83.4 320 83.4C189.3 83.4 83.4 189.3 83.4 320C83.4 450.7 189.3 556.6 320 556.6C450.7 556.6 556.6 450.7 556.6 320z"/></svg>
    )},
  ];

  return (
    <footer className="bg-[#12151f] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => onNavigate('home')}
              className="text-white font-bold text-2xl tracking-tight hover:text-indigo-400 transition-colors mb-4 block mx-auto"
            >
              <span className="text-indigo-500">Abd</span>ullah.dev
            </button>
            <p className="text-gray-400 mb-6 text-center mx-auto lg:w-3/4">
              WordPress & CMS Developer specializing in WooCommerce, Shopify, custom themes/plugins, and scalable eCommerce solutions.
            </p>
            <div className="flex gap-3 justify-center">
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
            {/* <h4 className="text-white font-semibold mb-4">Navigation</h4> */}
            <ul className="flex gap-4 lg:gap-6 justify-center flex-wrap">
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
          {/* <div>
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
          </div> */}

          {/* Resources & Newsletter */}
          {/* <div>
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
            
            <div>
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thanks for subscribing!');
                }}
                className="flex gap-2 flex-wrap"
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
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Abdullah Naseem. All rights reserved.
            </p>
            {/* <div className="flex gap-6">
              <a href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Terms of Service
              </a>
            </div> */}
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
