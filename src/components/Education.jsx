import React from 'react';
import { FaGraduationCap, FaUniversity, FaStar, FaPercentage, FaSchool } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      icon: <FaGraduationCap />,
      date: "2025",
      degree: (
         <div className="degree-title">
        Master of Computer Applications
        <div className="degree-abbreviation">(MCA)</div>
      </div>
      ),
      details: [
        { icon: <FaStar />, text: "GPA: 8.64" },
        { icon: <FaUniversity />, text: "Dr. SNS Rajalakshmi College of Arts and Science (Autonomous), Coimbatore" }
      ],
      description:"Completed Master of Computer Applications with a specialization in software development. Gained strong expertise in data structures, algorithms, and programming concepts. Hands-on experience in building web applications using modern technologies. Eager to apply technical skills in real-world software development projects."
    },
    {
      id: 2,
      icon: <FaGraduationCap />,
      date: "2023",
      degree: (
      <div className="degree-title">
      Bachelor of Commerce and Computer Applications
      <div className="degree-abbreviation">(B.Com CA)</div>
    </div>
      ),
      details: [
        { icon: <FaStar />, text: "GPA: 8.29" },
        { icon: <FaUniversity />, text: "PRIST Deemed to be University, Thanjavur" }
      ],
      description: "Completed a comprehensive degree program integrating core commerce principles with in-depth training in computer application development, equipping me with a strong foundation in both business operations and modern software solutions."
    },
    {
      id: 3,
      icon: <FaSchool />,
      date: "2020",
      degree: "Higher Secondary Education",
      details: [
        { icon: <FaPercentage />, text: "SSLC: 70.4% (2018)" },
        { icon: <FaPercentage />, text: "HSC: 72.66% (2020)" },
        { icon: <FaSchool />, text: "St. Thomas Higher Secondary School, Pattukkottai" }
      ],
      description: "Successfully completed higher secondary education with a specialization in Commerce and Computer Applications. Developed a solid understanding of accounting, business studies, and economics. Gained practical exposure to computer fundamentals, programming, and office applications. Built a strong academic base for pursuing higher studies in computer science and software development."
    }
  ];

  return (
    <section className="education" id="education">
      <div className="max-width">
        <h2 className="title" data-text="Education">Education</h2>
        <div className="education-content">
          <div className="education-timeline">
            {educationData.map((item, index) => (
              <div className="education-item" key={item.id}>
                <div className="education-icon">
                  {item.icon}
                </div>
                <div className="education-date">{item.date}</div>
                <div className={`education-details ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <h3>{item.degree}</h3>
                  <div className="education-meta">
                    {item.details.map((detail, i) => (
                      <span key={i}>
                        {detail.icon} {detail.text}
                      </span>
                    ))}
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;