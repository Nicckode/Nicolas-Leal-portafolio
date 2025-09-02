import Hero from "./components/hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-neutral text-white min-h-screen">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
