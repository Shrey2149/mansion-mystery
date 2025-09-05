import React from "react";
import bgImage from "../assets/mystery.jpeg";
import { Link } from "react-router-dom";

export default function HeroSection() {
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
      `}</style>
      
      <div
        className="relative h-screen bg-cover bg-center flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-16 lg:pt-20"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          filter: 'brightness(1)' // Making the background darker as requested
        }}
      >
        
        {/* Overlay for additional dark effect */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 px-4 max-w-4xl space-y-2 sm:space-y-4 w-full">
          {/* Title */}
          <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white mt-2 sm:mt-4" 
             style={{ fontFamily: "Avenir", color:'#727081'}}>
            World's Only
          </p>
          
          {/* Wavy Mystery Mansion Text */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white text-center mt-4 sm:mt-6 lg:mt-20"
            style={{ fontFamily: "Avenir", color:'#727081'}}
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

          {/* Booking Section */}
          <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col items-center justify-center w-full">
            {/* Bookings Text */}
            <p
              className="bookings-text text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold"
              style={{ fontFamily: "Avenir", color:'#cac8d6',marginTop:'2rem'}}
            >
              {"Bookings Open Now".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Static Bottom Banner */}
      <div 
        className="fixed bottom-0 left-0 right-0 bg-black/80 py-2 sm:py-4 px-4 sm:px-8 z-50 backdrop-blur-sm"
        style={{ fontFamily: "Avenir", color:'#b9b7c7ff'}}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center text-center space-y-1 sm:space-y-0">
          <div className="flex-1 text-center space-y-3">
            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              Stay in a premium villa in a group of friends or colleagues
            </p>
            {/* White Divider Line */}
            <div className="w-60 sm:w-80 md:w-96 lg:w-full lg:max-w-2xl xl:max-w-2xl h-px bg-white mx-auto opacity-60"></div>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              Solve a real-life mystery game during the stay
            </p>
          </div>

          {/* Button on the right */}
          <div className="flex-shrink-0 mt-2 sm:mt-0 sm:ml-6">
            <Link to="/locations">
              <button 
                className="bg-gray-800 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-full shadow-lg hover:bg-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-all hover:scale-105 whitespace-nowrap" 
                style={{ backgroundColor:'#464357'}} 
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#323232")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#464357")}
              >
                Choose Location
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}