import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
// 1. [X ] App
// 2. [ X] Header
import Home from '../pages/Fun';
import Business from './pages/Business';
import KIds from './pages/Kids';

import PackageCard from '../components/packageCard';

// import Header from "./components/Header"; -------> TO DO  
// import Footer from './pages/Footer'; -------> TO DO
// import Jumbotron from './pages/Jumbotron'; -------> TO DO
// import Pill Navigattion from './pages/PillNavigation'; -------> TO DO
// import Card from './pages/Card'; -------> TO DO
// import Form from './pages/Form'; -------> TO DO
// import Carousel from './pages/Carousel'; -------> TO DO
// import Modal from './pages/Modal'; -------> TO DO

function App() {

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
            <Header title={siteTitle}/>
            <Routes>
              <Route path="/" element={<Home title={title}/>} />
              <Route path="/business" element={<Contact contactTitle1={contactTitle1} contactTitle2={contactTitle2} email={email}/>} />
              <Route path="/kids" element={<Kids/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

