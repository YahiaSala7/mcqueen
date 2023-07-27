import "./App.css";
import FAQ from "./Components/FAQ";
import Gallery from "./Components/Gallery";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import OurTeam from "./Components/OurTeam";
import Pricing from "./Components/Pricing";
import Repair from "./Components/Repair";
import Solutions from "./Components/Solutions";
import About from "./Components/about/About";
import AdsBar from "./Components/adsbar/AdsBar";
import Benefits from "./Components/benefits/Benefits";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <AdsBar />
      <Benefits />
      {/* <Gallery /> */}
      <Pricing />
      <OurTeam />
      <Repair />
      <Solutions />
      <FAQ />
    </>
  );
}

export default App;
