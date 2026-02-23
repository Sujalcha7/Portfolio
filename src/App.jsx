import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Header />

      <main className="main-content">
        {/* <Hero /> */}
        <About />
        <Interests />
        <Education />
        <Skills />
        <Resume />
        <Portfolio />
        {/* <Services /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </>
  );
}

export default App;
