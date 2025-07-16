import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar';
import Hero from './componenets/Hero';
import About from './componenets/About';
import Projects from './componenets/Projects';
import Contact from './componenets/Contact';
import ResumeSection from './componenets/ResumeSection';
import Experience from './componenets/Experience';
import Awards from './componenets/Awards';
import Skills from './componenets/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Awards/>
      {/* <Skills/> */}
      {/* <ResumeSection/> */}
      <Contact/>
    </div>
  );
}

export default App;
