import React from "react";
import { useFormikContext } from "formik";

import styled from "styled-components";

function AppField({ label, name, type }) {
  const { handleChange, errors, touched } = useFormikContext();
  return (
    <Label>
      {label} :
      <input type={type} name={name} defaultValue="" onChange={handleChange} />
      {touched[name] && errors[name] && <ErrorMsg>{errors[name]}</ErrorMsg>}
    </Label>
  );
}

const Label = styled.label`
  vertical-align: top;
  display: flex;
  flex-direction: column;
`;

const ErrorMsg = styled.div`
  color: red;
`;

export default AppField;
