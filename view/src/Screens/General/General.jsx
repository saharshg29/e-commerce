import React from "react";
import Normal from "../../Components/Navbar/Normal";
import Buyer from "../../Components/SignUp/Buyer";
import Seller from "../../Components/SignUp/Seller";
import SignIn from "../../Components/SignIn/Signin"
import { useLocation } from "react-router-dom";

export default function General() {
  let location = useLocation();
  if (location.pathname === "/") {
    return <Normal />;
  } else if (location.pathname === "/add-buyer") {
    return (
      <>
        <Normal />
        <Buyer />
      </>
    );
  } else if (location.pathname === "/add-seller") {
    return (
      <>
        <Normal></Normal>
        <Seller></Seller>
      </>
    );
  }
   else if (location.pathname === "/signin") {
    return (
      <>
        <Normal></Normal>
        <SignIn></SignIn>
      </>
    );
  }
  // return (
  //   <>
  //       <Normal></Normal>
  //   </>
  // )
}
