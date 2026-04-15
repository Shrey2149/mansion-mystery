import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Locations from "./components/Locations";
import { AudioProvider } from "./components/AudioContext"; // Import the audio provider
import Instructions from "./components/Instructions";
import Whatsapp from "./components/whatsapp"
import Creator from './components/creator'; 
import ISBRsvp from './components/ISBRsvp';

import Game from "./components/game";


function App() {
  return (
    <AudioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/game" element={<Game />} />
          <Route path="/Instructions" element={<Instructions />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/isb-rsvp" element={<ISBRsvp />} />
          
        </Routes>

        <Whatsapp/>
      </Router>
    </AudioProvider>
  );
}

export default App;