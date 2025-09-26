import React, { useState } from "react";
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
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);

  // Navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "The Game", href: "/#about-game" },
    { name: "The Architect", href: "/creator" },
    { name: "Locations", href: "/#locations" },
    { name: "FAQs", href: "/#faqs" }
  ];

  // Array of property images
  const propertyImages = [
    secondImg,
    sixthImg,
    fifthImg,
    forthImg,
    seventhImg,
    Img,
    thirdImg,
    eighthImg,
    ninthImg,
    tenthImg,
    eleventhImg,
    forteenthImg,
    twelvethImg,
    thirteenthImg,
    fifteenthImg,
    sixteenthImg,
    seventeenthImg,
    eighteenImg
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (newIndex) => {
    if (newIndex !== currentImageIndex) {
      setIsImageTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(newIndex);
        setIsImageTransitioning(false);
      }, 150);
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
          .wavy-letter:nth-child(16) { animation-delay: 1.6s; }
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

          /* Desktop styles */
          .desktop-layout {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6rem 4rem 2rem 4rem;
            min-height: 100vh;
          }

          .desktop-content {
            flex: 1;
            margin-right: 2rem;
          }

          .desktop-title {
            font-size: 3rem;
            margin-bottom: 3rem;
            text-align: left;
            margin-left: 4rem;
            white-space: nowrap;
          }

          .desktop-list {
            margin-left: 4rem;
            margin-right: 2rem;
            font-size: 1.25rem;
            margin-top: 2rem;
            line-height: 2.5;
          }

          .desktop-contact {
            margin-left: 4rem;
            margin-right: 2rem;
            font-size: 1.5rem;
            margin-top: 2rem;
            font-style: italic;
          }

          .desktop-carousel {
            flex-shrink: 0;
            margin-right: 6rem;
            display: flex;
            align-items: center;
          }

          /* Image fade transition */
          .image-container {
            transition: opacity 0.3s ease-in-out;
          }

          .image-container.transitioning {
            opacity: 0;
          }

          /* Mobile styles */
          @media (max-width: 768px) {
            .desktop-layout {
              flex-direction: column !important;
              padding: 2rem 1rem !important;
              align-items: center !important;
            }
            
            .desktop-content {
              width: 100% !important;
              margin-right: 0 !important;
              order: 1;
            }
            
            .desktop-title {
              font-size: clamp(1.2rem, 4vw, 2rem) !important;
              margin-left: 0 !important;
              margin-bottom: 2rem !important;
              text-align: center !important;
              line-height: 1.3 !important;
              white-space: nowrap !important;
            }
            
            .desktop-list {
              margin-left: 0 !important;
              margin-right: 0 !important;
              font-size: 0.9rem !important;
              padding: 0 1rem !important;
              text-align: left !important;
              line-height: 2;
            }
            
            .desktop-contact {
              margin-left: 0 !important;
              margin-right: 0 !important;
              font-size: 1rem !important;
              text-align: center !important;
              margin-top: 2rem !important;
              padding: 0 1rem !important;
              white-space: normal !important;
              line-height: 1.4 !important;
            }
            
            .desktop-carousel {
              order: 2;
              margin-right: 0 !important;
              margin-top: 3rem !important;
              width: 100% !important;
              display: flex;
              justify-content: center;
            }
            
            .mobile-image {
              width: 280px !important;
              height: 200px !important;
            }
          }

          @media (max-width: 480px) {
            .desktop-title {
              font-size: clamp(0.7rem, 3vw, 1.2rem) !important;
              white-space: nowrap !important;
              overflow: visible !important;
            }
            
            .desktop-list {
              font-size: 0.8rem !important;
            }
            
            .desktop-contact {
              font-size: 0.9rem !important;
            }
            
            .mobile-image {
              width: 250px !important;
              height: 180px !important;
            }
          }
        `}
    </style>

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

    <div 
      className="bg-cover bg-center desktop-layout"
      style={{ 
        backgroundImage: `url(${backgroundImg})`,
        filter: 'brightness(1.2)' 
      }}
    >
      {/* Left side - Instructions content */}
      <div className="relative z-10 text-white desktop-content">
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

        <div className="space-y-8">
          {/* About The Property Section */}
          <div>
            <div className="desktop-list" style={{ fontFamily: "Avenir" }}>
              <div>4 bedrooms, 4 bathrooms—plenty of space to plot and prepare.</div>
              <div>Indoor pool (open till 7:30pm) for a pre-mystery dive.</div>
              <div>Pool table and games to test your strategy between clues.</div>
              <div>In-home cinema for group debriefs.</div>
              <div>BYOB — your drinks, our bar can brew suspense for you</div>
              <div>Dining available on order—fuel your next move.</div>
              <div>Ideal for 8–12 guests, where camaraderie and secrets intertwine.</div>
              <div>Check-in from 5pm, check-out by 10am</div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="pt-4">
            <p className="desktop-contact" style={{ fontFamily: "Avenir" }}>
              For further queries and booking the experience, WhatsApp: +91 8279845322
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Image Carousel */}
      <div className="relative z-10 desktop-carousel">
        {/* Image Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300 z-20"
            style={{ fontSize: '20px' }}
          >
            ←
          </button>

          {/* Main Image with fade effect */}
          <div className={`image-container ${isImageTransitioning ? 'transitioning' : ''}`}>
            <img 
              src={propertyImages[currentImageIndex]} 
              alt={`Property Image ${currentImageIndex + 1}`} 
              className="object-cover rounded-lg opacity-90 mobile-image"
              style={{ width: '480px', height: '280px' }}
            />
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300 z-20"
            style={{ fontSize: '20px' }}
          >
            →
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {propertyImages.length}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}