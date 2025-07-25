import { useEffect } from 'react';
import Typed from 'typed.js';

const About = () => {
  useEffect(() => {
    const typed = new Typed('.typing-2', {
      strings: ['Developer', 'Designer', 'Problem Solver'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      cursorChar: '|',
      smartBackspace: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
          <img 
            src={`${import.meta.env.BASE_URL}image/kannaremini.jpg`} 
            alt="Rajarajeshwaran Profile Picture"
            className="profile-image"
            loading="lazy"
          />
          </div>
          <div className="column right">
            <div className="text">
            I'm Rajarajeshwaran and I'm a <span className="typing-2" aria-hidden="true"></span>
              
            </div>
            <p className="description">
Seeking an entry-level position where I can apply my technical and management skills to contribute to the growth of the organization, while continuously enhancing my knowledge in emerging technologies and industry trends. Eager to work in a collaborative environment that encourages innovation and continuous learning. Committed to delivering high-quality results and growing into a reliable and valuable team member.
            </p>
            <div className="skills">
              <div className="skill-item">HTML/CSS</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">React</div>
              <div className="skill-item">UI/UX Design</div>
              <div className="skill-item">Problem Solving</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;