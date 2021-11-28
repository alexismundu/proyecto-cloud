import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

import './property-item.styles.scss';

const PropertyItem = (props) => {
  const { id, thumbnail, address, details, isChecked, phone, handleIsChecked, handleADeleteProperty } =
    props;

  console.log(`props.id`, props.id)

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      handleADeleteProperty({
        id,
        address,
        phone,
        details,
        isChecked: false,
        thumbnail,
      });
      console.log('delete completed!');
    } catch (error) {
      console.log('error deleting property', error.message);
    }
  };

  return (
    <div className="property-item">
      {thumbnail && (
        <img src={thumbnail} alt={thumbnail} className="property-item__img" />
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
          {isChecked ? (
            <CheckBoxIcon onClick={() => handleIsChecked(props)} />
          ) : (
            <CheckBoxOutlineBlankIcon onClick={() => handleIsChecked(props)} />
          )}
          <DeleteIcon onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
