import HeroSection from "./modules/1-Hero-Section";
import About from "./modules/2-About-Spect";
import SpectVerse from "./modules/3-Spect-Verse";
import Features from "./modules/4-Features";
import Footer from "./modules/Footer";
import Pricing from "./modules/Pricing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-black text-white w-full font-default">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <About />
                <SpectVerse />
                <Features />
                <Footer />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <Pricing />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
