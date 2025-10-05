import React, { useState, useEffect, useRef } from "react";
import bgImage from "../assets/mystery.jpeg";
import creatorImg from "../assets/Creator.jpeg";
import { Link, useNavigate } from "react-router-dom";

export default function Creator() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Refs for animation elements
  const creatorImageRef = useRef(null);
  const creatorTitleRef = useRef(null);
  const creatorContentRef = useRef([]);

  // Navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "The Game", href: "/#about-game" },
    { name: "Locations", href: "/#locations" },
    { name: "FAQs", href: "/#faqs" },
    { name: "The Architect", href: "/creator" }
  ];

  // Handle navigation to home sections
  const handleSectionNavigation = (href) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2); // Remove '/#'
      navigate('/', { replace: false });
      // Small delay to ensure page navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-30px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          entry.target.classList.remove('animate-out');
        } else {
          entry.target.classList.add('animate-out');
          entry.target.classList.remove('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const elementsToObserve = [
      creatorImageRef.current,
      creatorTitleRef.current,
      ...creatorContentRef.current
    ].filter(Boolean);

    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .wavy-letter {
          display: inline-block;
          animation: wave 4s ease-in-out infinite;
        }
        
        .wavy-letter:nth-child(1) { animation-delay: 0s; }
        .wavy-letter:nth-child(2) { animation-delay: 0.1s; }
        .wavy-letter:nth-child(3) { animation-delay: 0.2s; }
        .wavy-letter:nth-child(4) { animation-delay: 0.3s; }
        .wavy-letter:nth-child(5) { animation-delay: 0.4s; }
        .wavy-letter:nth-child(6) { animation-delay: 0.5s; }
        .wavy-letter:nth-child(7) { animation-delay: 0.6s; }
        .wavy-letter:nth-child(8) { animation-delay: 0.7s; }
        .wavy-letter:nth-child(9) { animation-delay: 0.8s; }
        .wavy-letter:nth-child(10) { animation-delay: 0.9s; }
        .wavy-letter:nth-child(11) { animation-delay: 1s; }
        .wavy-letter:nth-child(12) { animation-delay: 1.1s; }
        .wavy-letter:nth-child(13) { animation-delay: 1.2s; }
        .wavy-letter:nth-child(14) { animation-delay: 1.3s; }
        .wavy-letter:nth-child(15) { animation-delay: 1.4s; }
        .wavy-letter:nth-child(16) { animation-delay: 1.5s; }
        .wavy-letter:nth-child(17) { animation-delay: 1.6s; }
        .wavy-letter:nth-child(18) { animation-delay: 1.7s; }
        .wavy-letter:nth-child(19) { animation-delay: 1.8s; }
        .wavy-letter:nth-child(20) { animation-delay: 1.9s; }

        /* Navigation Styles */
        .nav-bg {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
        }

        /* Mobile menu styles */
        .mobile-menu {
          transform: translateY(-100%);
          transition: transform 0.3s ease-in-out;
        }
        
        .mobile-menu.open {
          transform: translateY(0);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Scroll Animation Styles */
        .scroll-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-animate.animate-out {
          opacity: 0;
          transform: translateY(30px);
        }

        .scroll-animate-up {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-animate-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-animate-up.animate-out {
          opacity: 0;
          transform: translateY(40px);
        }

        .scroll-animate-scale {
          opacity: 0;
          transform: scale(0.9) translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-animate-scale.animate-in {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .scroll-animate-scale.animate-out {
          opacity: 0;
          transform: scale(0.95) translateY(20px);
        }

        /* Creator Image Styles */
        .creator-image {
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          border: 3px solid rgba(114, 112, 129, 0.3);
        }

        .creator-image:hover {
          transform: scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          border-color: rgba(114, 112, 129, 0.6);
        }

        /* Content Card Styles */
        .content-card {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(114, 112, 129, 0.3);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .content-card:hover {
          border-color: rgba(114, 112, 129, 0.5);
          background: rgba(114, 112, 129, 0.1);
          transform: translateY(-5px);
        }

        /* Highlight text styles */
        .highlight {
          color: #727081;
          font-weight: 700;
        }

        .institution {
          color: #8b8999;
          font-weight: 600;
        }

        /* Quote style */
        .quote {
          position: relative;
          font-style: italic;
          padding: 1.5rem 1.5rem 1.5rem 3rem;
          background: rgba(114, 112, 129, 0.1);
          border-left: 4px solid #727081;
          border-radius: 0 15px 15px 0;
          margin: 2rem 0;
          color: #a8a6b5;
        }

        .quote::before {
          content: '"';
          font-size: 4rem;
          color: #727081;
          position: absolute;
          top: -5px;
          left: 10px;
          font-family: serif;
          line-height: 1;
        }

        /* Stats Cards */
        .stat-card {
          background: rgba(114, 112, 129, 0.15);
          border: 1px solid rgba(114, 112, 129, 0.4);
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(114, 112, 129, 0.2);
          border-color: rgba(114, 112, 129, 0.6);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: #727081;
          display: block;
        }

        .stat-label {
          color: #a8a6b5;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        /* Back button - REMOVED */

        /* Staggered animations */
        .scroll-animate:nth-child(1) { transition-delay: 0.1s; }
        .scroll-animate:nth-child(2) { transition-delay: 0.2s; }
        .scroll-animate:nth-child(3) { transition-delay: 0.3s; }
        .scroll-animate:nth-child(4) { transition-delay: 0.4s; }
        .scroll-animate:nth-child(5) { transition-delay: 0.5s; }

        @media (max-width: 768px) {
          .content-card {
            padding: 1.5rem;
          }
          
          .quote {
            padding: 1rem 1rem 1rem 2.5rem;
          }
          
          .quote::before {
            font-size: 3rem;
            left: 5px;
          }
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link to="/">
                <span className="text-white text-xl font-bold" style={{ fontFamily: "Avenir" }}>
                  Mystery Mansion
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  item.href.startsWith('/#') ? (
                    <button
                      key={index}
                      onClick={() => handleSectionNavigation(item.href)}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer"
                      style={{ fontFamily: "Avenir" }}
                    >
                      {item.name}
                    </button>
                  ) : item.href.startsWith('#') ? (
                    <a
                      key={index}
                      href={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                      style={{ fontFamily: "Avenir" }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                      style={{ fontFamily: "Avenir" }}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden mobile-menu ${isMenuOpen ? 'open' : ''} absolute top-16 left-0 right-0 nav-bg`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                item.href.startsWith('/#') ? (
                  <button
                    key={index}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleSectionNavigation(item.href);
                    }}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer w-full text-left"
                    style={{ fontFamily: "Avenir" }}
                  >
                    {item.name}
                  </button>
                ) : item.href.startsWith('#') ? (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    style={{ fontFamily: "Avenir" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.href}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    style={{ fontFamily: "Avenir" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          filter: 'brightness(1)'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content Container */}
        <div className="relative z-10 pt-24 pb-16 px-4 sm:px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Title */}
            <h1 
              ref={creatorTitleRef}
              className="scroll-animate-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20"
              style={{ fontFamily: "cursive", color: '#727081' }}
            >
              {"The Architect".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* Creator Image */}
              <div 
                ref={creatorImageRef}
                className="scroll-animate-scale text-center lg:text-left"
              >
                <img
                  src={creatorImg}
                  alt="Eshan - Creator of Mystery Mansion"
                  className="creator-image w-full max-w-md mx-auto lg:mx-0 object-cover"
                  style={{ aspectRatio: '3/4' }}
                />
                
                {/* Creator Name */}
                <div className="mt-6 text-center lg:text-left">
                  <h2 
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    style={{ fontFamily: "Avenir", color: '#727081' }}
                  >
                    Eshan
                  </h2>
                  <p 
                    className="text-base sm:text-xl institution"
                    style={{ fontFamily: "Avenir" }}
                  >
                    Gamer.Dreamer.Builder
                  </p>
                </div>
              </div>

              {/* Creator Story */}
              <div className="space-y-6">
                
                {/* Journey Title and Stats Cards */}
                <div 
                  ref={el => creatorContentRef.current[0] = el}
                  className="scroll-animate content-card"
                >
                  <h3 
                    className="text-xl sm:text-2xl font-bold mb-6 highlight text-center"
                    style={{ fontFamily: "Avenir" }}
                  >
                    The Journey
                  </h3>
                  
                  {/* Stats Cards inside Journey card */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="stat-card">
                      <span className="stat-number">3</span>
                      <span className="stat-label">Unique Stories</span>
                    </div>
                    <div className="stat-card">
                      <span className="stat-number">15</span>
                      <span className="stat-label">Games Hosted</span>
                    </div>
                    <div className="stat-card">
                      <span className="stat-number">180</span>
                      <span className="stat-label">Players at ISB</span>
                    </div>
                  </div>
                  
                  {/* Journey Content */}
                  <p 
                    className="text-sm sm:text-base leading-relaxed mb-4"
                    style={{ fontFamily: "Avenir", color: '#a8a6b5' }}
                  >
                    Even before school, I was swapping cassettes, playing video games. Mario, Duck Hunt, and Contra soon gave way to Lion King, NFS, and Prince of Persia. But my love for thrill wasn't limited to the digital world—I loved creating board games, and reading novels like Goosebumps and Agatha Christie. I was also drawn to mind-bending thrillers like Glass Onion, Coherence, and The Sixth Sense, always envious of the characters who got to live the mysteries and experience the thrill firsthand. Then I finally found the perfect blend of them all.
                  </p>
                  <p 
                    className="text-sm sm:text-base leading-relaxed mb-4"
                    style={{ fontFamily: "Avenir", color: '#a8a6b5' }}
                  >
                    Mystery Mansion started as a quirky birthday party idea for a group of five at ISB. It quickly grew into one of the campus' most popular activities. And now I am sharing this immersive experience with the world, giving people a chance to be Holmes, Poirot, and Benoit Blanc themselves.
                  </p>
                  <p 
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ fontFamily: "Avenir", color: '#a8a6b5' }}
                  >
                    I'm bringing the game to different locations, blending local culture and aesthetics of villas with the stories people become a part of for the night.
                  </p>
                  <p 
                    className="text-sm sm:text-base leading-relaxed mt-4 font-bold"
                    style={{ fontFamily: "Avenir", color: '#727081' }}
                  >
                    New villa. New story. New thrill.
                  </p>
                </div>

                {/* Quote */}
                <div 
                  ref={el => creatorContentRef.current[1] = el}
                  className="scroll-animate quote"
                  style={{ fontFamily: "Avenir" }}
                >
                  Through this game, I want people to not just watch thriller movies, but be a part of them and live them, for the entire stay!
                </div>

                {/* CTA */}
                <div 
                  ref={el => creatorContentRef.current[2] = el}
                  className="scroll-animate text-center lg:text-left pt-4"
                >
                  <button 
                    onClick={() => handleSectionNavigation('/#locations')}
                    className="bg-gray-700 hover:bg-gray-900 text-gray-300 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                    style={{ fontFamily: "Avenir" }}
                  >
                    Experience the Mystery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}