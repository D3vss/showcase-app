import React from "react";
import AppForm from "../components/AppForm";
import { AppButton } from "../components/Styled Components/AppButton";

import * as Yup from "yup";

import "../styles/LoginPage.css";

const fieldsList = [
  { id: 1, name: "email", type: "text", label: "Email" },
  { id: 2, name: "password", type: "password", label: "Password" },
  {
    id: 3,
    name: "confirm_password",
    type: "password",
    label: "Confirm Password",
  },
];

const initialValues = { email: "", password: "", confirm_password: "" };
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email!")
    .required("Please enter your email."),
  password: Yup.string().required("Enter your password!"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
const onSubmit = () => {
  console.log("Submit");
};

function RegisterForm(props) {
  return (
    <div className="container">
      <div className="form-container">
        <AppForm
          fieldsList={fieldsList}
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
          buttonTitle="Create your account!"
        ></AppForm>
      </div>
    </div>
  );
}

export default RegisterForm;
