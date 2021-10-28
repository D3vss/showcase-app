import React from "react";

function AppField({ name, type, onTextChange }) {
  return (
    <label>
      {name} :
      <input type={type} name={name} onChange={onTextChange} />
    </label>
  );
}

export default AppField;
