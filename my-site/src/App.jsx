import Hero from "./components/hero";
import About from "./components/about";
import ScrollImages from "./components/images";
import Contact from "./components/contact";

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Hero />
      <About />
      <ScrollImages />
      <Contact />
    </div>
  );
}