import React, { useState, useEffect } from "react";
import backgroundImg from "../assets/instructions-bg.png"; 
import { Link } from "react-router-dom";

export default function Game() {
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [currentLine, setCurrentLine] = useState({ text: '', visible: false, position: 0 });

  // Define the text lines to animate
  const textLines = [
    "Check in with friends as the stay begins like any other",
    "But the unexpected can strike anytime, anywhere",
    "Can your group solve the mystery before time runs out?",
    "Your actions decide how the mystery unravels"
  ];

  useEffect(() => {
    const animateLines = async () => {
      // Wait for initial delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      for (let i = 0; i < textLines.length; i++) {
        setCurrentLineIndex(i);
        
        // Fade out previous line first
        if (i > 0) {
          setCurrentLine(prev => ({ ...prev, visible: false }));
          await new Promise(resolve => setTimeout(resolve, 2100));
        }
        
        // Set new line and fade in
        setCurrentLine({ 
          text: textLines[i], 
          visible: true, 
          position: i 
        });
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Wait for display time
        await new Promise(resolve => setTimeout(resolve, 600));
      }
      
      // Fade out last line
      setCurrentLine(prev => ({ ...prev, visible: false }));
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show continue button after all animations
      setCurrentLineIndex(-1);
      setShowContinueButton(true);
    };

    animateLines();
  }, []);

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

        .text-fade-in {
          opacity: 1;
          transition: opacity 10s ease-out;
        }
        
        .text-fade-out {
          opacity: 0;
          transition: opacity 10s ease-in;
        }

        @media (max-width: 640px) {
          .wavy-letter:nth-child(n) {
            animation: wave 3s ease-in-out infinite;
          }
        }
      `}</style>
      
      <div 
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:px-8 md:px-16"
        style={{ 
          backgroundImage: `url(${backgroundImg})`,
          filter: 'brightness(1.2)'
        }}
      >
        {/* Main content container */}
        <div className="relative z-10 text-white w-full text-center max-w-6xl mx-auto">
          {/* Title with wavy animation */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 justify-center"
            style={{ fontFamily: "Avenir", marginTop: '1rem sm:2rem' }}
          >
            {"About the Game".split('').map((letter, index) => (
              <span key={index} className="wavy-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          {/* Text animation container */}
          <div 
            className="min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-start mb-8 sm:mb-12 md:mb-16"
            style={{ fontFamily: "Avenir", paddingTop: '1rem sm:1.5rem md:2rem' }}
          >
            <div style={{ height: `${currentLine.position * (window.innerWidth < 640 ? 50 : window.innerWidth < 768 ? 65 : 80)}px` }}></div>
            <p 
              className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center max-w-xs sm:max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl leading-relaxed px-4"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                opacity: currentLine.visible ? 1 : 0,
                transition: 'opacity 2s ease-out',
                fontWeight: 'bold'
              }}
            >
              {currentLine.text}
            </p>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
            <Link to="/instructions">
              <button 
                className="bg-gray-700 bg-opacity-70 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-900 transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
                style={{ 
                  fontFamily: "Avenir",
                  opacity: showContinueButton ? 1 : 0,
                  transition: 'opacity 1.2s ease-out'
                }}
              >
                <span>Continue</span>
                <span>→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}