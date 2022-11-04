import HomePage from "./pages/Home";
import PricingPage from "./pages/Pricing";
import FeaturesPage from "./pages/Features";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar, MobileNavbar } from "./modules/Navbar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col bg-black text-white w-full font-default">
        {menuOpen ? (
          <MobileNavbar setMenuOpen={setMenuOpen} />
        ) : (
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
