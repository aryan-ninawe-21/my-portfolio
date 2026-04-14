function About({ brief }) {
  if (brief) {
    return (
      <section>
        <h2>About Me</h2>
        <p>
          Electronics and Telecommunication student passionate about software,
          AI, and real-world problem solving.
        </p>
        <a href="/about">
          <button>View More</button>
        </a>
      </section>
    );
  }

  return (
    <div className="about-container">
      <h1>About Me</h1>

      <p className="about-intro">
        A dedicated Electronics and Telecommunication Engineering student with a
        strong interest in software development, artificial intelligence, and
        building impactful real-world solutions.
      </p>

      <div className="about-section">
        <h2>Who I Am</h2>
        <p>
          I am a final-year Electronics and Telecommunication Engineering
          student with a growing passion for the software domain. Currently, I
          am working as an AIML Engineering Intern, where I gain hands-on
          experience in building intelligent systems and working with real-world
          data.
        </p>
        <p>
          I enjoy developing scalable web applications, exploring machine
          learning concepts, and solving practical problems through technology.
          I am always eager to learn new tools and technologies to stay aligned
          with industry trends.
        </p>
      </div>

      <div className="about-section">
        <h2>Education</h2>
        <p>
          <strong>Bachelor of Technology in Electronics & Telecommunication Engineering</strong><br />
          Yeshwantrao chavan college of Engineering (2022 – Present)
        </p>
        <p>
          <strong>Higher Secondary Education</strong><br />
          Tip Top Convent, Maharashtra (2020 – 2022)
        </p>
        <p>
          <strong>Secondary Education</strong><br />
          Narayana Vidyalayam, Maharashtra
        </p>
      </div>

      <div className="about-section">
        <h2>Interests & Career Goals</h2>
        <p>
          I am deeply interested in software development, artificial
          intelligence, and data-driven applications. I enjoy working on projects
          that combine coding with intelligent decision-making systems.
        </p>
        <p>
          My goal is to become a skilled software engineer with expertise in
          AI/ML while also exploring opportunities in business domains like real
          estate and family enterprises.
        </p>
      </div>

      <div className="about-section">
        <h2>Strengths & Work Style</h2>
        <p>
          I am detail-oriented, disciplined, and committed to delivering
          high-quality work. I focus on accuracy and continuous improvement.
        </p>
        <p>
          I believe in consistency, problem-solving, and effective time
          management. I am also actively improving my communication and
          confidence.
        </p>
      </div>

      <footer className="about-footer">
        © 2026 Aryan Ninawe
      </footer>
    </div>
  );
}

export default About;