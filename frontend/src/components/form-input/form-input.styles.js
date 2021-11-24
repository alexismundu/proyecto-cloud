import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "#a5a6f6";

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 20px 0;
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shouldShrink }) => (shouldShrink ? shrinkLabel : "")}
`;

export const FormInputField = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel}
  }

  ${({ type }) => (type === "password" ? "letter-spacing: 0.3em;" : "")}
`;
