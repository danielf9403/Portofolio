import React from "react";


function ProjectsCarousel() {
  return (
    <div className="projects-wrap">
      <div className="project-layout" >
        <h2 className="project-title">Pac Man</h2>
        <div className="project-div">
          <div className="project-pic-pac">
            
          </div>
          <p className="project-description">Experience the nostalgia of Pac-Man in this exciting project-in-progress game created using DOM,
             JavaScript, HTML, and CSS. Navigate through the classic maze, gobble up pellets, and avoid the ghosts
              as you strive for a high score. With future updates in the pipeline, this game, deployed with Vercel,
               promises to bring back the beloved arcade fun of Pac-Man to your browser.
          </p>

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
      <div className="project-layout">
        <h2 className="project-title">Portfolio</h2>
        <div className="project-div">
          <div className="project-pic-portoflo">
            
          </div>
          <p className="project-description">Introduce yourself to the digital world with a stunning personal webpage, a captivating React Redux web app designed with Bootstrap and CSS. 
            This project showcases my unique identity and achievements, serving as a dynamic digital hub for my portfolio, resume, and skills. 
            Discover my expertise, explore my projects, and connect with me through this visually stunning and immersive web experience.</p>
        </div>
        <div className="projects-button-wrap">
            <a href="https://github.com/danielf9403/Portofolio.git">
              <button className="project-button">
                  <span>See Code</span>
              </button>
            </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
