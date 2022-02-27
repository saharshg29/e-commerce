import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand" href="#">Navbar</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <span className="nav-link active" aria-current="page" href="#">Home</span>
        <span className="nav-link" href="#">Features</span>
        <span className="nav-link" href="#">Pricing</span>
        <span className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</span>
      </div>
    </div>
  </div>
</nav>
  )
}
