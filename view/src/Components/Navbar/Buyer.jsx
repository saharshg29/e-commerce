import React from "react";
import { useNavigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Navbar() {
  let navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <span class="navbar-brand me-2" onClick={() => navigate("/")}>
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="16"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: " -1px;" }}
            />
          </span>

          <span
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </span>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <form className="d-flex">
              <input
                class="form-control mt-2 btn "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <span style={{ display: "inline" }} class="btn">
                <MDBIcon icon="search" />
              </span>
            </form>

            <div class="d-flex align-items-center">
              <span
                type="button"
                class="btn px-3 me-2"
                onClick={() => navigate("/shop")}
              >
                Shop
              </span>
              <span
                type="button"
                class="btn position-relative px-3 me-2"
                onClick={() => navigate("/cart")}
              >
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {0}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </span>
              <span
                type="button"
                class="btn  px-3 me-2"
                onClick={() => navigate("/profile/:id")}
              >
                Profile
              </span>
              <span
                class="btn btn-danger me-3"
                onClick={() => navigate("/signin")}
              >
                Log Out
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
