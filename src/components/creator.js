import React, { useState, useEffect, useRef } from "react";
import bgImage from "../assets/mystery.jpeg";
import creatorImg from "../assets/Creator.jpeg";
import { Link, useNavigate } from "react-router-dom";

export default function Creator() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const creatorImageRef = useRef(null);
  const creatorTitleRef = useRef(null);
  const creatorContentRef = useRef([]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "The Game", href: "/#about-game" },
    { name: "Locations", href: "/#locations" },
    { name: "FAQs", href: "/#faqs" },
    { name: "The Architect", href: "/creator" }
  ];

  const handleSectionNavigation = (href) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      navigate('/', { replace: false });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
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

    const elementsToObserve = [
      creatorImageRef.current,
      creatorTitleRef.current,
      ...creatorContentRef.current
    ].filter(Boolean);

    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .wavy-letter {
          display: inline-block;
          animation: wave 5s ease-in-out infinite;
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

        body {
          overflow-x: hidden;
        }

        html {
          scroll-behavior: smooth;
        }

        .nav-bg {
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
        }

        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
        }
        
        .mobile-menu.open {
          max-height: 400px;
        }

        .creator-section {
          position: relative;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 100vh;
        }

        .creator-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          z-index: 0;
        }

        .scroll-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
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

        .scroll-animate-scale {
          opacity: 0;
          transform: scale(0.9) translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-animate-scale.animate-in {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .creator-image {
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
          border: 3px solid rgba(114, 112, 129, 0.3);
          width: 100%;
          max-width: 450px;
          object-fit: cover;
          aspect-ratio: 3/4;
        }

        .creator-image:hover {
          transform: scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          border-color: rgba(114, 112, 129, 0.6);
        }

        .content-card {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(114, 112, 129, 0.3);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .content-card:hover {
          border-color: rgba(114, 112, 129, 0.5);
          background: rgba(114, 112, 129, 0.15);
          transform: translateY(-5px);
        }

        .highlight {
          color: #727081;
          font-weight: 700;
        }

        .institution {
          color: #8b8999;
          font-weight: 600;
        }

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

        .scroll-animate:nth-child(1) { transition-delay: 0.1s; }
        .scroll-animate:nth-child(2) { transition-delay: 0.2s; }
        .scroll-animate:nth-child(3) { transition-delay: 0.3s; }

        @media (max-width: 1024px) {
          .creator-image {
            max-width: 400px;
          }

          .content-card {
            padding: 1.75rem;
          }

          .stat-number {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .creator-section {
            background-attachment: scroll;
          }

          .creator-image {
            max-width: 350px;
            margin: 0 auto;
          }

          .content-card {
            padding: 1.5rem;
          }
          
          .quote {
            padding: 1rem 1rem 1rem 2.5rem;
            margin: 1.5rem 0;
          }
          
          .quote::before {
            font-size: 3rem;
            left: 5px;
          }

          .stat-card {
            padding: 1.25rem 0.75rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.8rem;
          }

          .wavy-letter {
            animation: wave 6s ease-in-out infinite;
          }
        }

        @media (max-width: 640px) {
          .creator-image {
            max-width: 300px;
          }

          .content-card {
            padding: 1.25rem;
          }

          .stat-card {
            padding: 1rem 0.5rem;
          }

          .stat-number {
            font-size: 1.75rem;
          }

          .stat-label {
            font-size: 0.75rem;
          }

          .quote {
            padding: 0.875rem 0.875rem 0.875rem 2.25rem;
          }

          .quote::before {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .creator-image {
            max-width: 260px;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .stat-label {
            font-size: 0.7rem;
          }
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <span className="text-white text-base sm:text-lg md:text-xl font-bold" style={{ fontFamily: "Avenir" }}>
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
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="text-gray-300 hover:text-white focus:outline-none p-2"
                aria-label="Toggle menu"
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
          <div className={`md:hidden mobile-menu ${isMenuOpen ? 'open' : ''} nav-bg`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
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
      <section className="creator-section">
        <div className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Title */}
            <h1 
              ref={creatorTitleRef}
              className="scroll-animate-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 sm:mb-16 md:mb-20 px-2"
              style={{ fontFamily: "cursive", color: '#727081' }}
            >
              {"The Architect".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
              
              {/* Creator Image */}
              <div 
                ref={creatorImageRef}
                className="scroll-animate-scale text-center lg:text-left"
              >
                <img
                  src={creatorImg}
                  alt="Eshan - Creator of Mystery Mansion"
                  className="creator-image mx-auto lg:mx-0"
                />
                
                {/* Creator Name */}
                <div className="mt-4 sm:mt-6 text-center lg:text-left">
                  <h2 
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
                    style={{ fontFamily: "Avenir", color: '#727081' }}
                  >
                    Eshan
                  </h2>
                  <p 
                    className="text-sm sm:text-base md:text-lg lg:text-xl institution"
                    style={{ fontFamily: "Avenir" }}
                  >
                    Gamer.Dreamer.Builder
                  </p>
                </div>
              </div>

              {/* Creator Story */}
              <div className="space-y-4 sm:space-y-6">
                
                {/* Journey Card */}
                <div 
                  ref={el => creatorContentRef.current[0] = el}
                  className="scroll-animate content-card"
                >
                  <h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 highlight text-center"
                    style={{ fontFamily: "Avenir" }}
                  >
                    The Journey
                  </h3>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
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
                    className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4"
                    style={{ fontFamily: "Avenir", color: '#a8a6b5' }}
                  >
                    Even before school, I was swapping cassettes, playing video games. Mario, Duck Hunt, and Contra soon gave way to Lion King, NFS, and Prince of Persia. But my love for thrill wasn't limited to the digital world—I loved creating board games, and reading novels like Goosebumps and Agatha Christie. I was also drawn to mind-bending thrillers like Glass Onion, Coherence, and The Sixth Sense, always envious of the characters who got to live the mysteries and experience the thrill firsthand. Then I finally found the perfect blend of them all.
                  </p>
                  <p 
                    className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4"
                    style={{ fontFamily: "Avenir", color: '#a8a6b5' }}
                  >
                    Mystery Mansion started as a quirky birthday party idea for a group of five at ISB. It quickly grew into one of the campus' most popular activities. And now I am sharing this immersive experience with the world, giving people a chance to be Holmes, Poirot, and Benoit Blanc themselves.
                  </p>
                  <p 
                    className="text-xs sm:text-sm md:text-base leading-relaxed"
                    style={{ fontFamily: "Avenir", color: '#a8a6b5' }}
                  >
                    I'm bringing the game to different locations, blending local culture and aesthetics of villas with the stories people become a part of for the night.
                  </p>
                  <p 
                    className="text-xs sm:text-sm md:text-base leading-relaxed mt-3 sm:mt-4 font-bold"
                    style={{ fontFamily: "Avenir", color: '#727081' }}
                  >
                    New villa. New story. New thrill.
                  </p>
                </div>

                {/* Quote */}
                <div 
                  ref={el => creatorContentRef.current[1] = el}
                  className="scroll-animate quote text-xs sm:text-sm md:text-base"
                  style={{ fontFamily: "Avenir" }}
                >
                  Through this game, I want people to not just watch thriller movies, but be a part of them and live them, for the entire stay!
                </div>

                {/* CTA */}
                <div 
                  ref={el => creatorContentRef.current[2] = el}
                  className="scroll-animate text-center lg:text-left pt-2 sm:pt-4"
                >
                  <button 
                    onClick={() => handleSectionNavigation('/#locations')}
                    className="bg-gray-700 hover:bg-gray-900 text-gray-300 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg hover:shadow-xl"
                    style={{ fontFamily: "Avenir" }}
                  >
                    Experience the Mystery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}