import "./App.css";
import Gallery from "./Components/Gallery";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
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
      <Gallery />
    </>
  );
}

export default App;
