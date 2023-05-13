
import React from 'react';
import { useState } from 'react';
import Portofolio from '../components/portofolio.jsx';


const ProjectCarousel = () => {
  const [showPortofolio, setShowPortofolio] = useState(false);

  const handleButtonClick = (projectName) => {
    console.log(`Clicked on ${projectName} button`);
    if (projectName === 'Portofolio') {
      setShowPortofolio(true);
    }
  };

  return (
    <div className="p-container">
      <div className="p-carousel">
        <div className="p-box">
          <a href="https://github.com/danielf9403/milestone-one.git">
            <button onClick={() => handleButtonClick('Pac-Man')}>
              <span>Pac-Man</span>
            </button>
          </a>
        </div>
        
        <div className={`p-box ${showPortofolio ? 'portofolio' : ''}`}>
        {showPortofolio && <Portofolio />}
        <button onClick={() => handleButtonClick('Portofolio')}>
          <span>Portofolio</span>
        </button>
      </div>
        
        <div className="p-box">
          <button onClick={() => handleButtonClick('Loading ...')}>
            <span>Loading ...</span>
          </button>
        </div>
        <div className="p-box">
          <button onClick={() => handleButtonClick('Loading ...')}>
            <span>Loading ...</span>
          </button>
        </div>
        <div className="p-box">
          <button onClick={() => handleButtonClick('Loading ...')}>
            <span>Loading ...</span>
          </button>
        </div>
        <div className="p-box">
          <button onClick={() => handleButtonClick('Project 6')}>
            <span>Loading ...</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;
