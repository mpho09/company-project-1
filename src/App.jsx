import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RulerDivider from "./components/RulerDivider";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <RulerDivider />
      <WhyUs />
      <Services />
      <RulerDivider />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}