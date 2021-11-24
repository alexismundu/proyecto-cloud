import React from 'react';
import './home-page.styles.scss';
import PropertiesList from '../../components/properties-list';
import LogoutButton from '../../components/logout-button';

function HomePage({ properties = [] }) {
  return (
    <div
      className={`home-page-container ${properties.length > 0 ? '' : 'only-text'}`
      }
    >
      <div className="home-page-container__logout-btn">
        <LogoutButton />
      </div>
      {properties.length > 0 ? (
        <>
          <PropertiesList properties={properties} />
        </>
      ) : (
        <h1>Comienza agregando tu primera propiedad</h1>
      )}
    </div>
  );
}

export default HomePage;
