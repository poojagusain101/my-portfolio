import styles from "./page.module.css";
import Navbar from "/Components/Navbar/Navbar.js";
import Hero from "/Components/Hero/Hero.js";
import { About } from "@/components/About/About";
import { Skills } from "@/components/Skills/Skills";
import Education from "@/components/Education/Education";
import Stats from "@/components/Stats/Stats";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";


export default function Home() {
  return (
    <div className={styles.main}>
    <Navbar />
    <Hero/>
    <Stats/>
    <Skills/>
    <Education/>
    <Projects/>
    <Contact/>
    {/* <About/> */}
  </div>
  );
}
