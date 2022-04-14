import React from "react";
import Normal from "../../Components/Navbar/Normal";
import SignUp from "../../Components/SignUp/SignUp";
import SignIn from "../../Components/SignIn/Signin";
import { useLocation } from "react-router-dom";

export default function General() {
  let location = useLocation();
  if (location.pathname === "/") {
    return <Normal />;
  } else if (location.pathname === "/sign-up") {
    return (
      <>
        <Normal />
        <SignUp />
      </>
    );
  } else if (location.pathname === "/signin") {
    return (
      <>
        <Normal></Normal>
        <SignIn></SignIn>
      </>
    );
  }
}
