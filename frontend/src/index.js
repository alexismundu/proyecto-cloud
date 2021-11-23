import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

import userProperties from './data/propiedades';
import routes from './routes';

import HomePage from './pages/home-page';
import NewPropertyPage from './pages/create-property';
import AppBar from './components/app-bar';
import LoginButton from './components/login-button';
import Logout from './components/logout-button';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const App = () => {
  const [properties, setProperties] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setProperties(userProperties);
  }, []);

  const handleAddProperty = (newProperty) => {
    setProperties([...properties, newProperty]);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <React.StrictMode>
        <Router>
          <div className="app-container">
            <div className="app-container__upper">
              <Routes>
                <Route
                  path={routes.homePage}
                  element={
                    <HomePage properties={properties} isLoading={isLoading} />
                  }
                />
              </Routes>
              <Routes>
                <Route
                  path={routes.createProperty}
                  element={
                    <NewPropertyPage handleAddProperty={handleAddProperty} />
                  }
                />
              </Routes>
            </div>
            <div className="app-container__lower">
              <AppBar />
            </div>
          </div>
        </Router>
      </React.StrictMode>
    </Auth0Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
