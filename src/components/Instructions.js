import React, { useState, useEffect, useMemo, useRef } from "react";
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
import logoImg from "../assets/Logo.jpeg";
import seventeenPic from "../assets/seventeenPic.png";
import { Link } from "react-router-dom";
import gurgaon_image from "../assets/Gurgaon_image.jpeg";

export default function Instructions() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [allImagesPreloaded, setAllImagesPreloaded] = useState(false);
  const datesSectionRef = useRef(null);
  const privateExperienceSectionRef = useRef(null);

  const scrollToDates = () => {
    datesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrivateExperience = () => {
    privateExperienceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const showDates = [
    { month: 'MAR', day: 21, label: 'MARCH', image: Img, soldOut: true },
    { month: 'MAR', day: 27, label: 'MARCH', image: Img, soldOut: true },
    { month: 'MAR', day: 28, label: 'MARCH', image: Img, soldOut: true },
    { month: 'MAR', day: 30, label: 'MARCH', image: Img, soldOut: false },
    { month: 'APR', day: 3, label: 'APRIL', image: fifthImg, soldOut: false },
    { month: 'APR', day: 4, label: 'APRIL', image: fifthImg, soldOut: false },
    { month: 'APR', day: 18, label: 'APRIL', image: fifthImg, soldOut: true },
    { month: 'APR', day: 30, label: 'APRIL', image: fifthImg, soldOut: false },
    { month: 'MAY', day: 2, label: 'MAY', image: gurgaon_image, soldOut: false },
    { month: 'MAY', day: 15, label: 'MAY', image: gurgaon_image, soldOut: false },
    { month: 'JUNE', day: 11, label: 'JUNE', image: seventeenPic, soldOut: false },
    { month: 'JUNE', day: 13, label: 'JUNE', image: seventeenPic, soldOut: false },
    { month: 'JUNE', day: 27, label: 'JUNE', image: seventeenPic, soldOut: false },
    { month: 'JULY', day: 23, label: 'JULY', image: tenthImg, soldOut: false }
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "The Game", href: "/#about-game" },
    { name: "Locations", href: "/#locations" },
    { name: "FAQs", href: "/#faqs" },
    { name: "The Architect", href: "/creator" }
  ];
  const propertyImages = useMemo(() => [
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
  ], []);


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
          color: #E8E3E3 ;
        }

        .property-btn {
          color: #000000 !important;
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
          padding: 2rem 4rem 1rem 4rem;
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
          text-align: center;
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
            text-align: center;
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

        /* Show Dates Section */
        .show-dates-section {
          position: relative;
          background-image: url(${backgroundImg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding-bottom: 4rem;
        }

        .show-dates-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.2);
          z-index: 0;
        }

        .show-dates-header {
          position: relative;
          z-index: 1;
          padding: 3rem 0 1rem 0;
          text-align: center;
        }

        .show-dates-header h2 {
          font-family: 'Avenir', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #E8E3E3 !important;
          letter-spacing: 0.1em;
          margin: 0;
          text-transform: uppercase;
        }

        .dates-grid {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          padding: 3rem 4rem;
          max-width: 1200px;
          margin: 0 auto;
          justify-content: center;
        }

        .date-card {
          width: 160px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }

        .date-card:hover {
          transform: translateY(-6px);
        }

        .date-card-img-wrapper {
          position: relative;
          width: 160px;
          height: 180px;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }

        .date-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .date-card.sold-out .date-card-img {
          filter: grayscale(100%);
        }

        .sold-out-overlay {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.65);
          color: #FFFFFF;
          font-family: 'Georgia', serif;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 6px 16px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .date-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: #FFFFFF;
          border-radius: 4px;
          padding: 4px 8px;
          text-align: center;
          min-width: 42px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }

        .date-badge-month {
          font-size: 0.55rem;
          font-weight: 700;
          color: #333 !important;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          line-height: 1;
          display: block;
          margin-bottom: 1px;
        }

        .date-badge-day {
          font-size: 1.25rem;
          font-weight: 700;
          color: #222 !important;
          line-height: 1.1;
          display: block;
        }

        .date-card-label {
          margin-top: 0.6rem;
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #E8E3E3 !important;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .date-card.highlight .date-card-label {
          color: #C5A930 !important;
        }

        .date-card.highlight .date-card-img-wrapper {
          box-shadow: 0 4px 20px rgba(197, 169, 48, 0.25);
        }

        @media (max-width: 768px) {
          .show-dates-header h2 {
            font-size: 2rem;
            letter-spacing: 0.1em;
          }

          .dates-grid {
            padding: 2rem 1.5rem;
            gap: 1.25rem;
          }

          .date-card {
            width: 140px;
          }

          .date-card-img-wrapper {
            width: 140px;
            height: 160px;
          }
        }

        @media (max-width: 480px) {
          .show-dates-header h2 {
            font-size: 1.5rem;
          }

          .dates-grid {
            padding: 1.5rem 1rem;
            gap: 1rem;
          }

          .date-card {
            width: 120px;
          }

          .date-card-img-wrapper {
            width: 120px;
            height: 140px;
          }

          .date-card-label {
            font-size: 0.8rem;
          }
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={logoImg}
                  alt="Mystery Mansion Logo"
                  style={{ height: "100px", width: "auto", borderRadius: "8px" }}
                />
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
        {/* Booking CTA Section */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          paddingTop: '100px',
          paddingBottom: '80px'
        }}>
          {/* First booking option */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            maxWidth: '900px'
          }}>
            <button
              style={{
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'Avenir',
                fontWeight: '900',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                minWidth: 'fit-content'
              }}
              onMouseEnter={(e) => { e.target.style.opacity = '0.9'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }}
              onClick={scrollToDates}
            >
              Join a Scheduled Mystery
            </button>
            <p style={{
              color: '#E8E3E3',
              fontSize: '1rem',
              fontFamily: 'Avenir',
              lineHeight: '1.6',
              margin: '0',
              maxWidth: '400px'
            }}>
              Book seats for our upcoming mystery events on pre-announced dates and solve the case with other guests.
            </p>
          </div>

          {/* OR separator */}
          <div style={{
            fontSize: '2rem',
            fontFamily: 'Avenir',
            fontWeight: '700',
            color: '#E8E3E3',
            margin: '0.5rem 0'
          }}>
            OR
          </div>

          {/* Second booking option */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            maxWidth: '900px'
          }}>
            <button
              style={{
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'Avenir',
                fontWeight: '900',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                minWidth: 'fit-content'
              }}
              onMouseEnter={(e) => { e.target.style.opacity = '0.9'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }}
              onClick={scrollToPrivateExperience}
            >
              Book a Private Mystery
            </button>
            <p style={{
              color: '#E8E3E3',
              fontSize: '1rem',
              fontFamily: 'Avenir',
              lineHeight: '1.6',
              margin: '0',
              maxWidth: '400px'
            }}>
              Reserve the entire experience for your group on a date of your choice (subject to availability).
            </p>
          </div>
        </div>

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

      {/* Show Dates Section */}
      <section className="show-dates-section" ref={datesSectionRef}>
        <div className="show-dates-header">
          <h2>Select an Event Date</h2>
        </div>
        <div className="dates-grid">
          {showDates.map((date, index) => (
            <div
              key={index}
              className={`date-card${date.soldOut ? ' sold-out' : ''}${date.highlight ? ' highlight' : ''}`}
            >
              <div className="date-card-img-wrapper">
                <img
                  src={date.image}
                  alt={`${date.label} ${date.day}`}
                  className="date-card-img"
                />
                <div className="date-badge">
                  <span className="date-badge-month">{date.month}</span>
                  <span className="date-badge-day">{date.day}</span>
                </div>
                {date.soldOut && (
                  <div className="sold-out-overlay">Sold Out</div>
                )}
              </div>
              <div className="date-card-label">{date.label}</div>
            </div>
          ))}
        </div>

        {/* WhatsApp Contact Section */}
        <div style={{ position: 'relative', zIndex: 1, padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Avenir', fontSize: '1.2rem', color: '#E8E3E3', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            To book your experience for any date, contact us now on WhatsApp
          </p>
          <a 
            href="https://wa.me/918279845322?text=Hi%20Mystery%20Mansion,%20I%20would%20like%20to%20book%20an%20experience"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '12px 28px',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              textDecoration: 'none',
              borderRadius: '8px',
              fontFamily: 'Avenir',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.488z"/>
            </svg>
            +91 8279845322
          </a>
        </div>
      </section>

      {/* Private Experience Section */}
      <section className="show-dates-section" ref={privateExperienceSectionRef}>
        <div className="show-dates-header">
          <h2>Book a Private Mystery</h2>
        </div>
        <div style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem', maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '4rem',
            flexWrap: 'wrap'
          }}>
            {/* Left side - Text content */}
            <div style={{ flex: 1, minWidth: '300px' }}>
              {/* Tagline */}
              <div style={{
                fontFamily: 'Avenir',
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#D4AF37',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                Exclusive Group Experience
              </div>

              

              {/* Description */}
              <div style={{
                fontFamily: 'Avenir',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#E8E3E3',
                maxWidth: '450px'
              }}>
                <p>Reserve the entire mansion for a private night of mystery and intrigue. With the complete experience dedicated to your group, you and your guests will step into an unfolding story filled with hidden clues, unexpected twists, and secrets waiting to be discovered.</p>
                <p>Choose your preferred date, gather your team of investigators, and work together to unravel the mystery before the night is over.</p>
                
              </div>
            </div>

            {/* Right side - Visual element */}
            <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '450px',
                overflow: 'hidden',
                borderRadius: '16px',
                boxShadow: '0 16px 48px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.4s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02) translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 24px 64px rgba(0, 0, 0, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.5)';
              }}>
                <img
                  src={seventeenthImg}
                  alt="Private mystery mansion experience"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    aspectRatio: '4 / 3',
                    objectFit: 'cover'
                  }}
                />
                {/* Overlay text */}
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                  padding: '2rem 1.5rem 1.5rem',
                  color: '#FFFFFF',
                  fontFamily: 'Avenir',
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}>
                  Step into mystery. Uncover secrets. Create memories.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}