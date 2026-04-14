import { Link } from "react-router-dom";

function Contact({ brief }) {
  if (brief) {
    return (
      <section>
        <h2>Contact</h2>
        <p>Feel free to connect with me.</p>
        <Link to="/contact">
          <button>View More</button>
        </Link>
      </section>
    );
  }

  return (
    <div className="contact-container">
      <h1>Contact</h1>

      <div className="contact-section">
        <p><strong>Name:</strong> Aryan Dinesh Ninawe</p>
        <p><strong>Email:</strong> aryanninawe21@gmail.com</p>
        <p><strong>Phone:</strong> +91 9075979676</p>
        <p><strong>Location:</strong> Nagpur, Maharashtra, India</p>
      </div>

      <div className="contact-section">
        <h2>Connect with Me</h2>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/aryanninawe21/" target="_blank">
            View Profile
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/aryan-ninawe-21" target="_blank">
            View GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;