import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar';
import Hero from './componenets/Hero';
import About from './componenets/About';
import Projects from './componenets/Projects';
import Contact from './componenets/Contact';
import ResumeSection from './componenets/ResumeSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <ResumeSection/>
    </div>
  );
}

export default App;
