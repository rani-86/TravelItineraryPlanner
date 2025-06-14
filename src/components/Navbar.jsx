import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/create">Create</Link>
    <Link to="/view">View</Link>
  </nav>
);

export default Navbar;
