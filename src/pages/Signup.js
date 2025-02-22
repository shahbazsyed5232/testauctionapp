// src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    axios.post('/api/signup', { email, password })
      .then(response => console.log(response.data));
  };

  return (
    <div className='container'>
      <h1>Signup</h1>
      <input type='email' placeholder='Email' onChange={e => setEmail(e.target.value)} />
      <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
