import React, { useState } from 'react';

import FormInput from '../../components/form-input';
import CustomButton from '../../components/custom-button';

import { useNavigate, useLocation } from 'react-router-dom';

import './edit-property.styles.scss';

const EditPropertyPage = ({ handleEditProperty }) => {
  const location = useLocation();
  const property = { ...location.state };
  console.log(`property`, property)
  const [address, setAddress] = useState(property.address || '');
  const [phone, setPhone] = useState(property.phone || '');
  const [details, setDetails] = useState(property.details || '');
  const [thumbnail, setThumbnail] = useState('');
  const [hasChanges, setHasChanges] = useState(false);
  const [file, setFile] = useState({ raw: null, url: (property.thumbnail || '') });

  const navigateTo = useNavigate();

  const setDefaultState = () => {
    setAddress('');
    setPhone('');
    setDetails('');
    setThumbnail('');
    setFile({ raw: null, url: (property.thumbnail || '') });
    setHasChanges(false)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      handleEditProperty({ ...property }, {
        id: property.id,
        userId: property.userId,
        address,
        phone,
        details,
        isChecked: property.isChecked,
        thumbnail,
      }, file?.raw);
      console.log('update completed!');
      setDefaultState();
      navigateTo('/')
    } catch (error) {
      console.log('error signing up', error.message);
    }
  };

  const handleImageClose = (event) => {
    event.preventDefault();
    setThumbnail('');
    setFile(null)

  }

  const handleChange = (event) => {
    const { name, value } = event.target;


    setHasChanges(true);

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
        setFile({ url: URL.createObjectURL(event?.target?.files[0]), raw: event?.target?.files[0] })
        break;
    }
  };

  return (
    <div className="edit-property-page">
      <h1 className="edit-property-page__title">Registrar propiedad</h1>
      <form
        className="edit-property-page__edit-property-form"
        onSubmit={handleSubmit}
      >
        <div className="form-wrapper">
          <FormInput
            className="input_section"
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            label="Dirección"
            required
          />
          <FormInput
            className="input_section"
            type="tel"
            name="phone"
            pattern="[0-9]{10}"
            value={phone}
            onChange={handleChange}
            label="Teléfono"
            required
          />
          <FormInput
            className="input_section"
            type="text"
            name="details"
            value={details}
            onChange={handleChange}
            label="Agregar detalles"
          />
          <label className={`file-upload`} name="thumbnail">
            {file ? /* eslint-disable-line*/ <a href='' className="close-button" onClick={handleImageClose} >x</a> : null}
            {file ? <img className='img-preview' src={file.url} alt="Error de carga" onClick={handleChange} /> : null}
            {file ? '' : 'Subir Imagen...'}
            <input
              type="file"
              name="thumbnail"
              value={thumbnail}
              onChange={handleChange}
            />
          </label>
          <CustomButton
            disabled={!hasChanges}
            type="submit"
            className="edit-property-page__edit-property-form__btn"
          >
            Actualizar
          </CustomButton>

        </div>
      </form>
    </div>
  );
};

export default EditPropertyPage;
