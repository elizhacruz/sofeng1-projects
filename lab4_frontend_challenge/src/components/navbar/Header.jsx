import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header({ isLoggedIn }) {
  return (
    <nav className="top-navbar">
      <div className="nav-logo">
        {isLoggedIn ? "Hello, Elizha! 🩷" : "Hello! 🩷"}
      </div>
      <div className="nav-menu">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About Us
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Contact Us
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;