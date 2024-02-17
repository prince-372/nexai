import { useEffect } from "react";
import "./App.css";
import Assistant from "./components/Assistant";
import Backtop from "./components/Backtop";
import BackToTop from "./components/Backtop";
import Blockchain from "./components/Blockchain";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nexai from "./components/Nexai";
import Nexaidoes from "./components/Nexaidoes";
import Token from "./components/Token";
import Unique from "./components/Unique";
import AOS from "aos";
import "aos/dist/aos.css";
import Priloder from "./components/Priloder";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <Hero />
      <Assistant />
      <Unique />
      <Blockchain />
      <Nexaidoes />
      <Nexai />
      <Token />
      <Footer />
      <Backtop />
      <Priloder />
    </>
  );
}

export default App;
