import React from "react";

export default function Footer() {
    return (
        <div>
            <>
                <div>
                    {/* Footer Start */}
                    <div
                        className="container-fluid bg-dark footer py-5 wow fadeIn"
                        data-wow-delay="0.1s"
                    >
                        <div className="container py-5">
                            <div className="row g-5">
                                <div className="col-lg-3 col-md-6">
                                    <h4 className="text-primary mb-4">
                                        Astrologer Arjun Sharma{" "}
                                    </h4>
                                    {/* <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3" />123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3" />+012 345 67890</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary me-3" />info@example.com</p> */}
                                    <p>
                                        M.D Sharma Ji is a well-known name in Vedic and Tantric
                                        Astrology throughout the world. For the past many years, he
                                        has not only served people with his knowledge, but he has
                                        also served people in need around the world.{" "}
                                    </p>
                                    <div className="d-flex pt-3">
                                        <a
                                            className="btn btn-square btn-primary rounded-circle me-2"
                                            href="/"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-primary rounded-circle me-2"
                                            href="/"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-primary rounded-circle me-2"
                                            href="/"
                                        >
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-primary rounded-circle me-2"
                                            href="/"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <h4 className="text-primary mb-4">Quick Services</h4>
                                    <a className="btn btn-link" href="/">
                                        Love Spell
                                    </a>
                                    <a className="btn btn-link" href="/">
                                        Business Problems
                                    </a>
                                    <a className="btn btn-link" href="/">
                                        Love Problem Solution
                                    </a>
                                    <a className="btn btn-link" href="/">
                                        Ex Love Back
                                    </a>
                                    <a className="btn btn-link" href="/" >
                                        Marriage Problem
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <h4 className="text-primary mb-4">Business Hours</h4>
                                    <p className="mb-1">Monday - Friday</p>
                                    <h6 className="text-light">09:00 am - 07:00 pm</h6>
                                    <p className="mb-1">Saturday</p>
                                    <h6 className="text-light">09:00 am - 12:00 pm</h6>
                                    <p className="mb-1">Sunday</p>
                                    <h6 className="text-light">Closed</h6>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <h4 className="text-primary mb-4">Contact Us</h4>
                                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                    <a className="btn btn-link" href="/">
                                        0987654321
                                    </a>
                                    <a className="btn btn-link" href="/">
                                        sample@sample.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer End */}
                    {/* Copyright Start */}
                    <div className="container-fluid copyright py-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    ©{" "}
                                    <a className="fw-medium" href="/">
                                        Your Site Name
                                    </a>
                                    , All Right Reserved.
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                    Designed By{" "}
                                    <a className="fw-medium" href="https://htmlcodex.com">
                                        HTML Codex
                                    </a>{" "}
                                    Distributed By{" "}
                                    <a className="fw-medium" href="https://themewagon.com">
                                        ThemeWagon
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Copyright End */}
                    {/* Back to Top */}
                    <a
                        href="/"
                        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
                    >
                        <i className="bi bi-arrow-up" />
                    </a>
                </div>
            </>
        </div>
    );
}
