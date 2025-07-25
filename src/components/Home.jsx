import { useEffect } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-scroll';
// Import all necessary React Icons
import {
  FaLinkedinIn, // A more typical LinkedIn icon from Font Awesome via react-icons
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa'; // Assuming 'fa' for Font Awesome brands too

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ['Developer', 'Designer', 'Creator', 'Problem Solver'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      cursorChar: '|',
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Social media links data
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rajarajeshwaran-/',
      icon: <FaLinkedinIn />, // Using React Icon component for LinkedIn
      type: 'react-icon', // Added type for clarity
    },
    {
      name: 'Twitter',
      url: 'https://x.com/kannarajesh057',
      icon: <FaTwitter />, // Using React Icon component
      type: 'react-icon',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_kanna_deva/',
      icon: <FaInstagram />, // Using React Icon component
      type: 'react-icon',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Rajarajeshwaran-2003',
      icon: <FaGithub />, // Using React Icon component
      type: 'react-icon',
    },
    {
      name: 'Email',
      url: 'mailto:kannarajesh057@gmail.com',
      icon: <FaEnvelope />, // Using React Icon component
      type: 'react-icon',
    },
    // If you specifically want to use Font Awesome class strings for some:
    // {
    //   name: 'Example FA',
    //   url: '#',
    //   icon: 'fab fa-facebook-f',
    //   type: 'font-awesome-string',
    // }
  ];

  return (
    <section className="home" id="home">
      <div className="max-width home-layout-container">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <h1 className="text-2">Rajarajeshwaran</h1>
          <div className="text-3">
            And I'm a <span className="typing" aria-hidden="true"></span>
            <span className="sr-only">Developer and Designer</span>
          </div>

          <div className="home-buttons">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hire-me-btn"
              aria-label="Hire me - navigate to contact section"
            >
              Hire me
            </Link>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="social-icon"
                >
                  {/* Correctly render icons based on their type */}
                  {link.type === 'font-awesome-string' ? (
                    <i className={link.icon}></i> // For Font Awesome string classes
                  ) : (
                    link.icon // For React Icon components
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="home-image">
          <img
            src={`${import.meta.env.BASE_URL}image/kanna.jpg`} 
            alt="Rajarajeshwaran's Profile"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;