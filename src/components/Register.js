import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate(); // create navigate function

  const handleRegister = (event) => {
    event.preventDefault();

    // Check if name contains numbers
    if (/\d/.test(name)) {
        alert('Name should not contain numbers.');
        return;
    }
    // Check if lastName contains numbers
    if (/\d/.test(lastName)) {
        alert('Last Name should not contain numbers.');
        return;
    }    

    // Check if email contains @
    if (!/@/.test(email)) {
        alert('Please enter a valid email.');
        return;
    }

    // Handle registration logic here

    // Redirect to home page after registration
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        <button type="submit">Register</button>
      </form>
      <button onClick={handleLogin}>Already have an account? Login</button>
    </div>
  );
}

export default Register;