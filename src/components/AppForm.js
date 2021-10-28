import React from "react";
import { Formik } from "formik";
import AppField from "./AppField";

function AppForm({ validationSchema, fieldsList, initialValues, onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <>
            {fieldsList.map((value) => (
              <AppField type={value.type} name={value.name} />
            ))}
          </>
        </form>
      )}
    </Formik>
  );
}

export default AppForm;
