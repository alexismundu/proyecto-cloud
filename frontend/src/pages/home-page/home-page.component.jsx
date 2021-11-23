import React from 'react';
import './home-page.styles.scss';
import PropertiesList from '../../components/properties-list';

function HomePage({ properties = [], isLoading = true }) {
  console.log(properties);
  return (
    <div
      className={
        !!properties ? 'home-page-container' : 'home-page-container--only-text'
      }
    >
      {isLoading ? (
        <h1>Loading...</h1>
      ) : properties !== [] ? (
        <PropertiesList properties={properties} />
      ) : (
        <h1>Comienza agregando tu primera propiedad</h1>
      )}
    </div>
  );
}

export default HomePage;
