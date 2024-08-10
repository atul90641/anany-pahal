import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="container">
                    {/*Widgets Section*/}
                    <div className="widgets-section">
                        <div className="row">
                            {/*Footer Column*/}
                            <div className="footer-column col-md-4 col-sm-6 col-xs-12">
                                <div className="about-widget">
                                    <h4>Welcome</h4>
                                    <div className="widget-content">
                                        <p>
                                            Anany Pahal is a social working group started on 31 july 2021 in
                                            Mauranipur and Ranipur area of District Jhansi, Uttar Pradesh by
                                            Govinda Bakna. He has done his schooling from Jawahar Navodaya
                                            Vidyalaya Baruasagar Jhansi, undergraduate study from IIT
                                            Palakkad and currently pursuing PhD from IIT Kanpur.
                                            <br />
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-md-4 col-sm-6 col-xs-12">
                                <div className="links-widget">
                                    <h4>quick links</h4>
                                    <ul className="links-list">
                                        <li>
                                            <Link to="about">
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="gallary">
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                                Gallery
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="contact">
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="donate">
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                                Donate Now
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-md-4 col-sm-6 col-xs-12">
                                <div className="contact-links">
                                    <h4>contuct us</h4>
                                    <div className="widget-content">
                                        <div className="footer-info">
                                            <i className="fa fa-home" aria-hidden="true" />
                                            <h6>
                                                Teela Shiv Ganj Mauranipur Jhansi Uttar Pradesh, India
                                                (284204)
                                            </h6>
                                        </div>
                                        <div className="footer-info">
                                            <i className="fa fa-phone" aria-hidden="true" />
                                            <h6>+91 9129972009</h6>
                                        </div>
                                        <div className="footer-info">
                                            <i className="fa fa-envelope-o" aria-hidden="true" />
                                            <a href="#">
                                                <h6>ananypahal0806021@gmail.com</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Footer Column*/}
                        </div>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="copyright-text text-center">
                            Copyright © Anany Pahal 2021. All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer