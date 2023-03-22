import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
// 1. [X ] App
// 2. [ X] Header
import Index from './pages/Index';
import Business from './pages/Business';
import Kids from './pages/Kids';
import Header from './components/Header';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import PackageCard from './components/PackageCard';

// import Header from "./components/Header"; -------> TO DO  
// import Footer from './pages/Footer'; -------> TO DO
// import Jumbotron from './pages/Jumbotron'; -------> TO DO
// import Pill Navigattion from './pages/PillNavigation'; -------> TO DO
// import Card from './pages/Card'; -------> TO DO
// import Form from './pages/Form'; -------> TO DO
// import Carousel from './pages/Carousel'; -------> TO DO
// import Modal from './pages/Modal'; -------> TO DO

const title = "Welcome to the Home Page";
const siteTitle = "Welcome to the Fun Page";

const rateCards = [
  { id: 1,
    title: 'Package "Apéritif"',
    subTitle: 'Free 30-minute trial',
    description: 'Short and sweet - book your free 30-minute trial and start speaking French like the French. Salutations!',
    rate: 'Free',
    btnMsg: 'Book Now',
    link: "https://calendly.com/teamcarambatesting/1-2-1-tutoring-session-free-trial"
  },
  { id: 2,
    title: 'Package "Crêpe"',
    subTitle: 'Pay as you go',
    description: 'Not sure how much time you can commit to learning French? Often out of town? Choose the flexible "pay as you go" option to only book classes that fit your busy schedule.',
    rate: '£35/hour',
    btnMsg: 'Get in touch',
    link: "https://form.jotform.com/230464330195350"
  },
  { id: 3,
    title: 'Best Value',
    subTitle: 'Package "Ratatouille"',
    description: 'Looking for regular weekly classes to speak French as quickly as possible? Opt for the monthly subscription and book 8 hourly classes that can fit within your schedule.',
    rate: '£200/month (8 hours)',
    btnMsg: 'Get in touch',
    link: "https://form.jotform.com/230464330195350"
  }
];

function App() {

  return (
    <div className="App">
      <Router>
        <div>
            <Header siteTitle={siteTitle}/>
            <Routes>
              <Route path="/" element={<Index rateCards={rateCards} />} />
              {/* <Route path="/business" element={<Contact contactTitle1={contactTitle1} contactTitle2={contactTitle2} email={email}/>} />
              <Route path="/kids" element={<Kids/>} />
              <Route path="*" element={<NotFound/>} /> */}
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

