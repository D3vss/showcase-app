import React from "react";
import { useFormikContext } from "formik";
function AppField({ name, type }) {
  const { handleChange, errors, touched } = useFormikContext();
  return (
    <label>
      {name} :
      <input type={type} name={name} defaultValue="" onChange={handleChange} />
      {touched[name] && errors[name] && <div>{errors[name]}</div>}
    </label>
  );
}

export default AppField;
