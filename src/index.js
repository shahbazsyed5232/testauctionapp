import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- Use "react-dom/client"
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // <-- New method
root.render(
  <Router>
    <App />
  </Router>
);
