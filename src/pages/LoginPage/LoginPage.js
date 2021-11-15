import React from "react";
import { Container } from "../../globalStyles";
import { Input, Card, LoginButton } from "./LoginPage.elements";
function LoginPage(props) {
  return (
    <Container>
      <Card>
        <Input type="email" placeholder="Email..." />
        <Input type="password" placeholder="Password..." />
        <LoginButton>Login</LoginButton>
      </Card>
    </Container>
  );
}

export default LoginPage;
