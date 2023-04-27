import React from "react";
import AboutCarousel from "../components/aboutCarousel";
const About = () => {
    return(
        <div className="about">
            <div className="about-pic">
                <AboutCarousel/>
            </div>
            <div className="about-name-paragraf">
                <div className="about-name">
                    <h1>DANIEL EMANUEL FUNARU</h1>
                    <h2>FULL STACK DEVELOPER</h2>
                </div>
                <div className="about-paragraf">
                    <p> "Battle not with monsters lest you become one.
                        And if you gaze into the abyss, the abyss gazes also into you."
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;