import { FaPaintBrush, FaChartLine, FaCode, FaServer, FaMobileAlt, FaUsers } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaPaintBrush />,
    title: "Web Design",
    description: "Front-end key technologies encompass HTML, CSS, UI/UX, and Canvas for crafting interactive and visually appealing web experiences. These technologies are foundational for building modern websites and applications.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"]
  },
  {
    icon: <FaServer />,
    title: "Back End Development",
    description: "Back-end technologies include languages like Python, alongside frameworks like Flask, facilitating server-side operations and data management, essential for the functionality and performance of web applications.",
    technologies: ["Python", "Flask", "Node.js", "Express", "Database Design"]
  },
  {
    icon: <FaUsers />,
    title: "Soft Skills",
    description: "Soft skills such as problem-solving, adaptability, teamwork, and time management are crucial for fostering collaboration, innovation, and professional growth in any field.",
    technologies: ["Communication", "Teamwork", "Problem-solving", "Time Management", "Adaptability"]
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My Services</h2>
        <p className="subtitle">What I offer to help grow your business</p>
        
        <div className="serv-content">
          {servicesData.map((service, index) => (
            <div className="card" key={index}>
              <div className="box">
                <div className="service-icon">{service.icon}</div>
                <h3 className="text">{service.title}</h3>
                <p>{service.description}</p>
                <div className="technologies">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;