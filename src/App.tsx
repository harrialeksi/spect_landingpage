import HeroSection from "./modules/1-Hero-Section"
import About from "./modules/2-About-Spect"
import SpectVerse from "./modules/3-Spect-Verse"


function App() {

  return (
    <div className="flex flex-col bg-black text-white w-full">
      <HeroSection />
      <About />
      <SpectVerse />
    </div>
  )
}

export default App
