import React, { useState } from 'react';

import FormInput from '../../components/form-input';
import CustomButton from '../../components/custom-button';

import './create-property.styles.scss';

const CreatePropertyPage = ({ handleAddProperty }) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const setDefaultState = () => {
    setAddress('');
    setPhone('');
    setDetails('');
    setThumbnail('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      handleAddProperty({
        address,
        phone,
        details,
        isChecked: false,
        thumbnail,
      });
      console.log('submit completed!');
      setDefaultState();
    } catch (error) {
      console.log('error signing up', error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'address':
        setAddress(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'details':
        setDetails(value);
        break;
      default:
        console.log(value);
        setThumbnail(value);
        break;
    }
  };

  return (
    <div className="create-property-page">
      <h1 className="create-property-page__title">Registrar propiedad</h1>
      <form
        className="create-property-page__create-property-form"
        onSubmit={handleSubmit}
      >
        <FormInput
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
          label="Dirección"
          required
        />
        <FormInput
          type="tel"
          name="phone"
          pattern="[0-9]{10}"
          value={phone}
          onChange={handleChange}
          label="Teléfono"
          required
        />
        <FormInput
          type="text"
          name="details"
          value={details}
          onChange={handleChange}
          label="Agregar detalles"
        />
        <label name="thumbnail">Imagen</label>
        <br />
        <input
          type="file"
          name="thumbnail"
          value={thumbnail}
          onChange={handleChange}
        />
        <CustomButton
          type="submit"
          className="create-property-page__create-property-form__btn"
        >
          Guardar
        </CustomButton>
      </form>
    </div>
  );
};

export default CreatePropertyPage;
