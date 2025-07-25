import { FaGithub, FaExternalLinkAlt, FaRobot,FaFileAlt,FaShoppingCart,FaUserFriends,FaTrophy } from 'react-icons/fa';
import { GiCricketBat } from 'react-icons/gi'; // 🏏 Cricket icon

const projectsData = [
  {
    title: "ATS Resume Generator",
    description: "Built with Django and React. Generates ATS-friendly resumes with real-time preview and PDF export functionality. Features customizable templates and analytics dashboard.",
    tags: [ "Python","Django","SQLite","HTML","CSS","Javascript"],
    githubLink: "https://github.com/Rajarajeshwaran-2003/Resumeproject",
    liveLink: "https://resumeproject-9058.onrender.com/",
    icon: <FaFileAlt />,
    category: "full-stack"
  },
  {
    title: "Voice Assistant Chatbot ",
    description: "Voice & text-based chatbot with image analysis using OpenAI API. Features speech recognition, conversation history, and multi-modal responses.",
    tags: ["Python","Django","SQLite","HTML","CSS","Javascript", "Web Speech API"],
    githubLink: "https://github.com/Rajarajeshwaran-2003/Bot_project",
    liveLink: "https://bot-project-xph6.onrender.com/",
    icon: <FaRobot />,
    category: "ai"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured shopping site with product search, cart system, user auth, and Stripe integration. Includes admin dashboard and inventory management.",
    tags: ["Python","Django","SQLite","HTML","CSS","Javascript"],
    githubLink: "https://github.com/Rajarajeshwaran-2003/ecommerce_project",
    liveLink: "https://ecommerce-project-4ose.onrender.com/",
    icon: <FaShoppingCart />,
    category: "web"
  },
    {
    title: "Cricket Hub Web Application ",
    description: "Developed a responsive cricket website with interactive features to improve user experience.",
    tags: ["HTML","CSS","Javascript","Figam","UI/UX"],
    githubLink: "https://github.com/Rajarajeshwaran-2003/Cricket-Hub",
    liveLink: "https://rajarajeshwaran-2003.github.io/Cricket-Hub/",
    icon: < GiCricketBat />,
    category: "web"
  },
    {
    title: "Matrimony Website ",
    description: "Developed a responsive matchmaking website using React and Vite with animated UI, 3D effects, reusable components, and styled forms for login/register.",
    tags: ["Python","Django","SQLite","React(vite)"],
    githubLink: "https://github.com/Rajarajeshwaran-2003/Matrimony-website-api-backend",
    liveLink: "https://matrimonyfullproject.netlify.app/",
    icon: <FaUserFriends />,
    category: "web"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <p className="subtitle">Here are some of my recent works</p>
        
        <div className="projects-content">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index} data-category={project.category}>
              <div className="project-icon">{project.icon}</div>
              
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                      aria-label={`View ${project.title} on GitHub`}
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="project-actions">
                <a 
                  href={project.liveLink || project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-project-btn"
                >
                  View Project
                  <span className="btn-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-more">
          <a href="https://github.com/Rajarajeshwaran-2003" className="view-more-btn">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;