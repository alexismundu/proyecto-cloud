import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home-page';
import AppBar from './components/app-bar';

ReactDOM.render(
  <React.StrictMode>
    <div className="app-container">
      <HomePage />
      <AppBar />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
