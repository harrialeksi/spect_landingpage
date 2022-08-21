import HeroSection from "./modules/1-Hero-Section";
import About from "./modules/2-About-Spect";
import SpectVerse from "./modules/3-Spect-Verse";
import Features from "./modules/4-Features";
import Footer from "./modules/Footer";
import ReactGA from "react-ga";

const TRACKING_ID = "G-ZE9KPG5TCK";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="flex flex-col bg-black text-white w-full font-default">
      <HeroSection />
      <About />
      <SpectVerse />
      <Features />
      <Footer />
    </div>
  );
}

export default App;

// export const GA_ANALYTICS_MEASUREMENT_ID = "G-2XJNPKFWB1";

// // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// export const pageview = (url: URL): void => {
//   window.gtag("config", GA_ANALYTICS_MEASUREMENT_ID, {
//     page_path: url,
//   });
// };

// type GTagEvent = {
//   action: string;
//   category: string;
//   label: string;
//   value: number;
// };

// // https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = ({ action, category, label, value }: GTagEvent): void => {
//   window.gtag("event", action, {
//     event_category: category,
//     event_label: label,
//     value,
//   });
// };
