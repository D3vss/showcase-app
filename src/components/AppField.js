import React from "react";
import { useFormikContext } from "formik";

import styled from "styled-components";

function AppField({ name, type }) {
  const { handleChange, errors, touched } = useFormikContext();
  return (
    <Label>
      {name} :
      <input type={type} name={name} defaultValue="" onChange={handleChange} />
      {touched[name] && errors[name] && <div>{errors[name]}</div>}
    </Label>
  );
}

const Label = styled.label`
  vertical-align: top;
  display: flex;
  flex-direction: column;
`;

export default AppField;
