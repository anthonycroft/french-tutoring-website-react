import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Fun from "./pages/Fun";
import Business from "./pages/Business";
import Kids from "./pages/Kids";
import NotFound from "./pages/NotFound";

// css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// data
import standardPackageData from "./data/standardPackageData.json";
import kidsPackageData from "./data/kidsPackageData.json";
import unsplashData from './data/unsplashData.json';

// import Header from "./components/Header"; -------> TO DO
// import Footer from './pages/Footer'; -------> TO DO
// import Jumbotron from './pages/Jumbotron'; -------> TO DO
// import Pill Navigattion from './pages/PillNavigation'; -------> TO DO
// import Card from './pages/Card'; -------> TO DO
// import Form from './pages/Form'; -------> TO DO
// import Carousel from './pages/Carousel'; -------> TO DO
// import Modal from './pages/Modal'; -------> TO DO

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route 
              path="/" 
              element={<Fun rateCards={standardPackageData} unsplashDataObject={unsplashData[0]}/>} />
            <Route 
              path="/fun" 
              element={<Fun rateCards={standardPackageData} unsplashDataObject={unsplashData[0]}/>} />
            <Route
              path="/business"
              element={<Business rateCards={standardPackageData} unsplashDataObject={unsplashData[1]} />}
            />
            <Route
              path="/kids"
              element={<Kids rateCards={kidsPackageData} unsplashDataObject={unsplashData[2]} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

