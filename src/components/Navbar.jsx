import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = ({ reducedMotion }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isMounted, setIsMounted] = useState(false);

  // Track mounted state to avoid SSR hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply dark mode class and save preference
  useEffect(() => {
    if (isMounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
      }
    }
  }, [darkMode, isMounted]);

  const toggleMenu = () => {
    setIsMenuActive(prev => !prev);
    // Lock body scroll when menu is open
    document.body.style.overflow = isMenuActive ? '' : 'hidden';
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    document.body.style.overflow = '';
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.navbar');
      if (isMenuActive && nav && !nav.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuActive) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuActive]);

  // Close menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuActive) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuActive]);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="max-width">
        <div className="logo">
          <Link 
            to="home" 
            smooth={!reducedMotion} 
            duration={500} 
            className="logo-link"
            aria-label="Home"
            onClick={closeMenu}
          >
            Portfo<span>lio.</span>
          </Link>
        </div>
        
        <ul 
          className={`menu ${isMenuActive ? 'active' : ''}`}
          role="navigation"
          aria-label="Main navigation"
        >
         {['home', 'about','skills', 'projects', 'internship', 'education','services', 'contact'].map((item) => (
            <li key={item}>
              <Link 
                to={item} 
                smooth={!reducedMotion} 
                duration={500} 
                className="menu-link"
                onClick={closeMenu}
                aria-label={item.charAt(0).toUpperCase() + item.slice(1)}
                activeClass="active-link"
                spy={true}
                offset={10}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
          
          <li>
            <button 
              onClick={toggleDarkMode} 
              className="dark-mode-toggle"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={darkMode}
            >
              {darkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
            </button>
          </li>
        </ul>
        
        <button 
          className={`hamburger ${isMenuActive ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuActive ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuActive}
          aria-controls="main-menu"
        >
          {isMenuActive ? (
            <FaTimes aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;