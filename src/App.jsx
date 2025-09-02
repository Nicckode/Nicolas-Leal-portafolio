import Hero from "./components/hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Achievements from "./components/Achievements";


export default function App() {
  return (
    <div className="bg-neutral text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}
