import React, { useState, useEffect, useCallback , useMemo} from "react";
import backgroundImg from "../assets/instructions-bg.png"; 
import { Link } from "react-router-dom";
import { useAudio } from "../components/AudioContext.js";

export default function Game() {
  const { startAudio } = useAudio(); // Use the context
  
    useEffect(() => {
      startAudio(); // Start audio when component mounts
    }, [startAudio]);


  const [showOptions, setShowOptions] = useState(false);
  const [currentLine, setCurrentLine] = useState({ text: '', visible: false, position: 0 });

  // Define the text lines to animate
  const textLines = useMemo(() => [
    "Check in with friends as the stay begins like any other",
    "But the unexpected can strike anytime, anywhere",
    "Can your group solve the mystery before time runs out?",
    "Your actions decide how the mystery unravels"
  ],[]);

  // Function to restart the animation
  const restartAnimation = () => {
    setShowOptions(false);
    setCurrentLine({ text: '', visible: false, position: 0 });
    
    // Start animation again after a brief delay
    setTimeout(() => {
      animateLines();
    }, 500);
  };

  const animateLines = useCallback(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  for (let i = 0; i < textLines.length; i++) {
    if (i > 0) {
      setCurrentLine(prev => ({ ...prev, visible: false }));
      await new Promise(resolve => setTimeout(resolve, 2100));
    }

    setCurrentLine({
      text: textLines[i],
      visible: true,
      position: i
    });

    await new Promise(resolve => setTimeout(resolve, 2100));
  }

  setCurrentLine(prev => ({ ...prev, visible: false }));
  await new Promise(resolve => setTimeout(resolve, 1000));
  setShowOptions(true);
}, [textLines]);

  useEffect(() => {
    animateLines();
  }, [animateLines]);

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

        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-in-left {
          animation: slideInFromLeft 0.8s ease-out;
        }

        .slide-in-right {
          animation: slideInFromRight 0.8s ease-out;
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
        <div className="relative z-10 text-white w-full text-center max-w-10xl mx-auto">
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
            {/* INCREASED SPACING CALCULATION */}
            <div style={{ height: `${currentLine.position * (window.innerWidth < 640 ? 80 : window.innerWidth < 768 ? 100 : 120)}px` }}></div>
            <p 
              className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center max-w-sm sm:max-w-lg md:max-w-6xl lg:max-w-full xl:max-w-full leading-relaxed px-4 whitespace-nowrap"
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

          {/* Two Options - Side by Side */}
          <div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-12"
            style={{ 
              opacity: showOptions ? 1 : 0,
              transition: 'opacity 1.2s ease-out'
            }}
          >
            {/* See Hints Again Button */}
            <button 
              onClick={restartAnimation}
              className="bg-gray-700 bg-opacity-70 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-900 transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
              style={{ 
                fontFamily: "Avenir"
              }}
            >
              <span>↻</span>
              <span>See Hints Again</span>
            </button>

            {/* Continue Button */}
            <Link to="/locations">
              <button 
                className="bg-gray-700 bg-opacity-70 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-900 transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
                style={{ 
                  fontFamily: "Avenir"
                }}
              >
                <span>Continue</span>
                <span>→</span>
              </button>
            </Link>
          </div>

          {/* Optional helper text */}
          <p 
            className="text-xs sm:text-sm text-gray-300 mt-6 opacity-70"
            style={{ 
              fontFamily: "Avenir",
              opacity: showOptions ? 0.7 : 0,
              transition: 'opacity 1.5s ease-out 0.5s'
            }}
          >
            Choose your next step to continue the mystery adventure
          </p>
        </div>
      </div>
    </>
  );
}