import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
// import heroBg from '../assets/img/hero-bg.jpg';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Computer Engineering Student', 'Developer', 'Programmer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero" data-aos="fade-in">
      {/* <img src={heroBg} alt="" className="hero-bg" /> */}
      <div className="hero-content container" data-aos="fade-up" data-aos-delay="100">
        <h2>Sujal Koju</h2>
        <p>
          I&apos;m a <span className="typed-text" ref={typedRef}></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
