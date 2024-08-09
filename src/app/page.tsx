import Image from "next/image";
import Nav from "./Components/Home/Nav";
import Hero from "./Components/Home/Hero";
import About from "./Components/Home/About";
import Stacks from "./Components/Home/Stacks";
import Services from "./Components/Home/Services";
import Projects from "./Components/Home/Projects";
import Contact from "./Components/Home/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <><>
      <main>
        <Hero />
      </main>
      <About />
      <Stacks />
      <Services />
      <Projects />
      <Contact />
    </><Footer /></>
    
   
  );
}
