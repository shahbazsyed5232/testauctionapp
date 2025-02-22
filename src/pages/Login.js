// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/api/login', { email, password })
      .then(response => console.log(response.data));
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <input type='email' placeholder='Email' onChange={e => setEmail(e.target.value)} />
      <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;