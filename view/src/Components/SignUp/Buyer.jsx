import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Buyer() {
  let navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobilenumber, setMobilenumber] = useState("");
  const [UserName, setUserName] = useState("");

  const postData = () => {
    console.log({ Name, Password, Email, Mobilenumber, UserName });

    // fetch('/buyer/add', {
    //   method: "post",
    //   headers: {

    //   }

    // })


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
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4">
                        <label className="form-label" htmlFor="form3Example1c">
                          Your Name
                        </label>
                        <div className="d-flex btn flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>

                        <label className="form-label" htmlFor="form3Example3c">
                          Your Email
                        </label>
                        <div className="d-flex btn flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              onChange={(e) => setEmail(e.target.value)}
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
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <label className="form-label" htmlFor="form3Example6cd">
                          Repeat your password
                        </label>
                        <div className="d-flex btn flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example6cd"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <label className="form-label" htmlFor="form3Example5cd">
                          Username
                        </label>
                        <div className="d-flex btn flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example5cd"
                              className="form-control"
                              onChange={(e) => setUserName(e.target.value)}
                            />
                          </div>
                        </div>

                        <label className="form-label" htmlFor="form3Example7cd">
                          Mobile Number
                        </label>
                        <div className="d-flex btn flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="form3Example7cd"
                              className="form-control"
                              onChange={(e) => setMobilenumber(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <span
                            onClick={() => postData()}
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </span>
                        </div>

                        <span>
                          <h6 className="text-primary">
                            Want to sell with us?
                          </h6>
                          <h5
                            className="btn"
                            style={{ display: "inline" }}
                            onClick={() => navigate("/add-seller")}
                          >
                            Join
                          </h5>
                        </span>

                        <h5 className="text-primary">
                          Already have an account?
                        </h5>
                        <h4
                          className="btn"
                          style={{ display: "inline" }}
                          onClick={() => navigate("/signin")}
                        >
                          Log In
                        </h4>
                      </form>
                    </div>
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
