import React, { useEffect, useRef } from "react";
import bgImage from "../assets/mystery.jpeg";
import creatorImg from "../assets/Creator.jpeg";
import { Link } from "react-router-dom";

export default function Creator() {
  // Refs for animation elements
  const creatorImageRef = useRef(null);
  const creatorTitleRef = useRef(null);
  const creatorContentRef = useRef([]);

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

        /* Back button */
        .back-button {
          position: fixed;
          top: 2rem;
          left: 2rem;
          z-index: 50;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(114, 112, 129, 0.3);
          border-radius: 50px;
          padding: 0.75rem 1.5rem;
          color: #727081;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .back-button:hover {
          background: rgba(114, 112, 129, 0.2);
          border-color: rgba(114, 112, 129, 0.6);
          transform: translateY(-2px);
          color: #8b8999;
        }

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

          .back-button {
            top: 1rem;
            left: 1rem;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* Back Button */}
      <Link to="/" className="back-button" style={{ fontFamily: "Avenir" }}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

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
              style={{ fontFamily: "Avenir", color: '#727081' }}
            >
              {"Meet the Creator".split('').map((letter, index) => (
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
                    className="text-base sm:text-lg institution"
                    style={{ fontFamily: "Avenir" }}
                  >
                    IIT Roorkee & ISB Graduate
                  </p>
                </div>
              </div>

              {/* Creator Story */}
              <div className="space-y-6">
                
                {/* Background Card */}
                <div 
                  ref={el => creatorContentRef.current[0] = el}
                  className="scroll-animate content-card"
                >
                  <h3 
                    className="text-xl sm:text-2xl font-bold mb-4 highlight"
                    style={{ fontFamily: "Avenir" }}
                  >
                    The Journey
                  </h3>
                  <p 
                    className="text-sm sm:text-base leading-relaxed mb-4"
                    style={{ fontFamily: "Avenir", color: '#a8a6b5' }}
                  >
                    <span className="highlight">Eshan</span> is an <span className="institution">IIT Roorkee</span> and <span className="institution">Indian School of Business (ISB)</span> graduate. The game evolved from being a different-and-fun birthday party idea at ISB for a group of 5 to being one of the most popular activities at ISB.
                  </p>
                  <p 
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ fontFamily: "Avenir", color: '#a8a6b5' }}
                  >
                    At ISB, <span className="highlight">3 different stories</span> were played by <span className="highlight">180 friends</span> across <span className="highlight">15 different games</span>, making it a campus sensation.
                  </p>
                </div>

                {/* Stats Cards */}
                <div 
                  ref={el => creatorContentRef.current[1] = el}
                  className="scroll-animate grid grid-cols-3 gap-4"
                >
                  <div className="stat-card">
                    <span className="stat-number">180</span>
                    <span className="stat-label">Players at ISB</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">15</span>
                    <span className="stat-label">Games Hosted</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">3</span>
                    <span className="stat-label">Unique Stories</span>
                  </div>
                </div>

                {/* Vision Card */}
                <div 
                  ref={el => creatorContentRef.current[2] = el}
                  className="scroll-animate content-card"
                >
                  <h3 
                    className="text-xl sm:text-2xl font-bold mb-4 highlight"
                    style={{ fontFamily: "Avenir" }}
                  >
                    The Vision
                  </h3>
                  <p 
                    className="text-sm sm:text-base leading-relaxed mb-4"
                    style={{ fontFamily: "Avenir", color: '#a8a6b5' }}
                  >
                    Once out of ISB, he aimed to bring the idea to professional scale. Now with his first story at <span className="highlight">Gurugram</span>, he is looking to establish roots in different parts of the country.
                  </p>
                  <p 
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ fontFamily: "Avenir", color: '#a8a6b5' }}
                  >
                    <span className="highlight">New city, new story.</span> Each location brings its own unique mystery inspired by local culture and history.
                  </p>
                </div>

                {/* Quote */}
                <div 
                  ref={el => creatorContentRef.current[3] = el}
                  className="scroll-animate quote"
                  style={{ fontFamily: "Avenir" }}
                >
                  Through this game, I want people to not just watch thriller movies, but be a part of them and live them, for the entire stay!
                </div>

                {/* CTA */}
                <div 
                  ref={el => creatorContentRef.current[4] = el}
                  className="scroll-animate text-center lg:text-left pt-4"
                >
                  <Link to="/#locations">
                    <button 
                      className="bg-gray-700 hover:bg-gray-900 text-gray-300 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                      style={{ fontFamily: "Avenir" }}
                    >
                      Experience the Mystery
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}