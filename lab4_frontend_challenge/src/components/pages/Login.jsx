import { useState } from 'react';
import { USER_CREDENTIALS } from '../config/Constants';
import '../styles/Table.css';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === USER_CREDENTIALS.email && password === USER_CREDENTIALS.password) {
      setIsLoggedIn(true);
      setSuccess(true);
      setError('');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="page-container">
      <div className="info-card">
        <h2>Login</h2>
        {success ? (
          <div className="success-message">
            <p>You are successfully logged in.</p>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="contact-form">
            {error && <p style={{ color: '#ff6b6b', fontSize: '0.9rem' }}>{error}</p>}
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="submit-btn">Login</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;