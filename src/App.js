import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/navBar';
import Sidebar from "./components/sideBar";

import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Resume from "./pages/resume";

import './App.css';
import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    
      <div className="c-body">
        <Router>
          <div className="c-nav">
            <NavBar />
          </div>
          <div className="c-wrap">
            <div className="c-side">
              <Sidebar/>
            </div>
            <div className="c-main">
                <Routes>
                  <Route exact path="/" element={<Home/>} />
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/projects" element={<Projects/>} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
            </div>
          </div>
        </Router>
      </div>

  
 
  );
}

export default App;