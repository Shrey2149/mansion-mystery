import React, { useState, useEffect } from "react";
import backgroundImg from "../assets/instructions-bg.png"; 
import Img from "../assets/secondPic.jpeg";
import secondImg from "../assets/thirdPic.png"
import thirdImg from "../assets/fourthPic.png"
import forthImg from "../assets/fifthPic.png"
import fifthImg from "../assets/sixthPic.png"
import sixthImg from "../assets/seventhPic.png"
import seventhImg from "../assets/eighthPic.png"
import eighthImg from "../assets/ninthPic.png"
import ninthImg from "../assets/eleventhPic.png"
import tenthImg from "../assets/twelvethPic.png"
import eleventhImg from "../assets/thirteenthPic.png"
import twelvethImg from "../assets/forteenthPic.png"
import thirteenthImg from "../assets/fifteenthPic.png"
import forteenthImg from "../assets/sixteenPic.png"
import fifteenthImg from "../assets/seventeenPic.png"
import sixteenthImg from "../assets/eighteenPic.png"
import seventeenthImg from "../assets/nineteenPic.png"
import eighteenImg from "../assets/twentyPic.png"
import { Link } from "react-router-dom";

export default function Instructions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const [allImagesPreloaded, setAllImagesPreloaded] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "The Game", href: "/#about-game" },
    { name: "Locations", href: "/#locations" },
    { name: "FAQs", href: "/#faqs" },
    { name: "The Architect", href: "/creator" }
  ];

  const propertyImages = [
    secondImg, sixthImg, fifthImg, forthImg, seventhImg, Img,
    thirdImg, eighthImg, ninthImg, tenthImg, eleventhImg,
    forteenthImg, twelvethImg, thirteenthImg, fifteenthImg,
    sixteenthImg, seventeenthImg, eighteenImg
  ];

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = propertyImages.map((src, index) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setAllImagesPreloaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setAllImagesPreloaded(true);
      }
    };

    preloadImages();
  }, [propertyImages]);

  // Ensure the instructions page always opens scrolled to the top
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      // fallback
      window.scrollTo(0, 0);
    }
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

  const changeImage = (newIndex) => {
    if (newIndex !== currentImageIndex) {
      setCurrentImageIndex(newIndex);
    }
  };

  const nextImage = () => {
    const newIndex = currentImageIndex === propertyImages.length - 1 ? 0 : currentImageIndex + 1;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = currentImageIndex === 0 ? propertyImages.length - 1 : currentImageIndex - 1;
    changeImage(newIndex);
  };

  return (
    <>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        /* Force text color for this component */
        body, .instructions-section, nav, .desktop-content, .desktop-title, .desktop-list, .desktop-contact, h1, h2, p, span, a, button {
          color: #E8E3E3 !important;
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
        .wavy-letter:nth-child(31) { animation-delay: 3s; }
        .wavy-letter:nth-child(32) { animation-delay: 3.1s; }
        .wavy-letter:nth-child(33) { animation-delay: 3.2s; }
        .wavy-letter:nth-child(34) { animation-delay: 3.3s; }
        .wavy-letter:nth-child(35) { animation-delay: 3.4s; }

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

        .instructions-section {
          position: relative;
          background-image: url(${backgroundImg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 100vh;
        }

        .instructions-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.2);
          z-index: 0;
        }

        .desktop-layout {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8rem 4rem 4rem 4rem;
          min-height: 100vh;
          max-width: 1400px;
          margin: 0 auto;
        }

        .desktop-content {
          flex: 1;
          margin-right: 3rem;
          max-width: 600px;
        }

        .desktop-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          margin-bottom: 3rem;
          text-align: left;
          color: #E8E3E3;
          white-space: nowrap;
        }

        .desktop-list {
          font-size: 1.25rem;
          margin-top: 2rem;
          line-height: 2.5;
          color: #E8E3E3;
        }

        .desktop-list > div {
          margin-bottom: 0.75rem;
        }

        .desktop-contact {
          font-size: 1.5rem;
          margin-top: 3rem;
          font-style: italic;
          color: #E8E3E3;
          line-height: 1.6;
        }

        .desktop-carousel {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .carousel-container {
          position: relative;
          width: 500px;
          height: 320px;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .carousel-track {
          display: flex;
          width: ${propertyImages.length * 100}%;
          height: 100%;
          transform: translateX(-${currentImageIndex * (100 / propertyImages.length)}%);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .carousel-slide {
          width: ${100 / propertyImages.length}%;
          height: 100%;
          flex-shrink: 0;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .loading-spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 12px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #E8E3E3;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          padding: 12px 16px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
          transition: all 0.3s ease;
          z-index: 10;
          user-select: none;
        }

        .carousel-arrow:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-arrow:active {
          transform: translateY(-50%) scale(0.95);
        }

        .carousel-arrow.prev {
          left: 15px;
        }

        .carousel-arrow.next {
          right: 15px;
        }

        .image-counter {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          z-index: 10;
          backdrop-filter: blur(5px);
        }

        @media (max-width: 1024px) {
          .desktop-layout {
            padding: 7rem 2rem 3rem 2rem;
          }

          .desktop-content {
            margin-right: 2rem;
          }

          .desktop-title {
            font-size: 2.5rem;
            margin-bottom: 2rem;
          }

          .desktop-list {
            font-size: 1.1rem;
            line-height: 2.2;
          }

          .desktop-contact {
            font-size: 1.3rem;
            margin-top: 2rem;
          }

          .carousel-container {
            width: 400px;
            height: 280px;
          }
        }

        @media (max-width: 768px) {
          .instructions-section {
            background-attachment: scroll;
          }

          .desktop-layout {
            flex-direction: column;
            padding: 5rem 1.5rem 2rem 1.5rem;
            align-items: center;
          }
          
          .desktop-content {
            width: 100%;
            margin-right: 0;
            margin-bottom: 3rem;
            max-width: 100%;
          }
          
          .desktop-title {
            font-size: 1.75rem;
            margin-bottom: 2rem;
            text-align: center;
            line-height: 1.3;
          }
          
          .desktop-list {
            font-size: 1rem;
            padding: 0 0.5rem;
            text-align: left;
            line-height: 2;
          }

          .desktop-list > div {
            margin-bottom: 0.5rem;
          }
          
          .desktop-contact {
            font-size: 1.1rem;
            text-align: center;
            margin-top: 2rem;
            padding: 0 0.5rem;
            line-height: 1.5;
          }
          
          .desktop-carousel {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          
          .carousel-container {
            width: 90%;
            max-width: 350px;
            height: 240px;
          }

          .carousel-arrow {
            padding: 10px 14px;
            font-size: 18px;
          }

          .carousel-arrow.prev {
            left: 10px;
          }

          .carousel-arrow.next {
            right: 10px;
          }

          .image-counter {
            bottom: 15px;
            padding: 6px 16px;
            font-size: 13px;
          }
        }

        @media (max-width: 640px) {
          .desktop-layout {
            padding: 5rem 1rem 2rem 1rem;
          }

          .desktop-title {
            font-size: 1.5rem;
          }

          .desktop-list {
            font-size: 0.9rem;
          }

          .desktop-contact {
            font-size: 1rem;
          }

          .carousel-container {
            width: 100%;
            max-width: 320px;
            height: 220px;
          }

          .wavy-letter {
            animation: wave 6s ease-in-out infinite;
          }
        }

        @media (max-width: 480px) {
          .desktop-title {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
          }
          
          .desktop-list {
            font-size: 0.85rem;
            line-height: 1.8;
          }
          
          .desktop-contact {
            font-size: 0.95rem;
            margin-top: 1.5rem;
          }
          
          .carousel-container {
            max-width: 280px;
            height: 200px;
          }

          .carousel-arrow {
            padding: 8px 12px;
            font-size: 16px;
          }

          .image-counter {
            bottom: 12px;
            padding: 5px 14px;
            font-size: 12px;
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
                  item.href.startsWith('#') || item.href.startsWith('/#') ? (
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
                item.href.startsWith('#') || item.href.startsWith('/#') ? (
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

      {/* Instructions Section */}
      <section className="instructions-section">
        <div className="desktop-layout">
          {/* Left side - Instructions content */}
          <div className="desktop-content">
            <h1 
              className="font-bold desktop-title"
              style={{ fontFamily: "Avenir" }}
            >
              {"About The Property (Gurugram)".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            <div className="desktop-list" style={{ fontFamily: "Avenir" }}>
              <div>4 bedrooms, 4 bathrooms—plenty of space to plot and prepare</div>
              <div>Indoor pool (open till 7:30pm) for a pre-mystery dive</div>
              <div>Pool table and games to test your strategy between clues</div>
              <div>In-home cinema for group debriefs</div>
              <div>BYOB — your drinks, our bar can brew suspense for you</div>
              <div>Dining available on order—fuel your next move</div>
              <div>Ideal for 8–12 guests, where camaraderie and secrets intertwine</div>
              <div>Check-in from 5pm, check-out by 10am</div>
            </div>

            <p className="desktop-contact" style={{ fontFamily: "Avenir" }}>
              For further queries and booking the experience, WhatsApp: +91 8279845322
            </p>
          </div>

          {/* Right side - Image Carousel */}
          <div className="desktop-carousel">
            {!allImagesPreloaded ? (
              <div className="carousel-container">
                <div className="loading-spinner">
                  <div className="spinner"></div>
                </div>
              </div>
            ) : (
              <div className="carousel-container">
                <button 
                  onClick={prevImage}
                  className="carousel-arrow prev"
                  aria-label="Previous image"
                >
                  ←
                </button>

                <div className="carousel-track">
                  {propertyImages.map((image, index) => (
                    <div key={index} className="carousel-slide">
                      <img 
                        src={image} 
                        alt={`Luxury villa interior view ${index + 1}`} 
                        className="carousel-image"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>

                <button 
                  onClick={nextImage}
                  className="carousel-arrow next"
                  aria-label="Next image"
                >
                  →
                </button>

                <div className="image-counter">
                  {currentImageIndex + 1} / {propertyImages.length}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}