import React from "react";
import AppForm from "../components/AppForm";
import * as Yup from "yup";

import "../styles/LoginPage.css";

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
    <div className="container">
      <div className="form-container">
        <AppForm
          fieldsList={fieldsList}
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <label className="checkBox" id="remember-me-box">
            <input type="checkbox" />
            Remember me?
          </label>
        </AppForm>
        <button className="appButton">Create An Account</button>
      </div>
    </div>
  );
}

export default LoginPage;
