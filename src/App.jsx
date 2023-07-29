import "./App.css";
import FAQ from "./Components/FAQ";
import Gallery from "./Components/Gallery";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import OurTeam from "./Components/OurTeam";
import Pricing from "./Components/Pricing";
import Repair from "./Components/Repair";
import Solutions from "./Components/Solutions";
import Partner from "./Components/Partner/Partner";
import About from "./Components/about/About";
import AdsBar from "./Components/adsbar/AdsBar";
import Benefits from "./Components/benefits/Benefits";
import Cv from "./Components/cv/Cv";
import Testimonials from "./Components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <AdsBar />
      <Benefits />
      <Gallery />
      <Cv />
      <Partner />
      <Testimonials />
      <Pricing />
      <OurTeam />
      <Repair />
      <Solutions />
      <FAQ />
    </>
  );
}

export default App;
