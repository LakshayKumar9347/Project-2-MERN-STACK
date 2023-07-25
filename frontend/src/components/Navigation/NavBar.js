import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <>

        {/* Navbar Start */}
        <div className="container-fluid bg-white sticky-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
              {/* <a href="/" class="navbar-brand">
<img class="img-fluid" src="img/logo.png" alt="Logo"> */}
              <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <img src="https://img.freepik.com/premium-vector/astrology-logo_10250-3906.jpg" alt="" style={{ width: '100px', height: '50%' }} />
                <div className="navbar-nav ms-auto">
                  <Link to="/" className="nav-item nav-link active">Home</Link>
                  <Link to="/about" className="nav-item nav-link">About Us</Link>
                  {/* <Link to="/awards" className="nav-item nav-link">Achievement & Awards</Link>
                  <Link to="/testimonials" className="nav-item nav-link">Testimonials</Link> */}
                  <div className="nav-item dropdown">
                    <a href='/' className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Our Services</a>
                    <div className="dropdown-menu rounded-0 m-0" style={{backgroundColor:"#fff"}}>  
                      <a href="/" className="dropdown-item">Relationship Problems</a>
                      <a href="/" className="dropdown-item">Business Problems</a>
                      <a href="/" className="dropdown-item">Career Problems</a>
                      <a href="/" className="dropdown-item">Health Problems</a>
                      <a href="/" className="dropdown-item">Family Problems</a>
                    </div>
                  </div>
                  <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                </div>
                <div className="border-start ps-4 d-none d-lg-block">
                  <button type="button" className="btn btn-sm p-0"><i className="fa fa-search" /></button>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
      </>
    </div>
  )
}
