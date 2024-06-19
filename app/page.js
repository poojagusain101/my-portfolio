import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
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
  </div>
  );
}
