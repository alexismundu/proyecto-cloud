import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home-page';
import NewPropertyPage from './pages/create-property-page';
import AppBar from './components/app-bar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="app-container">
        <div className="app-container__upper">
          <Routes>
            <Route path={routes.homePage} element={<HomePage />} />
          </Routes>
          <Routes>
            <Route
              path={routes.createProperty}
              element={<NewPropertyPage />}
            />
          </Routes>
        </div>
        <div className="app-container__lower">
          <AppBar />
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
