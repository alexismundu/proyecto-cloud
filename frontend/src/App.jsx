import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import routes from './routes';
import { queryUserProperties, createPropertyInDb } from './utils/fetch';

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
    if (user) {
      queryUserProperties({ getAccessTokenSilently, userId: user.sub }).then(
        (response) => {
          setIsLoadingProperties(false);
          if (response) setProperties(response.data);
        }
      );
    }
  }, [user, getAccessTokenSilently]);

  const handleAddProperty = (newProperty) => {
    if (user) {
      createPropertyInDb({
        getAccessTokenSilently,
        data: newProperty,
        userId: user.sub,
      });
    }
    // setProperties([newProperty, ...properties]);
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
                  exact
                  path={routes.createProperty}
                  element={
                    <NewPropertyPage handleAddProperty={handleAddProperty} />
                  }
                />
                <Route
                  exact
                  path={routes.homePage}
                  element={
                    <HomePageWithSpinner
                      properties={properties}
                      isLoading={isLoadingProperties || isAuthenticationLoading}
                    />
                  }
                />
                <Route path="/" element={<Navigate to={routes.homePage} />} />
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
