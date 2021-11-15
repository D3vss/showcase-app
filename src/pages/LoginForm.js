import React from "react";
import AppForm from "../components/AppForm";
import { Button } from "../globalStyles";

import * as Yup from "yup";

import "../styles/LoginPage.css";

const fieldsList = [
  { id: 1, name: "email", type: "text", label: "Email" },
  { id: 2, name: "password", type: "password", label: "Password" },
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

function LoginForm(props) {
  return (
    <div className="container">
      <div className="form-container">
        <AppForm
          fieldsList={fieldsList}
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
          buttonTitle="Login"
        >
          <label className="checkBox" id="remember-me-box">
            <input type="checkbox" />
            Remember me?
          </label>
        </AppForm>
      </div>
    </div>
  );
}

export default LoginForm;
