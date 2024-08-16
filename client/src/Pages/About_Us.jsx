import React from 'react'
import { Link } from 'react-router-dom'
import Footer2 from '../components/Footer2'

const About_Us = () => {
    return (
        <>
            <section className="page-title" style={{ backgroundImage: "url(bg2.jpg)" }}>
                <div className="container">
                    <div className="title-text clearfix">
                        <h1>About Us</h1>
                        <ul className="title-menu">
                            <li>
                                <Link to="/">home</Link>
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <div className="container">
                    <div className="sec-title text-center">
                        <h3>
                            About <span>Us</span>
                        </h3>
                        <br />
                    </div>
                    <div className="content-text text-center">
                        <p>
                            Anany Pahal is a social working group started on 31 july 2021 in
                            Mauranipur and Ranipur area of District Jhansi, Uttar Pradesh by
                            Govinda Bakna. He has done his schooling from Jawahar Navodaya
                            Vidyalaya Baruasagar Jhansi, undergraduate study from IIT Palakkad and
                            currently pursuing PhD from IIT Kanpur.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-7 col-sm-7 col-xs-12">
                            <div className="colmun-text">
                                <h5>Our Mission</h5>
                                <p>
                                    Mission of group is to provide basic need things like ration kit,
                                    to do as many plantation as possible, saving stray animals from
                                    road accident by putting reflective around neck, helping students
                                    during their education and to spread awareness about social issue.
                                </p>
                                <h5>Our Vision</h5>
                                <p>
                                    {" "}
                                    Anany Pahal strongly believes in helping needy person, making
                                    earth green, providing safety to animals, and helping students in
                                    need so that a healthy society can be formed where no one would be
                                    left behind in this modern age. Along with achieving these goals,
                                    Anany pahal wants a society of young helping hand by teaching new
                                    volunteer how to do social work and its importance to society.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-12">
                            <div className="image-box">
                                <figure>
                                    <img src="mission-vision-values.png" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="volunteers-section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="sec-title text-center">
                        <h3>
                            Who we <span>are</span>
                        </h3>
                        <p>Together we Do</p>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <div className="image-holder text-center">
                                <div className="image-box">
                                    <figure>
                                        <img src="Group Representative/Govinda Bakna.jpg" alt="" />
                                    </figure>
                                </div>
                                <h5>Govinda Bakna</h5>
                                <h2>The Founder</h2>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12">
                            <div>
                                <h2>Founder Messege</h2>
                                <br />
                                <p>
                                    Dear friends
                                    <br />
                                    Thanks for visiting Anany Pahal wesite
                                    <br />
                                    <br />
                                    Hope you have gone through our profile and its activities which
                                    gives an idea about how the group works in the area of helping
                                    needy people, animal safety,education, making earth green etc. I
                                    strongly believe that with small help to needy families we are
                                    indirectly supporting children who are the backbone of the nation.
                                    Once families have basic needs, families would be able to support
                                    education, children will not have to discontinue study due to
                                    financial factors. I want to build a society where youth will come
                                    out with a helping hand to serve society with their innovative
                                    ideas. I also believe in inspiring others and propagating among
                                    them the idea of Vishya Kutumb so that during help everyone will
                                    feel like helping their own family members.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div
                        className="fg-gallery ns fg-galleryrkd rkdd  "
                        style={{ margin: "-100px 0 100px 0" }}
                    >
                        <div className="row g-0 membersStyle">
                            <h2>
                                <strong>Volunteers</strong>
                            </h2>
                            <br />
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Deepak Arya.jpg"
                                />
                                <h3>Deepak Arya</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Devendra Arya.jpeg"
                                />
                                <h3>Devendra Arya</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Janmejay Tiwari.jpg"
                                />
                                <h3>Janmejay Tiwari</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Murli Manohar.jpg"
                                />
                                <h3>Murli Manohar</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Mayank Mohan Niranjan.jpg"
                                />
                                <h3>Mayank Mohan Niranjan</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Nayan Arya.jpg"
                                />
                                <h3>Nayan Arya</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Neeraj Arya.jpg"
                                />
                                <h3>Neeraj Arya</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Neetendra Arya.jpg"
                                />
                                <h3>Neetendra Arya</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Pramod Arya.jpg"
                                />
                                <h3>Pramod Arya</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Raj Arya.jpg"
                                />
                                <h3>Raj Arya</h3>
                            </div>
                            <div className="col-sm-4 col-md-4" style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Rameshwar Kushwaha.jpg"
                                />
                                <h3 style={{ fontSize: 22 }}>Rameshwar Kushwaha</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Rishabh Narvariya.jpg"
                                />
                                <h3>Rishabh Narvariya</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Sahil Rajput.jpeg"
                                />
                                <h3>Sahil Rajput</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Shahban Ansari.jpg"
                                />
                                <h3>Shahban Ansari</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Subhash Arya.jpg"
                                />
                                <h3>Subhash Arya</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Umesh Arya.jpg"
                                />
                                <h3>Umesh Arya</h3>
                            </div>
                            <div className="col-sm-4 col-md-4 " style={{ padding: 5 }}>
                                <img
                                    className="ration_img"
                                    src="Group Representative/Yash Pratap Singh.jpg"
                                />
                                <h3>Yash Pratap Singh</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer2 />
        </>
    )
}

export default About_Us