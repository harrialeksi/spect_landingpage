import HeroSection from "../modules/Home/1-Hero-Section";
import About from "../modules/Home/2-About-Spect";
import SpectVerse from "../modules/Home/3-Spect-Verse";
import Features from "../modules/Home/4-Features";
import Footer from "../modules/Footer";
import Feature from "../modules/Features";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <About /> */}
      <SpectVerse />
      <Feature />
      <Features />
      <Footer />
    </>
  );
}
