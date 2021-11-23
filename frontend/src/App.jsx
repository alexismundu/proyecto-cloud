import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import userProperties from './data/propiedades';
import routes from './routes';

import HomePage from './pages/home-page';
import NewPropertyPage from './pages/create-property';
import LoginPage from './pages/login';
import AppBar from './components/app-bar';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [properties, setProperties] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { isAuthenticated, isLoading: isAuthenticationLoading } = useAuth0();
  console.log(isAuthenticated);

  useEffect(() => {
    setIsLoading(false);
    setProperties(userProperties);
  }, []);

  const handleAddProperty = (newProperty) => {
    setProperties([...properties, newProperty]);
  };

  if (isAuthenticationLoading) return <h1>Loading</h1>;

  return (
    <>
      {!isAuthenticated ? (
        <LoginPage />
      ) : (
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
      )}
    </>
  );
};

export default App;
