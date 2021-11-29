import React from 'react';
import PropertyItem from '../property-item';

import './properties-list.styles.scss';

const PropertiesList = ({ handleIsChecked,handleADeleteProperty, properties }) => {
  return (
    <div className="properties-list">
      {properties.map((property) => (
        <PropertyItem
          key={property.id}
          {...property}
          handleIsChecked={handleIsChecked}
          handleADeleteProperty={handleADeleteProperty}
        />
      ))}
    </div>
  );
};

export default PropertiesList;
