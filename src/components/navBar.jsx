import React from "react";
import { NavLink } from "react-router-dom"; // Used NavLink instead of Link

const Navbar = () => { // Changed function to an arrow function
    return(

        <div className="navBar">
            <div className="links">
                <NavLink to="/"> Home</NavLink>
                <NavLink to="/about">About Me</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
            </div>
        </div>

    );
}

export default Navbar