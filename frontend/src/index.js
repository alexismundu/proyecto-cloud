import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home-page';
import NewPropertyPage from './pages/create-property-page';
import AppBar from './components/app-bar';

import userProperties from './data/propiedades'

const App = () => {
  const [properties, setProperties] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setProperties(userProperties);
  }, []);

  const handleAddProperty = (newProperty) => {
    setProperties([...properties, newProperty]);
  }

  return (
  <React.StrictMode>
    <Router>
      <div className="app-container">
        <div className="app-container__upper">
          <Routes>
            <Route path={routes.homePage} element={<HomePage properties={properties} isLoading={isLoading} />} />
          </Routes>
          <Routes>
            <Route
              path={routes.createProperty}
              element={<NewPropertyPage handleAddProperty={handleAddProperty} />}
            />
          </Routes>
        </div>
        <div className="app-container__lower">
          <AppBar />
        </div>
      </div>
    </Router>
  </React.StrictMode>)
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
