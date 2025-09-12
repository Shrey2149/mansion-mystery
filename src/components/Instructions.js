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
  // Array of property images - add more images here
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
    // Add more image imports here
    // secondImg,
    // thirdImg,
    // etc.
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? propertyImages.length - 1 : prevIndex - 1
    );
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

          /* Desktop styles */
          .desktop-layout {
            display: flex;
            align-items: flex-start;
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
          }

          .desktop-list {
            margin-left: 4rem;
            margin-right: 2rem;
            font-size: 1.25rem;
            margin-top: 2rem;
          }

          .desktop-contact {
            margin-left: 4rem;
            margin-right: 2rem;
            font-size: 1.5rem;
            margin-top: 2rem;
          }

          .desktop-carousel {
            flex-shrink: 0;
            margin-right: 6rem;
            margin-top: 8rem; /* Increased from 2rem to 8rem to shift down */
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
              font-size: 1.5rem !important;
              margin-left: 0 !important;
              margin-bottom: 2rem !important;
              text-align: center !important;
              line-height: 1.3 !important;
            }
            
            .desktop-list {
              margin-left: 0 !important;
              margin-right: 0 !important;
              font-size: 0.9rem !important;
              padding: 0 1rem !important;
              text-align: left !important;
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
              margin-top: 10rem !important; /* Keep this for mobile */
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
            <ul className="space-y-2 desktop-list" style={{ fontFamily: "Avenir" }}>
              <li>• ⁠With 4 bedrooms and 4 bathrooms, every guest has room to rest, plot, and prepare for the night ahead.</li>
              <li>• An indoor swimming pool, open till 7:30pm, invites you before the mystery deepens.</li>
              <li>• Between clues, gather around the pool table or other games to test your strategy.</li>
              <li>• The in-home cinema sets the perfect stage for group debriefs.</li>
              <li>• You're welcome to BYOB — and we'll set the bar for you.</li>
              <li>• When hunger strikes, indulge in in-house dining available on order.</li>
              <li>• ⁠Ideal for groups of 8–12, the space is crafted for both camaraderie and suspicion.</li>
              <li>• Check-in from 5pm, check-out by 10am gives plenty of time for secrets to settle.</li>
            </ul>
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

          {/* Main Image */}
          <img 
            src={propertyImages[currentImageIndex]} 
            alt={`Property Image ${currentImageIndex + 1}`} 
            className="object-cover rounded-lg opacity-90 mobile-image"
            style={{ width: '480px', height: '280px' }}
          />

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