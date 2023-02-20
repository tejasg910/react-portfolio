import Header from "./components/Header";
import Home from "./components/Home";
import TimeLine from "./components/TimeLine";
import Work from "./components/Work";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
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
