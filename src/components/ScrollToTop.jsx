import { useState, useEffect } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

const ScrollToTop = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('scroll-top-visible', isActive);
    return () => document.body.classList.remove('scroll-top-visible');
  }, [isActive]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-top-btn${isActive ? ' active' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <BsArrowUpShort />
    </button>
  );
};

export default ScrollToTop;
