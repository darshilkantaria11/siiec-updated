import React from 'react'
import Fablab from '../js/image/favicon.ico'

const Navbar = () => {
  return (
    <>
      <header id="header" className="header fixed-top" data-scrollto-offset="0">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="/"> <img src={Fablab} alt="fablab-logo" height={70} /></a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto" href="index.html#hero-animated" >Home</a></li>
              <li><a className="nav-link scrollto" href="index.html#about">About</a></li>
              <li><a className="nav-link scrollto" href="index.html#services">Services</a></li>
              <li><a className="nav-link scrollto" href="index.html#pricing">Pricing</a></li>
              <li><a className="nav-link scrollto" href="index.html#faq">FAQ</a></li>
              <li><a className="nav-link scrollto" href="index.html#team">Team</a></li>

              <li><a className="nav-link scrollto" href="index.html#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle d-none"></i>
          </nav>
          <a className="btn-getstarted scrollto" href="index.html#about">Get Started</a>
        </div>
      </header>    
    </>
  )
}

export default Navbar