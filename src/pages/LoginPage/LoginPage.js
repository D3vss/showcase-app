import React from "react";
import { Container } from "../../globalStyles";
import { Card, LoginButton, AppForm } from "./LoginPage.elements";
import { Formik } from "formik";
import * as Yup from "yup";

import { AppInput } from "../../components";
import * as FA from "react-icons/fa";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Password is required!"),
});

function LoginPage(props) {
  return (
    <Container>
      <Card>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={console.log("submitted")}
        >
          {({ handleSubmit }) => (
            <AppForm onSubmit={handleSubmit}>
              <AppInput
                icon={true}
                name={"email"}
                type={"text"}
                placeholder={"Email"}
              >
                <FA.FaUserAlt />
              </AppInput>

              <AppInput
                icon={true}
                name={"password"}
                type={"password"}
                placeholder={"Password"}
              >
                <FA.FaLock />
              </AppInput>
              <LoginButton type="submit">Login</LoginButton>
            </AppForm>
          )}
        </Formik>
      </Card>
    </Container>
  );
}

export default LoginPage;
