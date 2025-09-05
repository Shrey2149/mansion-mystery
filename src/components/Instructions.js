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
        `}
    </style>
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-between px-16 "
      style={{ backgroundImage: `url(${backgroundImg})`,
            filter : 'brightness(1.2)'}}
    >
      {/* Overlay for dark effect */}
      

      {/* Left side - Instructions content */}
      <div className="relative z-10 text-white w-full">
        <h1 
          className="text-5xl font-bold mb-12 text-center w-full"
          style={{ fontFamily: "Avenir", marginLeft: '16rem' }}
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
            
            <ul className="space-y-2 text-xl " style={{ fontFamily: "Avenir", marginLeft:'14rem'}}>
              <li>• 4 bedrooms, 4 beds, 4 bathrooms</li>
              <li>• Indoor swimming pool (access till 7:30pm)</li>
              <li>• Pool table and indoor games</li>
              <li>• In-home cinema</li>
              <li>• BYOB</li>
              <li>• In-house dining on order</li>
            </ul>
          </div>

          {/* Booking Details Section */}
          <div className="pt-4">
            <ul className="space-y-2 text-xl" style={{ fontFamily: "Avenir" ,marginLeft:'14rem'}}>
              <li>• Book in group size of 8-12</li>
              <li>• Check-in at 5pm, check-out at 10am</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="pt-4">
            <p className="text-3xl text-left w-full" style={{ fontFamily: "Avenir",marginLeft:'14rem' ,marginTop:'4rem'}}>
              For further queries and booking the experience

            </p>
            <p className="text-3xl text-left w-full" style={{ fontFamily: "Avenir",marginLeft:'14rem',marginTop:'1rem'}}>
              WhatsApp: +91 8279845322

            </p>
          </div>
        </div>
      </div>

      {/* Right side - Continue button */}
      <div className="relative z-10 flex flex-col items-center" style = {{marginRight:'10rem'}}>
        {/* Image Carousel */}
        <div className="mb-8 w-full relative" style = {{marginTop: '4rem',marginLeft:'2rem'}}>
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
            className="object-cover rounded-lg opacity-90 mb-4 mt-12"
            style={{ width: '400px', height: '300px' }}
          />

          {/* Right Arrow */}
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300 z-20"
            style={{ fontSize: '20px' }}
          >
            →
          </button>

          {/* Image Counter (optional) */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {propertyImages.length}
          </div>
        </div>

        <Link to = "/calendar">
        <button 
          className="bg-gray-700 bg-opacity-70 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-all duration-300 flex items-center space-x-2"
          style={{ fontFamily: "Avenir", marginTop:'4rem',marginLeft:'14rem' }}
        >
          <span>Continue</span>
          <span>→</span>
        </button>
        </Link>
      </div>
    </div>
    </>
  );
}