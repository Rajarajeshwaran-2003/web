import { Link } from 'react-scroll';
import { FaPython, FaHtml5, FaCss3Alt, FaFigma, FaDatabase } from 'react-icons/fa';

const skillsData = [
  { name: "Python", icon: <FaPython />, level: 80, color: "#3776AB" },
  { name: "UI/UX", icon: <FaFigma />, level: 80, color: "#A259FF" },
  { name: "HTML", icon: <FaHtml5 />, level: 80, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, level: 80, color: "#1572B6" },
  { name: "MySQL", icon: <FaDatabase />, level: 50, color: "#4479A1" }
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My Skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My Creative Skills & Experiences</div>
            <p>
              Collaboration in both back-end and front-end development demands effective communication, teamwork, and adaptability. 
              Soft skills like clear articulation of ideas, active listening, and the ability to work in interdisciplinary teams 
              enhance the coordination required for seamless integration of front-end and back-end components.
            </p>
            <div className="soft-skills">
              <h3>Key Soft Skills:</h3>
              <ul>
                <li>Effective Communication</li>
                <li>Team Collaboration</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
                <li>Time Management</li>
              </ul>
            </div>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              className="btn"
            >
              Contact Me
            </Link>
          </div>
          <div className="column right">
            {skillsData.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;