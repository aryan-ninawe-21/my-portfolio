import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;