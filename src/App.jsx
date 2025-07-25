import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaAngleUp } from 'react-icons/fa';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 500);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar />
      <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Education />
      <Services />
      <Contact />
        <Footer />
      </main>
      <div className={`scroll-up-btn ${showScroll ? 'show' : ''}`} onClick={scrollToTop}>
        <FaAngleUp />
      </div>
    </>
  );
}

export default App;