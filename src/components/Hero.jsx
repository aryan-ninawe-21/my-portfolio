function Hero() {
  return (
    <section className="hero" id="home">
      <h1>Hi, I'm Aryan Ninawe 👋</h1>
      <h2>Aspiring Software Developer</h2>
      <p>Aspiring Software and AI/ ML Engineer with hands-on experience in Python, Machine Learning, and Data Analysis. Currently working as an AIML Engineer Intern with exposure to real-world workflows including data preprocessing, model building, and evaluation. Skilled in MySQL and familiar with web development using Django. Passionate about building scalable applications, solving real-world problems, and continuously learning new technologies in a growth-oriented environment</p>

      <button onClick={() => window.location.href="/projects"}>
        View Projects
      </button>
    </section>
  );
}

export default Hero;