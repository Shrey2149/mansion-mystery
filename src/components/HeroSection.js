import React, { useState, useEffect, useRef } from "react";
import bgImage from "../assets/mystery.jpeg";
import backgroundImg from "../assets/instructions-bg.png"; 
import gurgaonImg from "../assets/Gurgaon_image.jpeg";
import mussoorieImg from "../assets/Mussourrie_image.png";
import logoImg from "../assets/Logo.jpeg";
import { Link } from "react-router-dom";
import { useAudio } from "../components/AudioContext.js";

export default function HeroSection() {
  const { startAudio } = useAudio();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  
  const gameTextRefs = useRef([]);
  const gameTitleRef = useRef(null);
  const locationsTitleRef = useRef(null);
  const locationCardsRef = useRef([]);
  const faqTitleRef = useRef(null);
  const faqItemsRef = useRef([]);

  useEffect(() => {
    startAudio();
  }, [startAudio]);

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
      answer: "The game typically lasts 3–5 hours, but the timing can vary depending on your group's detective skills."
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

        /* ===== HERO SECTION ===== */
        .mm-hero {
          position: relative;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 100vh;
        }

        .mm-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(201, 168, 76, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(139, 47, 63, 0.05) 0%, transparent 50%),
            linear-gradient(180deg, rgba(10, 10, 15, 0.4) 0%, rgba(10, 10, 15, 0.2) 40%, rgba(10, 10, 15, 0.6) 100%);
          z-index: 1;
        }

        .mm-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.5) 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* Floating fog particles */
        .mm-fog {
          position: absolute;
          inset: 0;
          z-index: 2;
          overflow: hidden;
          pointer-events: none;
        }

        .mm-fog-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: subtle-drift 20s ease-in-out infinite;
        }

        .mm-fog-orb:nth-child(1) {
          width: 400px; height: 400px;
          background: rgba(201, 168, 76, 0.07);
          top: 10%; left: -5%;
          animation-delay: 0s;
          animation-duration: 25s;
        }

        .mm-fog-orb:nth-child(2) {
          width: 300px; height: 300px;
          background: rgba(139, 47, 63, 0.06);
          top: 60%; right: -5%;
          animation-delay: -8s;
          animation-duration: 22s;
        }

        .mm-fog-orb:nth-child(3) {
          width: 250px; height: 250px;
          background: rgba(201, 168, 76, 0.05);
          bottom: 10%; left: 40%;
          animation-delay: -15s;
          animation-duration: 28s;
        }

        .mm-hero-content {
          position: relative;
          z-index: 10;
        }

        .mm-subtitle {
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          font-size: clamp(0.7rem, 1.5vw, 1rem);
        }

        .mm-tagline {
          font-family: var(--font-heading);
          font-weight: 400;
          font-style: italic;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
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
        .wavy-letter:nth-child(31) { animation-delay: 3.0s; }
        .wavy-letter:nth-child(32) { animation-delay: 3.1s; }
        .wavy-letter:nth-child(33) { animation-delay: 3.2s; }
        .wavy-letter:nth-child(34) { animation-delay: 3.3s; }

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

        /* ===== HERO BOTTOM BAR ===== */
        .mm-hero-bar {
          background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 15, 0.9) 40%);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(201, 168, 76, 0.08);
        }

        .mm-hero-bar-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold-dim), transparent);
        }

        /* ===== SCROLL INDICATOR ===== */
        .mm-scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.6;
          margin-top: 1.5rem;
        }

        .mm-scroll-indicator svg {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        /* ===== ABOUT THE GAME ===== */
        .mm-about {
          position: relative;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .mm-about::after {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at center, rgba(10, 10, 15, 0.6) 0%, rgba(10, 10, 15, 0.85) 100%);
          z-index: 0;
        }

        .mm-section-heading {
          font-family: var(--font-heading);
          color: var(--text-primary);
          position: relative;
          display: inline-block;
        }

        .mm-gold-divider {
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          margin: 1.5rem auto;
          border-radius: 2px;
        }

        .mm-game-text {
          font-family: var(--font-body);
          font-weight: 500;
          color: var(--text-primary);
          text-shadow: 0 0 40px rgba(201, 168, 76, 0.15), 2px 2px 8px rgba(0, 0, 0, 0.6);
          letter-spacing: 0.02em;
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

        /* ===== LOCATIONS ===== */
        .mm-locations, .mm-faqs {
          position: relative;
          background-image: url(${backgroundImg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .mm-locations::after, .mm-faqs::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 15, 0.8);
          z-index: 0;
        }

        .mm-location-card {
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mm-location-card:hover {
          transform: translateY(-8px);
          border-color: rgba(201, 168, 76, 0.35);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(201, 168, 76, 0.08);
        }

        .mm-location-card img {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mm-location-card:hover img {
          transform: scale(1.05);
        }

        .mm-location-img-wrap {
          overflow: hidden;
          border-radius: 10px;
          margin: 0.75rem;
        }

        .mm-card-title {
          font-family: var(--font-heading);
          color: var(--gold);
          font-weight: 600;
        }

        .mm-coming-soon {
          font-family: var(--font-body);
          color: var(--gold-dim);
          font-weight: 500;
          background: linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* ===== FAQS ===== */
        .mm-faq-item {
          border: 1px solid rgba(201, 168, 76, 0.1);
          border-radius: 14px;
          background: var(--card-bg);
          backdrop-filter: blur(15px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 1rem;
        }

        .mm-faq-item:hover {
          border-color: rgba(201, 168, 76, 0.3);
          background: rgba(201, 168, 76, 0.06);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        .mm-faq-question {
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-body);
          font-weight: 600;
          color: var(--text-primary);
          transition: color 0.3s ease;
        }

        .mm-faq-question:hover {
          color: var(--gold-light);
        }

        .mm-faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      padding 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 0 1.5rem;
          color: var(--text-secondary);
          line-height: 1.7;
          font-family: var(--font-body);
        }

        .mm-faq-answer.open {
          max-height: 500px;
          padding: 0 1.5rem 1.25rem;
        }

        .mm-faq-icon {
          transition: transform 0.3s ease;
          color: var(--gold);
          flex-shrink: 0;
          margin-left: 1rem;
        }

        .mm-faq-icon.rotate {
          transform: rotate(180deg);
        }

        .mm-whatsapp-link {
          color: var(--gold-light);
          text-decoration: underline;
          text-decoration-color: rgba(201, 168, 76, 0.4);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .mm-whatsapp-link:hover {
          color: var(--gold);
          text-decoration-color: var(--gold);
        }

        /* ===== INSTAGRAM BUTTON ===== */
        .mm-insta-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          transition: opacity 0.3s ease;
        }

        .mm-insta-btn:hover {
          opacity: 0.8;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 640px) {
          .wavy-letter {
            animation: wave 6s ease-in-out infinite;
          }
          
          .mm-hero, .mm-about, .mm-locations, .mm-faqs {
            background-attachment: scroll;
          }

          .mm-hero-content {
            padding-top: 80px;
          }

          .mm-scroll-indicator {
            bottom: 120px;
          }

          .mm-faq-question {
            padding: 1rem;
          }

          .mm-faq-answer {
            padding: 0 1rem;
          }

          .mm-faq-answer.open {
            padding: 0 1rem 1rem;
          }
        }
      `}</style>

      {/* ===== NAVIGATION BAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 mm-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-18">
            <div className="flex-shrink-0 mm-insta-btn">
              <a href="https://www.instagram.com/mysterymansion.in?igsh=aXZhenZydmFoYjR4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  minWidth: '32px',
                  minHeight: '32px',
                  flexShrink: 0,
                  position: 'relative'
                }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    style={{ 
                      width: '20px', 
                      height: '20px', 
                      display: 'block',
                      position: 'absolute',
                      top: '50%',
                      left: 'calc(50% - 0.6px)',
                      transform: 'translate(-50%, -50%)'
                    }}
                    viewBox="0 0 24 24" 
                    fill="white"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {navItems.map((item, index) => (
                  item.href.startsWith('#') ? (
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
                item.href.startsWith('#') ? (
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

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="mm-hero">
        {/* Atmospheric fog orbs */}
        <div className="mm-fog">
          <div className="mm-fog-orb"></div>
          <div className="mm-fog-orb"></div>
          <div className="mm-fog-orb"></div>
        </div>

        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-44 sm:pb-40 mm-hero-content">
          <div className="w-full max-w-4xl space-y-4 sm:space-y-5 md:space-y-6">
            <p className="mm-subtitle text-center">
              World's Only
            </p>
            
            <h1 className="text-center px-2 my-0">
              <img
                src={logoImg}
                alt="Mystery Mansion Logo"
                className="mx-auto block h-28 sm:h-36 md:h-48 lg:h-56 my-0"
                style={{
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 40px rgba(201, 168, 76, 0.15))'
                }}
              />
            </h1>

            <p className="mm-tagline text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center px-2">
              {"One group. One mansion. One night.".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </p>

            <div className="flex justify-center pt-6 sm:pt-8 md:pt-12">
              <Link to="/Instructions">
                <button className="mm-cta">
                  Book Now
                </button>
              </Link>
            </div>
            {/* Scroll Indicator */}
            <div className="mm-scroll-indicator hidden sm:flex">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
              </svg>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 mm-hero-bar py-3 sm:py-4 md:py-5 px-4 z-40">
            <div className="max-w-7xl mx-auto text-center space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg px-2"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', letterSpacing: '0.03em' }}>
                Stay in a premium villa with a group of friends or colleagues
              </p>
              <div className="w-32 sm:w-48 md:w-64 lg:w-80 mx-auto mm-hero-bar-divider"></div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg px-2"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', letterSpacing: '0.03em' }}>
                Solve a real-life mystery game during the stay
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT THE GAME ===== */}
      <section id="about-game" className="mm-about">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 sm:py-24">
          <div className="relative z-10 w-full text-center max-w-6xl mx-auto">
            <h1 
              ref={gameTitleRef}
              className="scroll-animate-up text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-heading)", color: 'var(--text-primary)' }}
            >
              {"About the Game".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            <div className="mm-gold-divider"></div>

            <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-10 md:space-y-14 mt-8 sm:mt-12">
              {gameTextLines.map((line, index) => (
                <p 
                  key={index}
                  ref={el => gameTextRefs.current[index] = el}
                  className="scroll-animate mm-game-text text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center max-w-4xl leading-relaxed px-4"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATIONS ===== */}
      <section id="locations" className="mm-locations">
        <div className="min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 px-4">
          <h1 
            ref={locationsTitleRef}
            className="scroll-animate-up text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10 sm:mb-16 text-center relative z-10"
            style={{ fontFamily: "var(--font-heading)", color: 'var(--text-primary)' }}
          >
            {"Locations".split('').map((letter, index) => (
              <span key={index} className="wavy-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto relative z-10 w-full">
            {/* Gurugram Card */}
            <div 
              ref={el => locationCardsRef.current[0] = el}
              className="scroll-animate-scale mm-location-card w-full sm:w-[calc(50%-1rem)] max-w-[400px] mx-auto"
            >
              <div className="mm-location-img-wrap">
                <img 
                  src={gurgaonImg}
                  alt="Gurgaon" 
                  className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg" 
                  style={{objectPosition:'42% center'}}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="mm-card-title text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
                  {"Gurugram".split('').map((letter, index) => (
                    <span key={index} className="wavy-letter">
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </h2>
                
                <Link to="/Instructions">
                  <button className="mm-cta text-sm w-full sm:w-auto">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Mussoorie Card */}
            <div 
              ref={el => locationCardsRef.current[1] = el}
              className="scroll-animate-scale mm-location-card w-full sm:w-[calc(50%-1rem)] max-w-[400px] mx-auto"
            >
              <div className="mm-location-img-wrap">
                <img 
                  src={mussoorieImg}
                  alt="Mussoorie" 
                  className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg" 
                />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="mm-card-title text-xl sm:text-2xl md:text-3xl mb-2">
                  {"Mussoorie".split('').map((letter, index) => (
                    <span key={index} className="wavy-letter">
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </h2>
                <p className="mm-coming-soon mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl">
                  Coming Soon…!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQS ===== */}
      <section id="faqs" className="mm-faqs">
        <div className="min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 px-4">
          <h1 
            ref={faqTitleRef}
            className="scroll-animate-up text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10 sm:mb-16 text-center relative z-10 px-2"
            style={{ fontFamily: "var(--font-heading)", color: 'var(--text-primary)' }}
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
                className="scroll-animate mm-faq-item"
              >
                <div 
                  className="mm-faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg pr-2">
                    {faq.question}
                  </span>
                  <svg 
                    className={`mm-faq-icon w-5 h-5 sm:w-6 sm:h-6 ${openFAQ === index ? 'rotate' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div 
                  className={`mm-faq-answer ${openFAQ === index ? 'open' : ''}`}
                >
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    {index === 8 ? (
                      <>
                        Yes! Our premium properties often get fully booked 1–2 months in advance on other platforms. For availability, reach out to us on WhatsApp at{' '}
                        <a href="https://wa.me/918279845322" className="mm-whatsapp-link">
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
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
            >
              Still have questions?
            </p>
            <a 
              href="https://wa.me/918279845322" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mm-cta inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              style={{
                background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.15) 0%, rgba(37, 211, 102, 0.05) 100%)',
                borderColor: '#25D366',
                color: '#6ee7a0'
              }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
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