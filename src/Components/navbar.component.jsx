import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top p-3" style={{backgroundColor:'white'}}>
            <div className="container-fluid">
                <a className="navbar-brand nav-heading" href="!">Rebeans</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Rebeans</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#landingSection">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#products">OUR PRODUCTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contactUsSection">CONTACT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link cart" href="!" >
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <span>  </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar