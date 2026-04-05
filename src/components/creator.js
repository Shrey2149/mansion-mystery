import React, { useState, useEffect, useRef } from "react";
import bgImage from "../assets/mystery.jpeg";
import creatorImg from "../assets/Creator.jpeg";
import logoImg from "../assets/Logo.jpeg";
import { Link, useNavigate } from "react-router-dom";

export default function Creator() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  // Scroll-aware nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <style>{`
        /* ===== NAV BAR ===== */
        .mm-nav {
          background: ${scrolled ? 'rgba(10, 10, 18, 0.85)' : 'rgba(10, 10, 18, 0.35)'};
          backdrop-filter: blur(${scrolled ? '20px' : '8px'});
          border-bottom: 1px solid ${scrolled ? 'rgba(201, 168, 76, 0.15)' : 'transparent'};
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mm-nav-link {
          font-family: var(--font-body);
          color: var(--text-secondary);
          text-decoration: none;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          position: relative;
          transition: color 0.3s ease;
        }

        .mm-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
        }

        .mm-nav-link:hover {
          color: var(--gold-light);
        }

        .mm-nav-link:hover::after {
          width: 80%;
        }

        .mm-mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(10, 10, 18, 0.95);
          backdrop-filter: blur(20px);
        }
        
        .mm-mobile-menu.open {
          max-height: 400px;
        }

        /* ===== WAVY ANIMATION ===== */
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

        /* ===== CREATOR SECTION ===== */
        .creator-section {
          position: relative;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 100vh;
        }

        .creator-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 30% 20%, rgba(201, 168, 76, 0.05) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 80%, rgba(139, 47, 63, 0.04) 0%, transparent 50%),
            linear-gradient(180deg, rgba(10, 10, 15, 0.5) 0%, rgba(10, 10, 15, 0.3) 50%, rgba(10, 10, 15, 0.6) 100%);
          z-index: 0;
        }

        .creator-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.4) 100%);
          z-index: 0;
          pointer-events: none;
        }

        /* ===== SCROLL ANIMATIONS ===== */
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

        .scroll-animate:nth-child(1) { transition-delay: 0.1s; }
        .scroll-animate:nth-child(2) { transition-delay: 0.2s; }
        .scroll-animate:nth-child(3) { transition-delay: 0.3s; }

        /* ===== CREATOR IMAGE ===== */
        .creator-image {
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(201, 168, 76, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1.5px solid rgba(201, 168, 76, 0.2);
          width: 100%;
          max-width: 450px;
          object-fit: cover;
          aspect-ratio: 3/4;
        }

        .creator-image:hover {
          transform: scale(1.02) translateY(-4px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(201, 168, 76, 0.12);
          border-color: rgba(201, 168, 76, 0.4);
        }

        /* ===== CONTENT CARD ===== */
        .content-card {
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .content-card:hover {
          border-color: rgba(201, 168, 76, 0.3);
          background: rgba(201, 168, 76, 0.06);
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(201, 168, 76, 0.06);
        }

        /* ===== QUOTE ===== */
        .quote {
          position: relative;
          font-style: italic;
          padding: 1.5rem 1.5rem 1.5rem 3rem;
          background: rgba(201, 168, 76, 0.05);
          border-left: 3px solid var(--gold);
          border-radius: 0 16px 16px 0;
          margin: 2rem 0;
          color: var(--text-primary);
          font-family: var(--font-heading);
        }

        .quote::before {
          content: '"';
          font-size: 4rem;
          color: var(--gold);
          position: absolute;
          top: -5px;
          left: 10px;
          font-family: var(--font-heading);
          line-height: 1;
          opacity: 0.6;
        }

        /* ===== STAT CARDS ===== */
        .stat-card {
          background: rgba(201, 168, 76, 0.06);
          border: 1px solid rgba(201, 168, 76, 0.15);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(201, 168, 76, 0.1);
          border-color: rgba(201, 168, 76, 0.35);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(201, 168, 76, 0.08);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: var(--gold);
          display: block;
          font-family: var(--font-heading);
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-top: 0.5rem;
          font-family: var(--font-body);
        }

        /* ===== CTA BUTTON ===== */
        .mm-cta {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.875rem 2.5rem;
          border: 1.5px solid var(--gold);
          border-radius: 50px;
          background: linear-gradient(135deg, rgba(201, 168, 76, 0.12) 0%, rgba(201, 168, 76, 0.04) 100%);
          color: var(--gold-light);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(8px);
        }

        .mm-cta::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.15), transparent);
          transition: left 0.6s ease;
        }

        .mm-cta:hover {
          background: linear-gradient(135deg, rgba(201, 168, 76, 0.25) 0%, rgba(201, 168, 76, 0.1) 100%);
          border-color: var(--gold-light);
          box-shadow: 0 0 30px rgba(201, 168, 76, 0.2), inset 0 0 20px rgba(201, 168, 76, 0.05);
          transform: translateY(-2px);
        }

        .mm-cta:hover::before {
          left: 100%;
        }

        /* ===== GOLD DIVIDER ===== */
        .mm-gold-divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          margin: 1rem auto;
          border-radius: 2px;
        }

        /* ===== RESPONSIVE ===== */
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

      {/* ===== NAVIGATION BAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 mm-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
            <div className="flex-shrink-0">
              <Link to="/">
                <img 
                  src={logoImg} 
                  alt="Mystery Mansion Logo" 
                  className="h-14 sm:h-16 md:h-20 w-auto cursor-pointer my-0"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(201, 168, 76, 0.1))' }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {navItems.map((item, index) => (
                  item.href.startsWith('/#') ? (
                    <button
                      key={index}
                      onClick={() => handleSectionNavigation(item.href)}
                      className="mm-nav-link bg-transparent border-none cursor-pointer"
                    >
                      {item.name}
                    </button>
                  ) : item.href.startsWith('#') ? (
                    <a
                      key={index}
                      href={item.href}
                      className="mm-nav-link"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={item.href}
                      className="mm-nav-link"
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
                className="focus:outline-none p-2"
                aria-label="Toggle menu"
                style={{ color: 'var(--text-secondary)' }}
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
          <div className={`md:hidden mm-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                item.href.startsWith('/#') ? (
                  <button
                    key={index}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleSectionNavigation(item.href);
                    }}
                    className="mm-nav-link block py-3 bg-transparent border-none cursor-pointer w-full text-left"
                  >
                    {item.name}
                  </button>
                ) : item.href.startsWith('#') ? (
                  <a
                    key={index}
                    href={item.href}
                    className="mm-nav-link block py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.href}
                    className="mm-nav-link block py-3"
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

      {/* ===== MAIN CONTENT ===== */}
      <section className="creator-section">
        <div className="relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Title */}
            <h1 
              ref={creatorTitleRef}
              className="scroll-animate-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 sm:mb-6 px-2"
              style={{ fontFamily: "var(--font-heading)", color: 'var(--text-primary)' }}
            >
              {"The Architect".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            <div className="mm-gold-divider" style={{ marginBottom: '2.5rem' }}></div>

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
                    style={{ fontFamily: "var(--font-heading)", color: 'var(--gold)' }}
                  >
                    Eshan
                  </h2>
                  <p 
                    className="text-sm sm:text-base md:text-lg lg:text-xl"
                    style={{ fontFamily: "var(--font-body)", color: 'var(--text-secondary)', letterSpacing: '0.08em' }}
                  >
                    Gamer · Dreamer · Builder
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
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center"
                    style={{ fontFamily: "var(--font-heading)", color: 'var(--gold-light)' }}
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
                    style={{ fontFamily: "var(--font-body)", color: 'var(--text-secondary)' }}
                  >
                    Even before school, I was swapping cassettes, playing video games. Mario, Duck Hunt, and Contra soon gave way to Lion King, NFS, and Prince of Persia. But my love for thrill wasn't limited to the digital world—I loved creating board games, and reading novels like Goosebumps and Agatha Christie. I was also drawn to mind-bending thrillers like Glass Onion, Coherence, and The Sixth Sense, always envious of the characters who got to live the mysteries and experience the thrill firsthand. Then I finally found the perfect blend of them all.
                  </p>
                  <p 
                    className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4"
                    style={{ fontFamily: "var(--font-body)", color: 'var(--text-secondary)' }}
                  >
                    Mystery Mansion started as a quirky birthday party idea for a group of five at ISB. It quickly grew into one of the campus' most popular activities. And now I am sharing this immersive experience with the world, giving people a chance to be Holmes, Poirot, and Benoit Blanc themselves.
                  </p>
                  <p 
                    className="text-xs sm:text-sm md:text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: 'var(--text-secondary)' }}
                  >
                    I'm bringing the game to different locations, blending local culture and aesthetics of villas with the stories people become a part of for the night.
                  </p>
                  <p 
                    className="text-xs sm:text-sm md:text-base leading-relaxed mt-3 sm:mt-4 font-bold"
                    style={{ fontFamily: "var(--font-body)", color: 'var(--gold)' }}
                  >
                    New villa. New story. New thrill.
                  </p>
                </div>

                {/* Quote */}
                <div 
                  ref={el => creatorContentRef.current[1] = el}
                  className="scroll-animate quote text-xs sm:text-sm md:text-base"
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
                    className="mm-cta text-sm sm:text-base"
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