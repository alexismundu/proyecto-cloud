import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// import userProperties from './data/propiedades';
import routes from './routes';
import { queryAPI } from './utils/fetch';

import HomePage from './pages/home-page';
import NewPropertyPage from './pages/create-property';
import LoginPage from './pages/login';
import AppBar from './components/app-bar';
import WithSpinner from './components/with-spinner';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePageWithSpinner = (props) => {
  return WithSpinner(HomePage)(props);
};

const App = () => {
  const [properties, setProperties] = useState([]);
  const [isLoadingProperties, setIsLoadingProperties] = useState(true);

  const {
    isAuthenticated,
    isLoading: isAuthenticationLoading,
    user,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    queryAPI({ getAccessTokenSilently }).then((response) => {
      setIsLoadingProperties(false);
      if (response) setProperties(response.data);
    });
  }, [getAccessTokenSilently, user]);

  const handleAddProperty = (newProperty) => {
    setProperties([newProperty, ...properties]);
  };

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
                    <HomePageWithSpinner
                      properties={properties}
                      isLoading={isLoadingProperties || isAuthenticationLoading}
                    />
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
