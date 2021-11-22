import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./property-item.styles.scss";

const PropertyItem = ({ name, thumbnail, address }) => {
  return (
    <div className="property-item">
      <img src={thumbnail} alt={address} className="property-item__img" />
      <div className="property-item__info">
        <div className="property-item__info__left-section">
          <h3 className="property-item__info__left-section__name">{name}</h3>
          <h6 className="property-item__info__left-section__description">
            {address}
          </h6>
        </div>
        <div className="property-item__info__right-section">
          <PhoneIcon />
          <LocationOnIcon />
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
