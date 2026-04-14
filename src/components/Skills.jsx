import { Link } from "react-router-dom";

function Skills({ brief }) {
  if (brief) {
    return (
      <section>
        <h2>Skills</h2>
        <p>Technologies, tools, and strengths I bring to development.</p>
        <Link to="/skills">
          <button>View More</button>
        </Link>
      </section>
    );
  }

  return (
    <div className="skills-container">
      <h1>Skills</h1>

      <div className="skills-section">
        <h2>Technical Skills</h2>
        <p><strong>Frontend:</strong> HTML, CSS</p>
        <p><strong>Programming:</strong> Python</p>
        <p><strong>Database:</strong> MySQL</p>
      </div>

      <div className="skills-section">
        <h2>Tools & Technologies</h2>
        <ul>
          <li>Jupyter Notebook</li>
          <li>Visual Studio Code (VS Code)</li>
          <li>MS Excel</li>
        </ul>
      </div>

      <div className="skills-section">
        <h2>Soft Skills</h2>
        <ul>
          <li>Adaptability</li>
          <li>Time Management</li>
          <li>Communication</li>
          <li>Cultural Awareness</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;