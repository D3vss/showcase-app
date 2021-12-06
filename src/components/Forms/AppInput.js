import React from "react";
import { Children } from "react";

import { InputContainer, Input, IconHolder } from "./AppInput.elements";
function AppInput({ icon, children, placeholder, type, name, value }) {
  return (
    <InputContainer>
      <Input placeholder={placeholder} type={type} name={name} value={value} />
      {icon && <IconHolder>{children}</IconHolder>}
    </InputContainer>
  );
}

export default AppInput;
