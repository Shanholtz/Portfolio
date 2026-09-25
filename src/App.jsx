import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <header className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo">
            Ashton Shanholtz
          </a>

          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#Certifications">Certifications</a>
            <a href="#skills">Skills</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <p className="eyebrow">COMPUTER SCIENCE GRADUATE</p>

            <h1>
              Hello! My name is <span> Ashton Shanholtz</span>.
              <br />
            </h1>

            <p className="hero-description">
              Welcome to my portfolio. I'm a computer science graduate
              interested in software development, new technologies, and building
              projects!
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button primary">
                View My Projects
              </a>

              <a href="#contact" className="button secondary">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Shanholtz" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ashtonshanholtz/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`${import.meta.env.BASE_URL}resume/AshtonShanholtz_Resume.pdf`} target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </div>
        </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">01 — ABOUT</p>
              <h2>About Me</h2>
            </div>

            <div className="about-grid">
              <div className="about-text">
                <p>
                  I'm a computer science graduate with a strong foundation in
                  software engineering, computer systems, and emerging
                  technologies.
                </p>

                <p>
                  My interests include web development, artificial
                  intelligence, algorithms, game development, 
                  and exploring new programming languages and frameworks.
                </p>

                <p>
                  When I'm not coding, I enjoy hiking, gaming, and puzzle solving.
                  Always looking for new challenges and opportunities to grow.
                </p>
              </div>

              <div className="about-card">
                <div>
                  <span>Education</span>
                  <strong>Shepherd University</strong>
                </div>

                <div>
                  <span>Degree</span>
                  <strong>B.S. Computer Science</strong>
                </div>

                <div>
                  <span>GPA</span>
                  <strong>3.50</strong>
                </div>

                <div>
                  <span>Graduated</span>
                  <strong>May 2025</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">02 — PROJECTS</p>
              <h2>Featured Projects</h2>
              <p>
                A selection of projects I've worked on throughout my studies
                and personal development.
              </p>
            </div>

            <div className="projects-grid">
              <ProjectCard
                number="01"
                title="This Portfolio!"
                description="This portfolio website was developed using React. It showcases my projects, skills, and background in computer science.
                The website was designed with a focus on responsive design and modern web development practices."
                technologies={["React", "JavaScript", "CSS"]}
                githubLink="https://github.com/Shanholtz"
              />

              <ProjectCard
                number="02"
                title="Game Development Project - Gone Fishin'"
                description="Game developed in Unity using C#. This project involved creating a fishing-card game hybrid where the cards you played would impact your ability to find and catch fish.
                The game was developed using agile development practices and was a great learning experience in both game design and programming."
                technologies={["Unity", "C#", "Agile Development"]}
                githubLink="https://github.com/Shanholtz"
                otherLinks={[
                  { label: "Game Demo", 
                    url: "https://kirbycrafter.itch.io/gone-fishin-bert-lenny" 
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="Certifications" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">03 — CERTIFICATIONS</p>
              <h2>Certifications</h2>
            </div>

            <div className="timeline">
              <Certification
                year="2026"
                title="AGAI: Python Programming for Generative and Agentic Workflows"
                description="Completed SimpliLearns Python Programming for Generative and Agentic Workflows certification, demonstrating proficiency in Python programming and its applications in generative and agentic workflows."
              />

              <Certification
                year="2026"
                title="AGAI: Foundations of Generative and Agentic AI"
                description="Completed SimpliLearns Foundations of Generative and Agentic AI certification, demonstrating a solid understanding of the principles and applications of generative and agentic AI."
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">04 — SKILLS</p>
              <h2>Technical Skills</h2>
            </div>

            <div className="skills-grid">
              <SkillGroup
                title="Languages"
                skills={[
                  "JavaScript",
                  "Python",
                  "Java",
                  "C++",
                  "HTML",
                  "CSS",
                  "C#",
                ]}
              />

              <SkillGroup
                title="Frameworks & Libraries"
                skills={[
                  "React",
                  "Node.js",
                  "Express",
                  "Spring",
                  "Tailwind CSS",
                ]}
              />

              <SkillGroup
                title="Tools & Technologies"
                skills={[
                  "Git",
                  "GitHub",
                  "VS Code",
                  "MS Visual Studio",
                  "Docker",
                  "Supabase",
                  "Linux",
                  "SQL",
                ]}
              />

              <SkillGroup
                title="Other"
                skills={[
                  "Data Structures",
                  "Algorithms",
                  "Object-Oriented Programming",
                  "REST APIs",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="section resume-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">05 — RESUME</p>
              <h2>Resume</h2>
              <p>
                You can view or download my resume by clicking the link below!
              </p>
            </div>
            <div className="resume-link">
              <a href={`${import.meta.env.BASE_URL}resume/AshtonShanholtz_Resume.pdf`} target="_blank" rel="noreferrer" className="button primary">
                View Resume
              </a>
              <a href={`${import.meta.env.BASE_URL}resume/AshtonShanholtz_Resume.pdf`} download="AshtonShanholtz_Resume.pdf" className="button secondary">
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="container contact-content">
            <p className="eyebrow">05 — CONTACT</p>

            <h2>Let's Connect</h2>

            <p>
              I'm always interested in connecting with others to develop
              new skills and share ideas. If you have a project, opportunity, or just want to chat, feel free to reach out!
              Phone: (304) 240-2280
            </p>

            <a href="mailto:adshanholtz@outlook.com" className="button primary">
              Email Me
            </a>

            <div className="social-links">
              <a href="https://github.com/Shanholtz" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/ashtonshanholtz/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href={`${import.meta.env.BASE_URL}resume/AshtonShanholtz_Resume.pdf`} target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <p>© 2026 Ashton Shanholtz. Built with React.</p>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}


/* -----------------------------
   Reusable Components
----------------------------- */

function ProjectCard({ number, title, description, technologies, githubLink, otherLinks = [] }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">{number}</span>

        <div className="project-links"> 
          {/* GitHub remains the default link */} 
          {githubLink && ( 
            <a 
            href={githubLink} 
            target="_blank" 
            rel="noreferrer" 
            > 
            GitHub ↗  
            </a> 
            )}
           
          {/* Optional additional links */} 
          {otherLinks.map((link) => ( 
            <a 
            key={link.label} 
            href={link.url} 
            target="_blank" 
            rel="noreferrer" 
            > 
            {link.label} ↗ 
            </a> 
          ))} 
        </div>
      </div>

      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="technology-list">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </article>
  );
}


function Certification({ year, title, description }) {
  return (
    <article className="timeline-item">
      <div className="timeline-year">{year}</div>

      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}


function SkillGroup({ title, skills }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>

      <div className="skill-list">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}


export default App;
