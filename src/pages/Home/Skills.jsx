import React, { useState } from 'react';
// import './Skills.css';

export const Skills = () => {
  const [activeSkill, setActiveSkill] = useState({
    title: 'Skill Title',
    description: 'Skill Description',
  });

  const [activeSubSkill, setActiveSubSkill] = useState({
    name: '',
    description: '',
  });

  const skillsData = {
    frontend: {
      title: 'Frontend Development',
      description: 'HTML, CSS, JavaScript, React.js, Solid.js, and GSAP for creating stunning user interfaces.',
      subSkills: [
        { name: 'HTML', description: 'Markup language for creating web pages.' },
        { name: 'CSS', description: 'Stylesheets for designing beautiful UIs.' },
        { name: 'JavaScript', description: 'Programming language for dynamic behavior.' },
        { name: 'React.js', description: 'Library for building UI components.' },
        { name: 'GSAP', description: 'Animation library for smooth and fluid animations.' },
      ],
    },
    backend: {
      title: 'Backend Development',
      description: 'Node.js, Express, RESTful APIs, and other backend frameworks for handling server logic.',
      subSkills: [
        { name: 'Node.js', description: 'JavaScript runtime for backend development.' },
        { name: 'Express', description: 'Framework for building server-side apps.' },
        { name: 'REST APIs', description: 'API design standard for web communication.' },
      ],
    },
    design: {
      title: 'Design',
      description: 'Figma, Adobe XD, and Sketch for UI/UX design and prototyping.',
      subSkills: [
        { name: 'Figma', description: 'Collaborative interface design tool.' },
        { name: 'Adobe XD', description: 'Tool for designing and prototyping UIs.' },
        { name: 'Sketch', description: 'Vector graphics editor for macOS.' },
      ],
    },
    database: {
      title: 'Database Management',
      description: 'SQL, MongoDB, and Firebase for managing and storing application data.',
      subSkills: [
        { name: 'SQL', description: 'Structured Query Language for managing databases.' },
        { name: 'MongoDB', description: 'NoSQL database for scalable applications.' },
        { name: 'Firebase', description: 'Backend platform with real-time database services.' },
      ],
    },
  };

  return (
    <div className="skills-section-wrapper">
      <div className="skills-frame">
        <div className="skills-section a_section">
          <div className="skills-title section-title">Skills</div>
          <div className="skills-list">
            {Object.keys(skillsData).map((key) => (
              <div
                className="skill-wrapper"
                key={key}
                onMouseEnter={() =>
                  setActiveSkill({
                    title: skillsData[key].title,
                    description: skillsData[key].description,
                  })
                }
                onMouseLeave={() =>
                  setActiveSkill({
                    title: 'Skill Title',
                    description: 'Skill Description',
                  })
                }
              >
                <div className="skill" id={key}>
                  {key}
                  <div className="sub-skills">
                    {skillsData[key].subSkills.map((subSkill, index) => (
                      <div
                        className="sub-skill-card"
                        key={index}
                        onMouseEnter={() =>
                          setActiveSubSkill({
                            name: subSkill.name,
                            description: subSkill.description,
                          })
                        }
                        onMouseLeave={() =>
                          setActiveSubSkill({
                            name: '',
                            description: '',
                          })
                        }
                      >
                        {subSkill.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="skill-details">
            <div className="skill-title">
              {activeSubSkill.name ? `${activeSkill.title} - ${activeSubSkill.name}` : activeSkill.title}
            </div>
            <div className="skill-description">
              {activeSubSkill.description || activeSkill.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
