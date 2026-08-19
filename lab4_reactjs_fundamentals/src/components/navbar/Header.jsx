import { Link } from 'react-router-dom';
import profilePic from '../../assets/profile.jpeg';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="nav-logo">Elizha</div>
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <span className="hero-greeting">Hello! I am</span>
          <h1 className="hero-title">
            <span className="highlight-text">ELIZHA GONZAGA CRUZ</span>
          </h1>
        </div>

        <div className="hero-image-wrapper">
          <img src={profilePic} alt="Elizha Cruz" className="hero-avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;