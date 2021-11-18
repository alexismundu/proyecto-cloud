import React from 'react'
import PropertyItem from '../property-item'

import './properties-list.styles.scss';

const PropertiesList = ({properties}) => {
  return (
    <div className="properties-list">
      {properties.map(property => 
        <PropertyItem key={property.address} {...property} />
      )}
    </div>
  )
}

export default PropertiesList
