import '../styles/About.css';

function About() {
  return (
    <div className="page-container">
      <div className="info-card">
        <h2>About This Website</h2>
        <p>
          This website serves as a personal tech and development blog created for 
          <strong> Laboratory Activity 4: React.js Fundamentals</strong> under the course 
          <strong> Software Engineering 1</strong>.
        </p>
        <p>
          The primary purpose of this project is to practice and enhance my skills in web developing, 
          component-based architecture, and building responsive user interfaces with React.
        </p>
        
        <h3 className="about-creator-title">Created By</h3>
        <p><strong>Name:</strong> Elizha Gonzaga Cruz</p>
        <p><strong>Student ID:</strong> 2024-1005793</p>
        <p><strong>Program:</strong> Bachelor of Science in Computer Science with Specialization in Digital Forensics</p>
        <p><strong>Institution:</strong> National University - Manila</p>
      </div>
    </div>
  );
}

export default About;