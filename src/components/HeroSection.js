import React, { useState, useEffect, useRef } from "react";
import bgImage from "../assets/mystery.jpeg";
import backgroundImg from "../assets/instructions-bg.png"; 
import gurgaonImg from "../assets/Gurgaon_image.jpeg";
import mussoorieImg from "../assets/Mussourrie_image.png";
import locationsBackgroundImg from "../assets/locations-bg.jpeg";
import creatorImg from "../assets/Creator.jpeg";
import { Link } from "react-router-dom";
import { useAudio } from "../components/AudioContext.js";

export default function HeroSection() {
  const { startAudio } = useAudio(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  
  // Refs for animation elements
  const gameTextRefs = useRef([]);
  const gameTitleRef = useRef(null);
  const locationsTitleRef = useRef(null);
  const locationCardsRef = useRef([]);
  const faqTitleRef = useRef(null);
  const faqItemsRef = useRef([]);
  const creatorImageRef = useRef(null);
  const creatorTitleRef = useRef(null);
  const creatorContentRef = useRef([]);

  useEffect(() => {
    startAudio(); // Start audio when component mounts
  }, [startAudio]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px -50px 0px'
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
      gameTitleRef.current,
      ...gameTextRefs.current,
      locationsTitleRef.current,
      ...locationCardsRef.current,
      faqTitleRef.current,
      ...faqItemsRef.current,
      creatorImageRef.current,
      creatorTitleRef.current,
      ...creatorContentRef.current
    ].filter(Boolean);

    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "The Game", href: "#about-game" },
    { name: "The Architect", href: "#creator" },
    { name: "Locations", href: "#locations" },
    { name: "FAQs", href: "#faqs" }
  ];

  // Static text lines for the game section
  const gameTextLines = [
    "Check in with friends as the stay begins like any other",
    "But the unexpected can strike anytime, anywhere",
    "Can your group solve the mystery before time runs out?",
    "Your actions decide how the mystery unravels"
  ];

  // FAQ data
  const faqData = [
    {
      question: "Where are Mystery Mansions located?",
      answer: "Currently, we have one Mystery Mansion in Gurugram. Two more locations are launching soon in Mussoorie and Hyderabad."
    },
    {
      question: "What is the game about?",
      answer: "Check in with your group for a party like any other… until the unexpected happens! Imagine an unthinkable  mystery unfolding right before your eyes as you stay at the property. As the eye witnesses, of course you need to crack it"
    },
    {
      question: "How long does the game last?",
      answer: "The game typically lasts 4–5 hours, but the timing can vary depending on your group's detective skills."
    },
    {
      question: "What language is the game in?",
      answer: "The game is conducted in Hindi, to keep the experience authentic and true to the natural dynamics of the situation."
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
        .wavy-letter:nth-child(31) { animation-delay: 3s; }
        .wavy-letter:nth-child(32) { animation-delay: 3.1s; }
        .wavy-letter:nth-child(33) { animation-delay: 3.2s; }
        .wavy-letter:nth-child(34) { animation-delay: 3.3s; }
        .wavy-letter:nth-child(35) { animation-delay: 3.4s; }

        /* Fixed Background for First Two Sections */
        .fixed-bg-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200vh; /* Cover only first two sections */
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: -1;
        }

        /* Fixed Background for Locations and FAQs Sections */
        .fixed-bg-container-locations {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-image: url(${backgroundImg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: -1;
        }

        /* Hide locations background for first two sections */
        .section-1, .section-2 {
          position: relative;
          z-index: 1;
        }

        .section-1::before, .section-2::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: -1;
        }

        .section-1::after, .section-2::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          z-index: -1;
        }

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

        /* Responsive positioning classes */
        .bookings-text {
          position: relative;
          left: 35vw;
          top: 30vh;
          display: inline-block;
        }

        /* White divider line - force visibility on mobile */
        .mobile-divider {
          width: 240px !important;
          height: 1px !important;
          background-color: white !important;
          margin: 0 auto !important;
          opacity: 0.6 !important;
        }

        /* Media queries for better responsiveness */
        @media (max-width: 1200px) {
          .bookings-text {
            left: 35vw;
            top: 30vh;
          }
        }

        @media (max-width: 768px) {
          .bookings-text {
            left: 35vh;
            top: 30vh;
            text-align: center;
            display: block;
          }
        }

        @media (max-width: 480px) {
          .bookings-text {
            left: 0;
            top: 1vh;
          }
        }

        /* Force show divider on small screens */
        @media (max-width: 639px) {
          .mobile-divider {
            display: block !important;
          }
        }

        /* Show divider on all screens */
        .mobile-divider {
          display: block !important;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Locations section specific styles */
        .location-card {
          transform: transition duration-300;
        }
        
        .location-card:hover {
          transform: scale(1.05);
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

        /* Different animation types */
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
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-animate-scale.animate-in {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .scroll-animate-scale.animate-out {
          opacity: 0;
          transform: scale(0.95) translateY(20px);
        }

        /* Staggered animations for multiple elements */
        .scroll-animate:nth-child(1) { transition-delay: 0.1s; }
        .scroll-animate:nth-child(2) { transition-delay: 0.2s; }
        .scroll-animate:nth-child(3) { transition-delay: 0.3s; }
        .scroll-animate:nth-child(4) { transition-delay: 0.4s; }
        .scroll-animate:nth-child(5) { transition-delay: 0.5s; }

        /* FAQ Specific Styles */
        .faq-item {
          border: 1px solid rgba(114, 112, 129, 0.3);
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }

        .faq-item:hover {
          border-color: #727081;
          background: rgba(114, 112, 129, 0.1);
          transform: translateY(-2px);
        }

        .faq-question {
          padding: 1.5rem;
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
          padding: 0 1.5rem;
          color: #a8a6b5;
          line-height: 1.6;
        }

        .faq-answer.open {
          max-height: 200px;
          padding: 1rem 1.5rem 1.5rem;
        }

        .faq-icon {
          transition: transform 0.3s ease;
          color: #727081;
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

        /* Creator Section Styles */
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
      `}</style>

      {/* Fixed Background for Locations and FAQs Sections */}
      <div className="fixed-bg-container-locations"></div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold" style={{ fontFamily: "Avenir" }}>
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
        <div className="relative h-screen flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          {/* Content */}
          <div className="relative z-10 px-4 max-w-4xl space-y-2 sm:space-y-4 w-full">
            {/* Title */}
            <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white mt-2 sm:mt-4" 
               style={{ fontFamily: "Avenir", color:'#727081'}}>
              World's Only
            </p>
            
            {/* Wavy Mystery Mansion Text - Different Font */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white text-center mt-4 sm:mt-6 lg:mt-20"
              style={{ fontFamily: "serif", color:'#727081'}}
            >
              {"Mystery Mansion".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            {/* Wavy Tagline */}
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white text-center mt-2 sm:mt-4"
              style={{ fontFamily: "Avenir", color:'#727081'}}
            >
              {"One group. One mansion. One night.".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </p>

            {/* Booking Section - Book Now Button */}
            <div className="absolute top-[450px] bottom-0 left-1/2 transform -translate-x-1/2 z-30">
              <Link to="/Instructions">
                <button 
                  className="bg-gray-700 px-6 py-2 rounded-full hover:bg-gray-900 transition-colors duration-300 text-base sm:text-lg text-gray-300 font-semibold"
                  style={{ fontFamily: "Avenir" }}
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>

          {/* Static Bottom Banner */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-black/80 py-2 sm:py-4 px-4 sm:px-8 z-40 backdrop-blur-sm"
            style={{ fontFamily: "Avenir", color:'#b9b7c7ff'}}
          >
            <div className="max-w-7xl mx-auto text-center space-y-3">
              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Stay in a premium villa in a group of friends or colleagues
              </p>
              {/* White Divider Line */}
              <div className="w-60 sm:w-80 md:w-96 lg:w-full lg:max-w-2xl xl:max-w-2xl h-px bg-white mx-auto opacity-60"></div>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Solve a real-life mystery game during the stay
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Game Section */}
      <section id="about-game" className="section-2">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16">
          {/* Main content container */}
          <div className="relative z-10 text-white w-full text-center max-w-10xl mx-auto">
            {/* Title with wavy animation - Cursive Font */}
            <h1 
              ref={gameTitleRef}
              className="scroll-animate-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 justify-center"
              style={{ fontFamily: "cursive", marginTop: '1rem sm:2rem', color: '#727081' }}
            >
              {"About the Game".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            {/* Static text lines */}
            <div 
              className="flex flex-col items-center justify-center space-y-8 sm:space-y-12 md:space-y-16 mb-8 sm:mb-12 md:mb-16"
              style={{ fontFamily: "Avenir", paddingTop: '1rem sm:1.5rem md:2rem' }}
            >
              {gameTextLines.map((line, index) => (
                <p 
                  key={index}
                  ref={el => gameTextRefs.current[index] = el}
                  className="scroll-animate text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center max-w-sm sm:max-w-lg md:max-w-6xl lg:max-w-full xl:max-w-full leading-relaxed px-4"
                  style={{ 
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
        <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-8 md:px-16">
          {/* Title with wavy animation - Cursive Font */}
          <h1 
            ref={locationsTitleRef}
            className="scroll-animate-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 md:mb-20 text-center"
            style={{ fontFamily: "cursive", color: '#727081' }}
          >
            {"Locations".split('').map((letter, index) => (
              <span key={index} className="wavy-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          {/* Location Cards Container */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Gurgaon Card */}
            <div 
              ref={el => locationCardsRef.current[0] = el}
              className="scroll-animate-scale location-card bg-gray-400 rounded-lg shadow-lg overflow-hidden w-full sm:w-[380px] transform transition duration-300 hover:scale-105"
            >
              <div className="p-4 bg-gray-400">
                <img 
                  src={gurgaonImg} 
                  alt="Gurgaon" 
                  className="w-full h-64 sm:h-96 object-cover" 
                  style={{objectPosition:'42% center'}}
                />
              </div>
              <div className="p-4 min-h-[150px] relative">
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "Avenir" }}>
                  {"Gurugram".split('').map((letter, index) => (
                    <span key={index} className="wavy-letter">
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </h2>
                
                {/* Button with proper spacing */}
                <div className="mt-6 sm:mt-10">
                  <Link to="/Instructions">
                    <button 
                      className="bg-gray-700 px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-900 transition-colors duration-300 relative z-10 text-lg sm:text-xl text-gray-400"
                      style={{ fontFamily: "Avenir" }}
                    >
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mussoorie Card */}
            <div 
              ref={el => locationCardsRef.current[1] = el}
              className="scroll-animate-scale location-card bg-gray-400 rounded-lg shadow-lg overflow-hidden w-full sm:w-[380px] transform transition duration-300 hover:scale-105"
            >
              <div className="p-4 bg-gray-400">
                <img 
                  src={mussoorieImg} 
                  alt="Mussoorie" 
                  className="w-full h-64 sm:h-96 object-cover" 
                />
              </div>
              <div className="p-4 min-h-[150px]">
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-2" style={{ fontFamily: "Avenir" }}>
                  {"Mussoorie".split('').map((letter, index) => (
                    <span key={index} className="wavy-letter">
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </h2>
                <p className="mt-4 text-gray-600 font-medium text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: "Avenir" }}>
                  Coming Soon…!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs">
        <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-8 md:px-16">
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Title with wavy animation - Cursive Font */}
          <h1 
            ref={faqTitleRef}
            className="scroll-animate-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 md:mb-20 text-center relative z-10"
            style={{ fontFamily: "cursive", color: '#727081' }}
          >
            {"Frequently Asked Questions".split('').map((letter, index) => (
              <span key={index} className="wavy-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          {/* FAQ Items Container */}
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
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl">
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
                        <a href="tel:+918279845322" className="whatsapp-link">
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

          {/* Contact CTA */}
          <div className="mt-12 sm:mt-16 text-center relative z-10">
            <p 
              className="text-base sm:text-lg md:text-xl mb-6"
              style={{ fontFamily: "Avenir", color: '#a8a6b5' }}
            >
              Still have questions?
            </p>
            <a 
              href="https://wa.me/918279845322" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: "Avenir" }}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.215"/>
              </svg>
              Contact us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section id="creator">
        <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-8 md:px-16">
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Title */}
          <h1 
            ref={creatorTitleRef}
            className="scroll-animate-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20 relative z-10"
            style={{ fontFamily: "cursive", color: '#727081' }}
          >
            {"The Architect".split('').map((letter, index) => (
              <span key={index} className="wavy-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto relative z-10">
            
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
                <a 
                  href="#locations"
                  className="bg-gray-700 hover:bg-gray-900 text-gray-300 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
                  style={{ fontFamily: "Avenir" }}
                >
                  Experience the Mystery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}