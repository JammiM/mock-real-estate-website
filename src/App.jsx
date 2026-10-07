import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Best from "./components/best/Best";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
