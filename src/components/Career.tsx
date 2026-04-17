import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Development and Training Intern</h4>
                <h5>LucaInvent Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
              Dec 2024 - Mar 2025. Built a PG accommodation platform using
              JavaScript and Spring Boot, improving operational efficiency by
              30%. Tested and validated 15+ REST APIs using Postman to improve
              data reliability and reduce testing cycles by 40%. Analyzed crash
              reports and resolved high-priority bugs, reducing system errors
              by 15%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI and Backend Projects</h4>
                <h5>Academic and Personal Work</h5>
              </div>
              <h3>2023-NOW</h3>
            </div>
            <p>
              Built multiple backend-heavy and AI-driven applications including
              real-time packet analysis, retrieval-augmented systems, and
              practical tools focused on performance and usability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Current Focus</h4>
                <h5>Machine Learning and Backend Engineering</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Deepening skills in scalable backend development, system design,
              and applied machine learning through continuous project-based work.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open to Opportunities</h4>
                <h5>Internships and Entry-Level Roles</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Looking for opportunities where I can contribute to impactful
              products while growing as a software and AI engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
