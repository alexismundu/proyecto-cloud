import React from "react";

import {
  GroupContainer,
  FormInputField,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputField onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel shouldShrink={otherProps.value.length}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
