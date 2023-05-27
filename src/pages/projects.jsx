import React, { useState, useEffect } from "react";


function ProjectsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  function incrementSlide() {
    setActiveSlide((prevState) => {
      if (prevState === 2) {
        // Maximum index reached, reset to 0
        return 0;
      } else {
        return prevState + 1;
      }
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      incrementSlide();
    }, 8000); // Change the number (in milliseconds) to adjust autoplay speed

    return () => clearInterval(interval);
  }, []);

  function handleRadioInputChange(event) {
    setActiveSlide(Number(event.target.value));
  }

  return (
    <div className="projects-wrap">
      <div>

          <div className="projects-carousel">

            <div className="project-pics" style={{ display: activeSlide === 0 ? "block" : "none" }}>
              <div className="project-div1">
                <h2 className="project-title">Pac Man</h2>
                <p>Description!!!!!!1</p>
              </div>
              <div className="projects-button-wrap">
                  <a href="https://github.com/danielf9403/milestone-one.git">
                    <button className="project-button">
                        <span>See Code</span>
                    </button>
                  </a>
                  <a href="https://milestone-one-one.vercel.app/">
                    <button className="project-button">
                        <span>Play</span>
                    </button>
                  </a>
              </div>
            </div> 

            <div className="project-pics" style={{ display: activeSlide === 1 ? "block" : "none" }}>
              <div className="project-div2">
                <h2 className="project-title">Portofolio</h2>
                <p>Description!!!!!!1</p>
              </div>
              <div className="projects-button-wrap">
                  <a href="https://github.com/danielf9403/Portofolio.git">
                    <button className="project-button">
                        <span>See Code</span>
                    </button>
                  </a>
              </div>

            </div>    

            <div className="project-pics" style={{ display: activeSlide === 2 ? "block" : "none" }}>

              <div className="project-div3">
                <h2 className="project-title">Habit Traker</h2>
                <h2 className="project-title">Comming Soon!!!</h2>
              </div>

            </div>

          </div>

        </div>

        {/* <div className="projects-pic-carousel">
            <input checked={activeSlide === 0} onChange={handleRadioInputChange} type="radio" name="position" value="0" />
            <input checked={activeSlide === 1} onChange={handleRadioInputChange} type="radio" name="position" value="1" />
            <input checked={activeSlide === 2} onChange={handleRadioInputChange} type="radio" name="position" value="2" />
        </div> */}
    </div>

    
  );
}

export default ProjectsCarousel;
