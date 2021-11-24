import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import FormInput from '../../components/form-input';
import CustomButton from '../../components/custom-button';
import { queryAPI } from '../../utils/fetch';

import './create-property.styles.scss';

const CreatePropertyPage = ({ handleAddProperty }) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');
  const {getAccessTokenSilently} = useAuth0();

  useEffect(() => {
    queryAPI({getAccessTokenSilently}).then(resJSON => {console.log(resJSON.data)})
  }, [getAccessTokenSilently])

  const setDefaultState = () => {
    setAddress('');
    setPhone('');
    setDetails('');
    setImage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      handleAddProperty({ id: 2, address, phone, details, isChecked: false });
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
        setImage(value);
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
        <label name="image">Imagen</label>
        <br />
        <input type="file" name="image" value={image} onChange={handleChange} />
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
