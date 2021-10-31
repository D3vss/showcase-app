import React from "react";
import { Formik } from "formik";
import AppField from "./AppField";
import { AppButton } from "./Styled Components/AppButton";

import styled from "styled-components";

function AppForm({
  validationSchema,
  fieldsList,
  initialValues,
  onSubmit,
  children,
  buttonTitle,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <FormStyled onSubmit={handleSubmit}>
          {fieldsList.map((value) => (
            <AppField
              type={value.type}
              name={value.name}
              label={value.label}
              key={value.id}
            />
          ))}

          {children}
          <AppButton className="Appbutton" type="submit" color="blue">
            {buttonTitle}
          </AppButton>
        </FormStyled>
      )}
    </Formik>
  );
}

//Style here

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export default AppForm;
