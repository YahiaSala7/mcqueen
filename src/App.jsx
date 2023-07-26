import "./App.css";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import About from "./Components/about/About";
import AdsBar from "./Components/adsbar/AdsBar";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <AdsBar />
    </>
  );
}

export default App;
