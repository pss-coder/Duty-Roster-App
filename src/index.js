import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';

import App from './Components/App';
import Roster from './Components/Roster'

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
