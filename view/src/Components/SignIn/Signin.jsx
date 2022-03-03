import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [value, setValue] = useState("fruit");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const navigate = useNavigate();

  const postData = () => {
    if (!UserName || !Password) {
      navigate("/signin");
    }
    fetch("/buyer/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName,
        Password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          console.log("Seems like user could not found");
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      })
      .catch((err) => console.log("error while logging in"));
    console.log({ UserName, Password });
  };
  return (
    <>
      
    </>
  );
}
