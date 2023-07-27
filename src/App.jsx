import "./App.css";
import Gallery from "./Components/Gallery";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
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
      <Cv />
      <Partner />
      <Testimonials />
      {/* <Gallery /> */}
    </>
  );
}

export default App;
