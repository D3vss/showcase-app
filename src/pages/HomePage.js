import React from "react";
import { AppButton } from "../components/Styled Components/AppButton";

function HomePage(props) {
  return (
    <div>
      <AppButton color="yellow">Login</AppButton>

      <AppButton color="yellow">Create an account</AppButton>
    </div>
  );
}

export default HomePage;
