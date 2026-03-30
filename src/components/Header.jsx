import { useState, useEffect } from 'react';
import { BsTwitterX, BsFacebook, BsInstagram, BsSkype, BsLinkedin, BsHouse, BsPerson, BsFileEarmarkText, BsImages, BsHddStack, BsEnvelope, BsList, BsX, BsTools, BsMortarboardFill } from 'react-icons/bs';
import profileImg from '../assets/img/my-profile-img.jpg';

const navLinks = [
  // { href: '#hero', label: 'Home', icon: <BsHouse className="navicon" /> },
  { href: '#about', label: 'About', icon: <BsPerson className="navicon" /> },
  { href: '#education', label: 'Education', icon: <BsMortarboardFill className="navicon" /> },
  { href: '#skills', label: 'Skills', icon: <BsTools className="navicon" /> },
  { href: '#resume', label: 'Resume', icon: <BsFileEarmarkText className="navicon" /> },
  { href: '#portfolio', label: 'Portfolio', icon: <BsImages className="navicon" /> },
  // { href: '#services', label: 'Services', icon: <BsHddStack className="navicon" /> },
  { href: '#contact', label: 'Contact', icon: <BsEnvelope className="navicon" /> },
];

const Header = () => {
  const [headerShow, setHeaderShow] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = '#' + section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setHeaderShow(false);
  };

  return (
    <>
      <button
        className="header-toggle"
        onClick={() => setHeaderShow(!headerShow)}
        aria-label="Toggle navigation"
      >
        {headerShow ? <BsX /> : <BsList />}
      </button>

      <header id="header" className={`header dark-background${headerShow ? ' header-show' : ''}`}>
        <div className="profile-img">
          <img src={profileImg} alt="Profile" />
        </div>

        <a href="/" className="logo">
          <h1>Sujal Koju</h1>
        </a>
        


        <nav className="navmenu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeLink === link.href ? 'active' : ''}
                  onClick={handleNavClick}
                >
                  {link.icon}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="social-links">
          <a href="#"><BsTwitterX /></a>
          <a href="#"><BsFacebook /></a>
          <a href="#"><BsInstagram /></a>
          <a href="#"><BsSkype /></a>
          <a href="#"><BsLinkedin /></a>
        </div>
      </header>
    </>
  );
};

export default Header;
