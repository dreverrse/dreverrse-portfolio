import Navbar from "./components/Navbar";
import Spotlight from "./components/Spotlight";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="relative noise">
      <Spotlight />
      <Navbar />
      <Hero />
      <hr className="divider mx-6 max-w-5xl md:mx-auto" />
      <About />
      <hr className="divider mx-6 max-w-5xl md:mx-auto" />
      <Projects />
      <hr className="divider mx-6 max-w-5xl md:mx-auto" />
      <Experience />
      <hr className="divider mx-6 max-w-5xl md:mx-auto" />
      <Contact />
    </main>
  );
}
