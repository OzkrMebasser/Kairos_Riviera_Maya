
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Slider from './components/Slider';
import Home from './views/Home';





function App() {
  const images = [
    'https://source.unsplash.com/random/1920x960?random=1',
    'https://source.unsplash.com/random/1920x960?random=2',
    'https://source.unsplash.com/random/1920x960?random=3',
  ]
  return (
    
    <div className="App">
 
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="hero" element={<Slider images={images} />} />
    </Routes>
  </div>
  );
}

export default App;
