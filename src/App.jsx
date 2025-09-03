import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-red-950">
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
