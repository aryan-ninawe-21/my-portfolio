import { Link } from "react-router-dom";

function Projects({ brief }) {
  if (brief) {
    return (
      <section>
        <h2>Projects</h2>
        <p>Some of my key development and AI/ML projects.</p>
        <Link to="/projects">
          <button>View More</button>
        </Link>
      </section>
    );
  }

  return (
    <div className="projects-container">
      <h1>Projects</h1>

      {/* Project 1 */}
      <div className="project-card">
        <h2>House Price Prediction Web Application</h2>
        <ul>
          <li>Developed Django-based web application with REST API integration for real-time predictions</li>
          <li>Integrated ML model and optimized backend performance with MySQL</li>
          <li>Applied OOP, modular coding, and SDLC practices</li>
          <li>Managed code using Git version control</li>
        </ul>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <h2>Campus Placement Prediction System</h2>
        <ul>
          <li>Built ML model using Python achieving ~85% accuracy</li>
          <li>Performed data preprocessing, feature engineering, and evaluation</li>
          <li>Implemented modular architecture using OOP principles</li>
          <li>Used Git for version control and collaboration</li>
        </ul>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <h2>Active Location Emergency Response Tracker (ALERT) |  IOT-based Hardware project </h2>
        
        <ul>
          <li>
              Designed and implemented alert system using electronic components</li>
          <li>
               Analyzed circuit behavior and ensured proper signal response</li>
          <li>Performed testing and debugging of hardware setup</li>
          <li>
Improved system reliability through iterative testing</li>
          
        </ul>
      </div>
    </div>
  );
}

export default Projects;