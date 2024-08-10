import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <section className="page-title" style={{ backgroundImage: "url(bg2.jpg)" }}>
                <div className="container">
                    <div className="title-text clearfix">
                        <h1>Contact Us</h1>
                        <ul className="title-menu">
                            <li>
                                <Link to="/">home</Link>
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="sec-title">
                                <h3>
                                    Contact <span>Info</span>
                                </h3>
                            </div>
                            <ul className="contact-list">
                                <li className="item">
                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                    <h5>Address</h5>
                                    <p>
                                        Teela Shiv Ganj Mauranipur Jhansi Uttar Pradesh, India (284204)
                                    </p>
                                </li>
                                <li className="item">
                                    <i className="fa fa-phone" aria-hidden="true" />
                                    <h5>Phone</h5>
                                    <p>+919129972009</p>
                                </li>
                                <li className="item">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <h5>Email</h5>
                                    <p>ananypahal0806021@gmail.com </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="sec-title">
                                <h3>
                                    Send <span>Message</span>
                                </h3>
                            </div>
                            <div className="default-form-area">
                                <form name="myForm" method="post" className="default-form">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="Name *" name="name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" placeholder="Email *" name="email" />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Phone Number"
                                                    name="phone"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <textarea
                                                    placeholder="Message *"
                                                    name="message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        type="submit"
                                        defaultValue="Submit"
                                        className="btn-style-two"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="google-map-area">
                <div className="container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642494.3478184016!2d76.1250086380096!3d26.931302600820576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a11992684006fef!2zQW5hbnkgUGFoYWwgLSAi4KSF4KSo4KSo4KWN4KSvIOCkquCkueCksiI!5e0!3m2!1sen!2sin!4v1641296089478!5m2!1sen!2sin"
                        width="100%"
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    />
                </div>
            </section>
            <section className="sponsors-subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12 right-side">
                            <div className="section-text">
                                <h5>Connect With Us:</h5>
                            </div>
                            <div className="icon-links">
                                <a href="https://www.facebook.com/AnanyPahal/" target="_blank">
                                    <img src="facebook.png" title="Facebook" />
                                </a>
                                <a href="https://www.instagram.com/anany_pahal/" target="_blank">
                                    <img src="Instagram.png" title="Instagram" />
                                </a>
                                <a
                                    href="https://twitter.com/AnanyPahal?t=2rDqHZWM3av-Bg0b1l3qzw&s=08"
                                    target="_blank"
                                    title="Twitter"
                                >
                                    <sub>
                                        <i className="fa fa-twitter" style={{ fontSize: 20 }} />
                                    </sub>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/anany-pahal-b39a4a219"
                                    target="_blank"
                                    title="Linked In"
                                >
                                    <img src="linkedin.png" title="Linked In" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <form name="myFormnews" method="post" className="subscribe-form">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email Address"
                                    />
                                    <button type="submit">Newsletter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Contact