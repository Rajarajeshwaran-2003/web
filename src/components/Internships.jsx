import { FaCalendarAlt, FaCode, FaChartLine } from 'react-icons/fa';

const internshipsData = [
  {
    id: 1,
    title: "Python Intern",
    company: "Global Infotech",
    logo: "/image/Psolution company logo.jpg",
    date: "May 2024",
    role: "Backend Development",
    technologies: ["Python", "Flask", "SQLite", "JavaScript"],
    achievements: [
      "Developed and optimized Python (Flask) web applications, achieving a 20% efficiency boost",
      "Enhanced user experience through streamlined workflows and responsive UI/UX design",
      "Implemented interactive Canvas-based graphics to drive a 30% increase in user engagement",
      "Optimized database queries, reducing latency by 15%"
    ]
  },
  {
    id: 2,
    title: "Cricket Hub Web Application",
    company: "Global Infotech",
    logo: "/image/Psolution company logo.jpg",
    date: "May 2024",
    role: "Frontend Development",
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "Photoshop"],
    achievements: [
      "Built a fully responsive cricket web platform with interactive lessons and leagues",
      "Implemented dynamic UI elements and multimedia content",
      "Leveraged Figma and Photoshop for high-fidelity designs",
      "Improved user engagement and accessibility metrics by 25%"
    ]
  },
  {
    id: 3,
    title: "Intellischolar Web Application",
    company: "SMC Technologies",
    logo: "/image/smcT logo.png",
    date: "March 2025",
    role: "Full Stack Development",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    achievements: [
      "Developed an AI-driven web platform to automate scholarship matching",
      "Reduced manual effort by 60% while enhancing accessibility",
      "Implemented real-time tracking and eligibility checks",
      "Streamlined application process for thousands of students"
    ]
  }
];

const Internships = () => {
  return (
    <section className="internships" id="internship">
      <div className="max-width">
        <h2 className="title">Internships</h2>
        <p className="subtitle">My professional learning experiences</p>
        
        <div className="internships-grid">
          {internshipsData.map((internship) => (
            <div className="internship-card" key={internship.id}>
              <div className="card-header">
                <div className="company-logo">
                  <img 
                    src={internship.logo} 
                    alt={`${internship.company} logo`} 
                    loading="lazy"
                  />
                </div>
                <div className="company-info">
                  <h3>{internship.title}</h3>
                  <div className="company-name">{internship.company}</div>
                </div>
              </div>
              
              <div className="card-details">
                <div className="detail-item">
                  <FaCalendarAlt className="detail-icon" />
                  <span>{internship.date}</span>
                </div>
                <div className="detail-item">
                  <FaCode className="detail-icon" />
                  <span>{internship.role}</span>
                </div>
              </div>
              
              <div className="technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {internship.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {internship.achievements.map((achievement, index) => (
                    <li key={index}>
                      <FaChartLine className="achievement-icon" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;