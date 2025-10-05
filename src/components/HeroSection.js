import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [audioStarted, setAudioStarted] = useState(false);
  
  const gameTextRefs = useRef([]);
  const gameTitleRef = useRef(null);
  const locationsTitleRef = useRef(null);
  const locationCardsRef = useRef([]);
  const faqTitleRef = useRef(null);
  const faqItemsRef = useRef([]);
  const audioRef = useRef(null);

  // Handle audio playback on first user interaction
  useEffect(() => {
    const startAudio = () => {
      if (!audioStarted && audioRef.current) {
        audioRef.current.play().catch(err => console.log("Audio play failed:", err));
        setAudioStarted(true);
      }
    };

    // Try to start audio immediately
    startAudio();

    // Also add listeners for first user interaction
    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, startAudio, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, startAudio);
      });
    };
  }, [audioStarted]);

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
      gameTitleRef.current,
      ...gameTextRefs.current,
      locationsTitleRef.current,
      ...locationCardsRef.current,
      faqTitleRef.current,
      ...faqItemsRef.current
    ].filter(Boolean);

    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "The Game", href: "#about-game" },
    { name: "Locations", href: "#locations" },
    { name: "FAQs", href: "#faqs" },
    { name: "The Architect", href: "/creator" }
  ];

  const gameTextLines = [
    "Check in with friends as the stay begins like any other",
    "But the unexpected can strike anytime, anywhere",
    "Can your group solve the mystery before time runs out?",
    "Your actions decide how the mystery unravels"
  ];

  const faqData = [
    {
      question: "Where are Mystery Mansions located?",
      answer: "Currently, we have one Mystery Mansion in Gurugram. Two more locations are launching soon in Mussoorie and Hyderabad."
    },
    {
      question: "What is the game about?",
      answer: "Check in with your group for a party like any other… until the unexpected happens! Imagine an unthinkable mystery unfolding right before your eyes as you stay at the property. As the eye witnesses, of course you need to crack it"
    },
    {
      question: "How long does the game last?",
      answer: "The game typically lasts 4–5 hours, but the timing can vary depending on your group's detective skills."
    },
    {
      question: "What language is the game in?",
      answer: "Currently the game is available in Hindi, to keep the experience authentic and true to the natural dynamics of the situation."
    },
    {
      question: "Is it suitable for all ages?",
      answer: "Yes! But we recommend players aged 10 and above, as the mysteries deepen as the game progresses."
    },
    {
      question: "Will someone guide us through the game?",
      answer: "The experience is immersive and realistic—no guides. Only your wits and God (we can play God!) can help you."
    },
    {
      question: "What is the stay like?",
      answer: "Stays are in top-rated, premium villas—each carefully chosen for comfort, privacy, and party vibes. You can enjoy indoor games, swimming pools, pre-booked dining, and the freedom to bring your own drinks. It's your space for the night."
    },
    {
      question: "Are the stories the same at every mansion?",
      answer: "Every Mystery Mansion has its own unique story, inspired by the location, history, and ambiance of the property. Each visit promises a fresh adventure."
    },
    {
      question: "Do I need to book in advance?",
      answer: "Yes! Our premium properties often get fully booked 1–2 months in advance on other platforms. For availability, reach out to us on WhatsApp at +91 8279845322—you might get lucky!"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
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
        .wavy-letter:nth-child(21) { animation-delay: 2s; }
        .wavy-letter:nth-child(22) { animation-delay: 2.1s; }
        .wavy-letter:nth-child(23) { animation-delay: 2.2s; }
        .wavy-letter:nth-child(24) { animation-delay: 2.3s; }
        .wavy-letter:nth-child(25) { animation-delay: 2.4s; }
        .wavy-letter:nth-child(26) { animation-delay: 2.5s; }
        .wavy-letter:nth-child(27) { animation-delay: 2.6s; }
        .wavy-letter:nth-child(28) { animation-delay: 2.7s; }
        .wavy-letter:nth-child(29) { animation-delay: 2.8s; }
        .wavy-letter:nth-child(30) { animation-delay: 2.9s; }

        .section-1, .section-2 {
          position: relative;
          background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
                      url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600') center/cover;
        }

        @media (min-width: 768px) {
          .section-1, .section-2 {
            background-attachment: fixed;
          }
        }

        #locations, #faqs {
          position: relative;
          background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
                      url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600') center/cover;
        }

        @media (min-width: 768px) {
          #locations, #faqs {
            background-attachment: fixed;
          }
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

        html {
          scroll-behavior: smooth;
        }

        .scroll-animate, .scroll-animate-up, .scroll-animate-scale {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-animate.animate-in, .scroll-animate-up.animate-in, .scroll-animate-scale.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-animate-scale {
          transform: scale(0.9) translateY(30px);
        }

        .scroll-animate-scale.animate-in {
          transform: scale(1) translateY(0);
        }

        .scroll-animate:nth-child(1) { transition-delay: 0.1s; }
        .scroll-animate:nth-child(2) { transition-delay: 0.2s; }
        .scroll-animate:nth-child(3) { transition-delay: 0.3s; }
        .scroll-animate:nth-child(4) { transition-delay: 0.4s; }
        .scroll-animate:nth-child(5) { transition-delay: 0.5s; }

        .faq-item {
          border: 1px solid rgba(114, 112, 129, 0.3);
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }

        .faq-item:hover {
          border-color: #727081;
          background: rgba(114, 112, 129, 0.15);
          transform: translateY(-2px);
        }

        .faq-question {
          padding: 1rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          color: #727081;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          color: #8b8999;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      padding 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 0 1rem;
          color: #a8a6b5;
          line-height: 1.6;
        }

        .faq-answer.open {
          max-height: 500px;
          padding: 0.75rem 1rem 1rem;
        }

        @media (min-width: 640px) {
          .faq-question {
            padding: 1.5rem;
          }
          .faq-answer {
            padding: 0 1.5rem;
          }
          .faq-answer.open {
            padding: 1rem 1.5rem 1.5rem;
          }
        }

        .faq-icon {
          transition: transform 0.3s ease;
          color: #727081;
          flex-shrink: 0;
          margin-left: 0.5rem;
        }

        .faq-icon.rotate {
          transform: rotate(180deg);
        }

        .whatsapp-link {
          color: #25D366;
          text-decoration: underline;
          font-weight: 600;
        }

        .whatsapp-link:hover {
          color: #128C7E;
        }

        @media (max-width: 640px) {
          .wavy-letter {
            animation: wave 6s ease-in-out infinite;
          }
        }

        .location-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .location-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        body {
          overflow-x: hidden;
        }

        @media (max-width: 640px) {
          .hero-content {
            padding-top: 80px;
          }
        }
      `}</style>

      {/* Hidden audio element for background music */}
      <audio ref={audioRef} loop>
        <source src="your-audio-file.mp3" type="audio/mpeg" />
      </audio>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-white text-base sm:text-lg md:text-xl font-bold" style={{ fontFamily: "Avenir" }}>
                Mystery Mansion
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  item.href.startsWith('#') ? (
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
                item.href.startsWith('#') ? (
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

      {/* Hero Section */}
      <section id="home" className="section-1">
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="relative z-10 w-full max-w-4xl space-y-3 sm:space-y-4 md:space-y-6 hero-content">
            <p className="font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl text-center" 
               style={{ fontFamily: "Avenir", color:'#727081'}}>
              World's Only
            </p>
            
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center px-2"
              style={{ fontFamily: "serif", color:'#727081'}}
            >
              {"Mystery Mansion".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center px-2"
              style={{ fontFamily: "Avenir", color:'#727081'}}
            >
              {"One group. One mansion. One night.".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </p>

            <div className="flex justify-center pt-6 sm:pt-8 md:pt-12">
              <Link to="/Instructions">
                <button 
                  className="bg-gray-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-gray-900 transition-all duration-300 text-sm sm:text-base md:text-lg text-gray-300 font-semibold shadow-lg hover:shadow-xl"
                  style={{ fontFamily: "Avenir" }}
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>

          <div 
            className="absolute bottom-0 left-0 right-0 bg-black/80 py-4 sm:py-6 md:py-8 px-4 z-40 backdrop-blur-sm"
            style={{ fontFamily: "Avenir", color:'#b9b7c7ff'}}
          >
            <div className="max-w-7xl mx-auto text-center space-y-2 sm:space-y-3">
              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg px-2">
                Stay in a premium villa in a group of friends or colleagues
              </p>
              <div className="w-32 sm:w-48 md:w-64 lg:w-80 h-px bg-white mx-auto opacity-60"></div>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg px-2">
                Solve a real-life mystery game during the stay
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Game Section */}
      <section id="about-game" className="section-2">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 sm:py-24">
          <div className="relative z-10 text-white w-full text-center max-w-6xl mx-auto">
            <h1 
              ref={gameTitleRef}
              className="scroll-animate-up text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-12 md:mb-16"
              style={{ fontFamily: "cursive", color: '#727081' }}
            >
              {"About the Game".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-10 md:space-y-14">
              {gameTextLines.map((line, index) => (
                <p 
                  key={index}
                  ref={el => gameTextRefs.current[index] = el}
                  className="scroll-animate text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center max-w-4xl leading-relaxed px-4"
                  style={{ 
                    fontFamily: "Avenir",
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    fontWeight: 'bold',
                    color: '#727081'
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations">
        <div className="min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 px-4">
          <h1 
            ref={locationsTitleRef}
            className="scroll-animate-up text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10 sm:mb-16 text-center relative z-10"
            style={{ fontFamily: "cursive", color: '#727081' }}
          >
            {"Locations".split('').map((letter, index) => (
              <span key={index} className="wavy-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto relative z-10 w-full">
            <div 
              ref={el => locationCardsRef.current[0] = el}
              className="scroll-animate-scale location-card bg-gray-400 rounded-lg shadow-lg overflow-hidden w-full sm:w-[calc(50%-1rem)] max-w-[400px] mx-auto"
            >
              <div className="p-3 sm:p-4 bg-gray-400">
                <img 
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800" 
                  alt="Gurgaon" 
                  className="w-full h-48 sm:h-64 md:h-80 object-cover rounded" 
                />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6" style={{ fontFamily: "Avenir" }}>
                  {"Gurugram".split('').map((letter, index) => (
                    <span key={index} className="wavy-letter">
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </h2>
                
                <Link to="/Instructions">
                  <button 
                    className="bg-gray-700 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full hover:bg-gray-900 transition-all duration-300 text-sm sm:text-base md:text-lg text-gray-400 font-semibold shadow-md hover:shadow-lg w-full sm:w-auto"
                    style={{ fontFamily: "Avenir" }}
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            </div>

            <div 
              ref={el => locationCardsRef.current[1] = el}
              className="scroll-animate-scale location-card bg-gray-400 rounded-lg shadow-lg overflow-hidden w-full sm:w-[calc(50%-1rem)] max-w-[400px] mx-auto"
            >
              <div className="p-3 sm:p-4 bg-gray-400">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" 
                  alt="Mussoorie" 
                  className="w-full h-48 sm:h-64 md:h-80 object-cover rounded" 
                />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-2" style={{ fontFamily: "Avenir" }}>
                  {"Mussoorie".split('').map((letter, index) => (
                    <span key={index} className="wavy-letter">
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </h2>
                <p className="mt-3 sm:mt-4 text-gray-600 font-medium text-lg sm:text-xl md:text-2xl" style={{ fontFamily: "Avenir" }}>
                  Coming Soon…!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs">
        <div className="min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 px-4">
          <h1 
            ref={faqTitleRef}
            className="scroll-animate-up text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10 sm:mb-16 text-center relative z-10 px-2"
            style={{ fontFamily: "cursive", color: '#727081' }}
          >
            {"Frequently Asked Questions".split('').map((letter, index) => (
              <span key={index} className="wavy-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          <div className="w-full max-w-4xl mx-auto relative z-10">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                ref={el => faqItemsRef.current[index] = el}
                className="scroll-animate faq-item"
              >
                <div 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  style={{ fontFamily: "Avenir" }}
                >
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg pr-2">
                    {faq.question}
                  </span>
                  <svg 
                    className={`faq-icon w-5 h-5 sm:w-6 sm:h-6 ${openFAQ === index ? 'rotate' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div 
                  className={`faq-answer ${openFAQ === index ? 'open' : ''}`}
                  style={{ fontFamily: "Avenir" }}
                >
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    {index === 8 ? (
                      <>
                        Yes! Our premium properties often get fully booked 1–2 months in advance on other platforms. For availability, reach out to us on WhatsApp at{' '}
                        <a href="https://wa.me/918279845322" className="whatsapp-link">
                          +91 8279845322
                        </a>
                        —you might get lucky!
                      </>
                    ) : (
                      faq.answer
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-16 text-center relative z-10 px-4">
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6"
              style={{ fontFamily: "Avenir", color: '#a8a6b5' }}
            >
              Still have questions?
            </p>
            <a 
              href="https://wa.me/918279845322" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg hover:shadow-xl"
              style={{ fontFamily: "Avenir" }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.215"/>
              </svg>
              <span className="whitespace-nowrap">Contact us on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}