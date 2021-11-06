import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/app-bar';

ReactDOM.render(
  <React.StrictMode>
    <div className="app-container">
      <App />
      <AppBar />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
