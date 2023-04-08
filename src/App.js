import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/navBar';
import Name from './components/name';
import Sidebar from "./components/sideBar";

import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Resume from "./pages/resume";


import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    
      <div>
        <Router>
          <NavBar />
          <Sidebar/>  
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/resume" element={<Resume />} />
            </Routes>

        </Router>
      </div>

  
 
  );
}

export default App;