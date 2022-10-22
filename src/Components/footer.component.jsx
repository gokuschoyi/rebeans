import React from 'react'

const Footer = () => {
    return (
        <footer className="py-4 flex-shrink-0" style={{backgroundColor:'black'}}>
            <div className="container mt-3 mb-3" >
                <div className="row p-3  ">
                    <div className="col-lg-6 col-md-6" style={{textAlign:'justify'}}>
                        <h5 className="h1 text-white">REBEANS.</h5>
                        <p className="small text-muted">Best coffee from the high hills of Wayanad</p>
                        <p className="small text-muted mb-0">© Copyrights. All rights reserved. <a className="footerLink" href="!">Rebeans.com</a></p>
                    </div>
                    <div className="col-lg-6 col-md-6" style={{textAlign:'justify'}}>
                        <h5 className="h1 text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><a className='footerLink' href="#landingSection">Home</a></li>
                            <li><a className='footerLink' href="#products">Our Products</a></li>
                            <li><a className='footerLink' href="!#">About</a></li>
                            <li><a className='footerLink' href="#contactUsSection">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer