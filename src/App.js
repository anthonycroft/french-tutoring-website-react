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

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route 
              path="/" 
              element={<Fun rateCards={standardPackageData} />} />
            <Route 
              path="/fun" 
              element={<Fun rateCards={standardPackageData} />} />
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

