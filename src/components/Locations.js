import gurgaonImg from "../assets/Gurgaon_image.jpeg";
import mussoorieImg from "../assets/Mussourrie_image.png";
import backgroundImg from "../assets/locations-bg.jpeg";

import { Link } from "react-router-dom";

export default function Locations() {

  return (
    <>
      <style jsx>{`
          @keyframes wave {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
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
          .force-black { color: #000 !important; }
        `}
      </style>
    <div className="bg-black min-h-screen flex flex-col items-center py-16" style={{
          backgroundImage: `url(${backgroundImg})`,
          filter: 'brightness(1.2)'
    }}>

      <div className="flex flex-wrap justify-center gap-12">
        {/* Gurgaon Card */}
        <div className="rounded-lg shadow-lg overflow-hidden w-[380px] transform transition duration-300 hover:scale-105" style={{backgroundColor: '#E8E3E3'}}>
        <div className="p-4" style={{backgroundColor: '#E8E3E3'}}>
        <img src={gurgaonImg} alt="Gurgaon" className="w-full h-96 object-cover" style = {{objectPosition:'42% center'}}/>
      </div>
      <div className="p-4 min-h-[150px] relative right-0">
          <h2 className="text-4xl font-semibold text-black force-black">
          {"Gurugram".split('').map((letter, index) => (
              <span key={index} className="wavy-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          
        </h2>
    
      
    
        {/* Button with proper spacing */}
        <div className="mt-10"> {/* Add margin to avoid overlap */}
          <Link to="/Instructions">
          <button className="bg-gray-700 px-8 py-3 rounded-full hover:bg-gray-900 transition-colors duration-300 relative z-10 text-xl left-1 text-gray-400">
            Book Now
          </button>
          </Link>
        </div>
      </div>
    </div>

        {/* Mussoorie Card */}
        <div className="rounded-lg shadow-lg overflow-hidden w-[380px] transform transition duration-300 hover:scale-105" style={{backgroundColor: '#E8E3E3'}}>
          <div className="p-4" style={{backgroundColor: '#E8E3E3'}}>
          <img src={mussoorieImg} alt="Mussoorie" className="w-full h-96 object-cover" />
          </div>
          <div className="p-4 min-h-[150px] ">
            <h2 className="text-4xl font-semibold text-black force-black" style = {{transform: "translate(0px, 0px)"}}>
              {"Mussoorie".split('').map((letter, index) => (
              <span key={index} className="wavy-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
              
              </h2>
            <p className="mt-2 text-gray-600 font-medium text-4xl" style = {{transform: "translate(0px, 10px)"}}>Coming Soon…!</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}