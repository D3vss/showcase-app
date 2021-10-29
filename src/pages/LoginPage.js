import React from "react";
import AppForm from "../components/AppForm";
import * as Yup from "yup";

const fieldsList = [
  { id: 1, name: "email", type: "text" },
  { id: 2, name: "password", type: "password" },
];
const initialValues = { email: "", password: "" };
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email!")
    .required("Please enter your email."),
  password: Yup.mixed().required("Enter your password!"),
});
const onSubmit = () => {
  console.log("Submit");
};

function LoginPage(props) {
  return (
    <AppForm
      fieldsList={fieldsList}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  );
}

export default LoginPage;
