import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import pages
import Fun from "./pages/Fun";
import Business from "./pages/Business";
import Kids from "./pages/Kids";
import NotFound from "./pages/NotFound";

// import components
import Navbar from "./components/Navbar";

// import css

import "bootstrap/dist/css/bootstrap.min.css";

// import data
import standardPackageData from "./data/standardPackageData.json";
import kidsPackageData from "./data/kidsPackageData.json";

// import Header from "./components/Header"; -------> TO DO
// import Footer from './pages/Footer'; -------> TO DO
// import Jumbotron from './pages/Jumbotron'; -------> TO DO
// import Pill Navigattion from './pages/PillNavigation'; -------> TO DO
// import Card from './pages/Card'; -------> TO DO
// import Form from './pages/Form'; -------> TO DO
// import Carousel from './pages/Carousel'; -------> TO DO
// import Modal from './pages/Modal'; -------> TO DO

// const title = "Welcome to the Home Page";
const siteTitle = "Welcome to the Fun Page";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Fun rateCards={standardPackageData} />} />
            <Route
              path="/business"
              element={<Business rateCards={standardPackageData} />}
            />
            <Route
              path="/kids"
              element={<Kids rateCards={kidsPackageData} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

{
  /* <Navbar navbarElements={navbarData}/> */
}
