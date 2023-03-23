import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Fun from './pages/Fun';
import Business from './pages/Business';
import Kids from './pages/Kids';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

// import data
import standardPackageData from './data/standardPackageData.json';
import kidsPackageData from './data/kidsPackageData.json';

// import Header from "./components/Header"; -------> TO DO
// import Footer from './pages/Footer'; -------> TO DO
// import Jumbotron from './pages/Jumbotron'; -------> TO DO
// import Pill Navigattion from './pages/PillNavigation'; -------> TO DO
// import Card from './pages/Card'; -------> TO DO
// import Form from './pages/Form'; -------> TO DO
// import Carousel from './pages/Carousel'; -------> TO DO
// import Modal from './pages/Modal'; -------> TO DO

// const title = "Welcome to the Home Page";
//const siteTitle = "Welcome to the Fun Page";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar siteTitle={navbarData} />
          <Routes>
            <Route path="/" element={<Index rateCards={packageData} />} />
            <Route path="/" element={<Index navbarElements={navbarData} />} />
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
