
import styles from './App.module.css';

import {Navbar} from "./components/Navbar/Navbar";
import {Heroine} from "./components/Navbar/Heroine/Heroine";
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { ProjectCard } from './components/Projects/ProjectCard';
import { Contact } from './components/Contact/Contact';



function App() {
  
  return (
    <> <div className={styles.App}>
     <Navbar />
    <Heroine />
    <About />
    <Experience />
    <Projects />
    <Contact />
    </div>
        
    </>
  )
}

export default App
