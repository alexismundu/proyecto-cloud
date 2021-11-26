import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

import './property-item.styles.scss';

const PropertyItem = ({
  id,
  thumbnail,
  address,
  details,
  isChecked,
  phone,
}) => {
  return (
    <div className="property-item">
      {thumbnail && (
        <img src={thumbnail} alt={id} className="property-item__img" />
      )}
      <div className="property-item__info">
        <div className="property-item__info__left-section">
          <h3 className="property-item__info__left-section__name">{address}</h3>
          <h6 className="property-item__info__left-section__description">
            {details}
          </h6>
        </div>
        <div className="property-item__info__right-section">
          <PhoneIcon onClick={() => window.open(`tel:${phone}`)} />
          {isChecked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
