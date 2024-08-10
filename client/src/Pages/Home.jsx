import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={0}
                        className="active"
                    />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="d-block w-100"
                            src="SliderRK2.jpg"
                            alt="First slide"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="Slider1.jpg"
                            alt="Second slide"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="SliderRK1.jpg"
                            alt="Third slide"
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <section className="couses-section">
                <div className="container">
                    <div className="sec-title text-center">
                        <h3>
                            <span>Anany-Pahal</span>
                        </h3>
                        <p>
                            Anany Pahal is a social working group started on 31 july 2021 in
                            Mauranipur and Ranipur area of District Jhansi, Uttar Pradesh by
                            Govinda Bakna. He has done his schooling from Jawahar Navodaya
                            Vidyalaya Baruasagar Jhansi, undergraduate study from IIT Palakkad and
                            currently pursuing PhD from IIT Kanpur.
                        </p>
                    </div>
                    <div className="row">
                        <div className="image-column col-md-4 col-sm-6 col-xs-12">
                            <div className="image-holder">
                                <div className="image-box">
                                    <figure>
                                        <a href="cause-details.html">
                                            <img
                                                className="ration_img"
                                                src="Anany_Pahal/Plantation/Plant_4.jpg"
                                            />
                                        </a>
                                    </figure>
                                </div>
                                <div className="image-content">
                                    <a href="Donate.html">
                                        <h5>Plantation</h5>
                                    </a>
                                    <p>
                                        This activity is completely a time dependent activity. Early you
                                        start more plants you will get in future as plants can not be
                                        grown in one day with money. So Anany Pahal started a plantation
                                        where we provide proper protection to plants with iron net or
                                        brick circle depending on surroundings.
                                    </p>
                                    <div className="link-btn">
                                        {/* <a href="Donate.html" className="btn-style-three">donate now</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-md-4 col-sm-6 col-xs-12">
                            <div className="image-holder">
                                <div className="image-box">
                                    <figure>
                                        <a href="cause-details.html">
                                            <img
                                                className="ration_img"
                                                src="Anany_Pahal/Ration_kit/Ration_6.jpg"
                                            />
                                        </a>
                                    </figure>
                                </div>
                                <div className="image-content">
                                    <a href="Donate.html">
                                        <h5>Ration Kit Distribution</h5>
                                    </a>
                                    <p>
                                        Started distribution of ration kit during the corona pandemic
                                        time. There were many people who were unable to arrange for food
                                        due to loss of work during the lockdown, especially old age
                                        people and widows. After that it was realised that there are
                                        many families who can not arrange food due to many reasons.
                                        Anany pahal also supported a family where three small kids were
                                        hungry with their mother for two days.
                                    </p>
                                    <div className="link-btn">
                                        {/* <a href="Donate.html" className="btn-style-three">donate now</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-md-4 col-sm-6 col-xs-12">
                            <div className="image-holder">
                                <div className="image-box">
                                    <figure>
                                        <a href="cause-details.html">
                                            <img
                                                className="ration_img"
                                                src="Anany_Pahal/Education/Notebook gift for partication in group activity.jpg"
                                            />
                                        </a>
                                    </figure>
                                </div>
                                <div className="image-content">
                                    <Link to="donate">
                                        <h5>Education</h5>
                                    </Link>
                                    <p>
                                        There are no words for explaining the importance of education.
                                        Anany Pahal supports poor students in getting admission and
                                        providing them with resources needed for education. We also tell
                                        the importance of education to the family we are helping and
                                        discuss the difficulty they are facing so that we can help them
                                        accordingly. We are going to focus more on this activity in the
                                        future.
                                    </p>
                                    <div className="link-btn">
                                        {/* <a href="Donate.html" className="btn-style-three">donate now</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gellary-subscribe">
                <div className="container">
                    <div className="content-text clearfix">
                        <h3>
                            Lets make the <br />
                            <span>world better</span> together
                        </h3>
                        <div className="link-btn">
                            {/* <a href="Donate.html">donate now</a> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="news-section">
                <div className="container">
                    <div className="sec-title text-center">
                        <h3>
                            Recent <span>ACTIVITES</span>
                        </h3>
                        <p>Giving back through life-changing experiences.</p>
                    </div>
                    <div className="row">
                        <div className="image-column col-md-6 col-sm-6 col-xs-12">
                            <div className="image-holder">
                                <div className="image-box">
                                    <figure>
                                        <img
                                            className="ration_img"
                                            src="Anany_Pahal/Animal_reflective_belt/Ref_Be_3.jpg"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                                <div className="image-content">
                                    <h5>Animal Reflective Belt</h5>
                                    <p>
                                        Animal safety and human safety are interrelated.If a vehicle
                                        collides with animals, both animals and humans get injured. So
                                        keeping this factor in mind Anany Pahal started putting
                                        reflected belts around animals' necks so that animals can be
                                        spotted easily during dark nights. Apart from that we are also
                                        working on a temporary shelter for dogs and feeding them and
                                        telling people to treat them with respect.
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-md-6 col-sm-6 col-xs-12">
                            <div className="image-holder">
                                <div className="image-box">
                                    <figure>
                                        <img
                                            className="ration_img"
                                            src="Anany_Pahal/Rajai_Distribution/Rajai_6.jpg"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                                <div className="image-content">
                                    <h5>Cloth Distribution</h5>
                                    <p>
                                        It is utmost important to provide clothing based on season There
                                        are many people, especially old age people living alone who can
                                        not arrange new clothes for themselve. So we started
                                        distribution of rajai to save needy people from the cold. We
                                        also provide other types of clothing to needy people.
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sponsors">
                        <h1 style={{ color: "black" }}>
                            <strong> Our Sponsors:</strong>
                        </h1>
                        <div className="mathslog">
                            <a target="newopen" href="http://www.mathsarc.com/">
                                <img src="./sponsers/logo.png" alt="not " />
                            </a>
                            <div style={{ paddingLeft: 50, color: "black" }}>
                                <strong>Sponsor For Anany Pathshala-3</strong>
                            </div>
                        </div>
                    </div>
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
            <br />
            <br />
            <div className="container">
                <div className="sec-title text-center">
                    <h3>
                        <span>Testimonials</span>
                    </h3>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="carousel slide"
                            data-ride="carousel"
                            id="quote-carousel"
                        >
                            {/* Carousel Slides / Quotes */}
                            <div className="carousel-inner text-center">
                                {/* Quote 1 */}
                                <div className="item active">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-8 col-sm-offset-2">
                                                <p>
                                                    {" "}
                                                    <a href="https://www.facebook.com/govinda.bakna.1?__cft__[0]=AZUDxfWx08ppMvJuox0fxSetyyfrKn4OZ58QATbrCJFcCVLYcnrxdbvuFEMcPEds6ekboq7nzvwbNV8akZZYCSwzZgcDYf1M5qJXxl3qAc85XB-kfty5Ukv_tM-YS7QwrI4&__tn__=-]K-R">
                                                        Govinda Bakna
                                                    </a>{" "}
                                                    के मार्गदर्शन में संचालित 'अनन्य पहल' झांसी के दूरदराज
                                                    क्षेत्रों में अत्यंत ही सराहनीय कार्य कर रही है: पूरी टीम
                                                    जो इनके साथ जुड़ी है प्रशंसा की पात्र है|
                                                </p>
                                                <small>
                                                    Anil Mishra (Sub Registrar Shamli Uttar Pradesh )
                                                </small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                {/* Quote 2 */}
                                <div className="item">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-8 col-sm-offset-2">
                                                <p>
                                                    We are so thankful for your help. You have provided 30
                                                    days of dry ration kit. We never forget the help of
                                                    Neralu-Shadow Charitable Trust!
                                                </p>
                                                <small>Algammal</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                {/* Quote 3 */}
                                <div className="item">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-8 col-sm-offset-2">
                                                <p>
                                                    I don't know how to respond to the help done by the
                                                    Neralu-Shadow Charitable Trust. During the pandemic, our
                                                    lives were miserable, we were desperately looking for
                                                    support for our livelihood. we are very much happy when we
                                                    got the support from your trust. The help will always
                                                    remain in our life.
                                                </p>
                                                <small>Selvi</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                {/*Quote 4*/}
                                <div className="item">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-8 col-sm-offset-2">
                                                <p>
                                                    {" "}
                                                    Thank you so much for aiding my dream which wouldn't have
                                                    been fulfilled without your contribution. <br />
                                                    You have inspired me in more than one way and one of them
                                                    is giving back to society.
                                                    <br />
                                                    Thank you Neralu-Shadow Charitable Trust for the guidance
                                                    and support.
                                                </p>
                                                <small>Maria Elizebeth Dsouza</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>

                            <a
                                data-slide="prev"
                                href="#quote-carousel"
                                className="left carousel-control"
                            >
                                <i className="fa fa-chevron-left" />
                            </a>
                            <a
                                data-slide="next"
                                href="#quote-carousel"
                                className="right carousel-control"
                            >
                                <i className="fa fa-chevron-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home