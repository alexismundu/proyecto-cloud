import React, { useState } from 'react';

import FormInput from '../../components/form-input';
import CustomButton from '../../components/custom-button';

import { useNavigate } from 'react-router-dom';

import './create-property.styles.scss';

const CreatePropertyPage = ({ handleAddProperty }) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [file, setFile] = useState(null);

  const navigateTo = useNavigate();

  const setDefaultState = () => {
    setAddress('');
    setPhone('');
    setDetails('');
    setThumbnail('');
    setFile(null);
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
      }, file?.raw);
      console.log('submit completed!');
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
    <div className="create-property-page">
      <h1 className="create-property-page__title">Registrar propiedad</h1>
      <form
        className="create-property-page__create-property-form"
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
            type="submit"
            className="create-property-page__create-property-form__btn"
          >
            Guardar
          </CustomButton>

        </div>
      </form>
    </div>
  );
};

export default CreatePropertyPage;
