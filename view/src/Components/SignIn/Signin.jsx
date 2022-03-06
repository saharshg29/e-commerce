import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [accounttype, setAccounttype] = useState("");

  const navigate = useNavigate();

  const postData = () => {
    if (!UserName || !Password) {
      navigate("/signin");
    }
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName,
        Password,
        accounttype,
      }),
    })
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((data) => {
        console.log(data);
        if (!data) {
          console.log("Seems like user could not found");
          navigate("/signin");
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate(`/${accounttype}/signup`);
        }
      })
      .catch((err) => console.log("error while logging in"));
    console.log({ UserName, Password });
  };

  return (
    <>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 pt-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign In
                      </p>

                      <form className="mx-1 mx-md-4">
                        <label className="form-label" htmlFor="form3Example3c">
                          Username
                        </label>
                        <div className="d-flex btn flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              placeholder="Username"
                              className="form-control"
                              onClick={(e) => setUserName(e.target.value)}
                            />
                          </div>
                        </div>

                        <label className="form-label" htmlFor="form3Example4c">
                          Password
                        </label>
                        <div className="d-flex btn flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="password"
                              onClick={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <span
                            onClick={() => setAccounttype("Seller")}
                            className=" btn"
                          >
                            Seller
                            <input type="radio" name="acc" />
                            <br />
                          </span>

                          <br />
                          <span
                            onClick={() => setAccounttype("Buyer")}
                            className=" btn "
                          >
                            Buyer
                            <input type="radio" name="acc" />
                            <br />
                          </span>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <span
                            type="button"
                            onClick={() => postData()}
                            className="btn btn-primary btn-lg"
                          >
                            Sign In
                          </span>
                        </div>
                      </form>
                    </div>
                    {/* This is For Image */}
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="design"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
