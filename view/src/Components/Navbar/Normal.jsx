import React from "react";
import { useNavigate } from "react-router-dom";

export default function Normal() {
  let navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand me-2" onClick={() => navigate("/")}>
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="16"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: " -1px" }}
            />
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-link px-3 me-2"
                onClick={() => navigate("/signin")}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-primary me-3"
                onClick={() => navigate("/add-buyer")}
              >
                Sign Up
              </button>
              <a
                className="btn btn-dark px-3"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
