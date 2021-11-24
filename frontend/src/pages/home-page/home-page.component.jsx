import React from 'react';
import './home-page.styles.scss';
import PropertiesList from '../../components/properties-list';
import LogoutButton from '../../components/logout-button';

function HomePage({ properties = [] }) {
  console.log(properties);
  return (
    <div
      className={
        !!properties ? 'home-page-container' : 'home-page-container--only-text'
      }
    >
      {properties !== [] ? (
        <>
          <div className="home-page-container__logout-btn">
            <LogoutButton />
          </div>
          <PropertiesList properties={properties} />
        </>
      ) : (
        <h1>Comienza agregando tu primera propiedad</h1>
      )}
    </div>
  );
}

export default HomePage;
