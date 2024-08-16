import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, onSignOut }) => {

    return (
        <header className="main-header">
            <div className="header-top">
                <div className="containers">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="main-logo">
                            <figure>
                                <Link to="/"><img src="Anany_Pahal_Logo - Copy.jpg" alt="Logo" className="roundImg img-responsive" /></Link>
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="main-header-info clearfix">
                            <div className="header-info">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <h6>Contact :</h6>
                                <a href="mailto:ananypahal0806021@gmail.com">
                                    <span>ananypahal0806021@gmail.com / +91 9129972009</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        {isAuthenticated ? (
                            <button className="sign-in-button" onClick={onSignOut}>
                                Sign Out
                            </button>
                        ) : (
                            <Link to="/signin">
                                <button className="sign-in-button">Sign In</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <div className="header-lower">
                <div className="container">
                    <div className="header-area">
                        <nav className="main-menu">
                            <div className="navbar-header clearfix">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="navbar-collapse collapse clearfix">
                                <ul className="navigation clearfix">
                                    <li className="current"><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/donate">Donate</Link></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="link-btn"></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
