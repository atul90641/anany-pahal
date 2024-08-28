import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer2 from '../components/Footer2';
const Contact = () => {
    // State to hold form values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // State to handle form submission status
    const [status, setStatus] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('https://anany-pahal-server.vercel.app/api/create-query', {
                name: formData.name,
                email: formData.email,
                mobile: formData.phone,
                message: formData.message
            });

            if (response.status === 200) {
                console.log('Query created successfully:', response.data);
                // Clear form data after successful submission
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                setStatus('Success! Your message has been sent.');
            } else {
                throw new Error(response.data.error || 'Failed to create query');
            }


        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('Failed to send message. Please try again.');
        }
    };

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
                                <form name="myForm" method="post" className="default-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Name *"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    placeholder="Email *"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Phone Number"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <textarea
                                                    placeholder="Message *"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        type="submit"
                                        value="Submit"
                                        className="btn-style-two"
                                    />
                                </form>
                                {status && <p className="form-status">{status}</p>}
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
            <Footer2 />
        </>
    );
};

export default Contact;
