import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Roster from './Roster'

import './index.css';
import App from './Components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Wrap App in Router for page redirect o
root.render(
  <Router >
  <Routes>
          <Route path="/roster" element={<Roster />} />
          <Route path="/" element={<App />} />
    </Routes>
  </Router>
);
