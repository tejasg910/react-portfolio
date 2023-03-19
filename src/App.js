import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import TimeLine from "./components/TimeLine";
import Work from "./components/Work";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <div className="App">
      <HeaderPhone menuOpen={menuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <TimeLine />
      <Services />
      <Testimonials />
      <Contact />
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
