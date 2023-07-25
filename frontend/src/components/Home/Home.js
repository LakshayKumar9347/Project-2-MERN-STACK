import React from "react";
import "./carousel-style.css";

export default function Home() {
  return (
    <div>
      <>
        {/* Carousel Start */}
        <div className="container-fluid px-0 mb-5 wow fadeIn">
          <div className="container-fluid video">
            <div className="container">
              <div className="row g-0">
                <div className="col-lg-6 py-5 wow fadeIn" data-wow-delay="0.1s">
                  <div className="py-5">
                    <h1 className="display-6 mb-4" style={{ color: "#e9d4c3" }}>
                      Verified <span className="text-white">Astrologer </span>
                      Arjun <span className="text-white">Sharma</span>
                    </h1>
                    <h5 className="fw-normal lh-base fst-italic text-white mb-5">
                      Universe has promised to heal you from within and give you
                      everything you desire .
                    </h5>
                    <div className="row g-4 mb-5">
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                            <i className="fa fa-check" />
                          </div>
                          <span className="text-light">
                            Relationship Problems
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                            <i className="fa fa-check" />
                          </div>
                          <span className="text-light">Marriage Problems</span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                            <i className="fa fa-check" />
                          </div>
                          <span className="text-light"> Career Problems</span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                            <i className="fa fa-check" />
                          </div>
                          <span className="text-light">Financial Problems</span>
                        </div>
                      </div>
                    </div>
                    <a className="btn btn-light rounded-pill py-3 px-5" href>
                      Explore More
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <div
                    className="h-100 d-flex align-items-center justify-content-center"
                    style={{ minHeight: "300px" }}
                  >
                    <button
                      type="button"
                      className="btn-play"
                      data-bs-toggle="modal"
                      data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                      data-bs-target="#videoModal"
                    >
                      <span />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video Modal Start */}
        <div
          className="modal modal-video fade"
          id="videoModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/* 16:9 aspect ratio */}
                <div className="ratio ratio-16x9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://player.vimeo.com/external/472100769.sd.mp4?s=d427709baf815ca93c720ea5e6f6f3f9246c78bd&profile_id=164&oauth2_token_id=57447761"
                    id="video"
                    allowFullScreen
                    allowscriptaccess="always"
                    allow="autoplay"
                    title="Example Website"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video Modal End */}
        {/* Carousel End */}

        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <img
                  className="img-fluid bg-white w-100 wow fadeIn about-image"
                  data-wow-delay="0.4s"
                  src="https://m.media-amazon.com/images/I/71QNHK-iJdL._AC_UF1000,1000_QL80_.jpg"
                  alt=""
                  style={{ marginTop: "55px" }}
                />
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="section-title">
                  <p className="fs-5 fw-medium fst-italic text-primary">
                    About Us
                  </p>
                  <h1 className="display-6">Astrologer Arjun sharma </h1>
                </div>
                <div className="row g-3 mb-4">
                  <div className="col">
                    <h5>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </h5>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime distinctio molestias quidem natus placeat delectus!
                      Commodi debitis consectetur non sapiente esse porro
                      architecto aut voluptates.
                    </p>
                  </div>
                </div>
                <div className="border-top mb-4">
                  <div className="row g-3 mt-2">
                    <div className="col">
                      <h5>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                      </h5>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime distinctio molestias quidem natus placeat
                        delectus! Commodi debitis consectetur non sapiente esse
                        porro architecto aut voluptates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-top mb-4">
                  <div className="row g-3 mt-2">
                    <div className="col">
                      <h5>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                      </h5>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime distinctio molestias quidem natus placeat
                        delectus! Commodi debitis consectetur non sapiente esse
                        porro architecto aut voluptates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        {/* <!-- Services Start --> */}
        <div className="container-fluid product py-5 my-5">
          <div className="container">
            <div
              className="section-title text-center mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                maxWidth: "500px",
              }}
            >
              <p className="fs-5 fw-medium fst-italic text-primary">
                EXPLORE OUR SERVICES
              </p>
              <h3 className="display-6">ASTROLOGY SERVICE.</h3>
            </div>
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-lg-4">
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      borderRadius: "11px",
                      margin: "17px auto 17px auto",
                    }}
                  >
                    <img
                      src="https://www.rgstartup.com/demo9/images/services-1.jpg"
                      className="card-img-top"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Love Marriage</h5>
                      <p className="card-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an
                      </p>
                      <a href="/" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      borderRadius: "11px",
                      margin: "17px auto 17px auto",
                    }}
                  >
                    <img
                      src="https://www.rgstartup.com/demo9/images/services-2.jpg"
                      className="card-img-top"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Love Problem Solutions</h5>
                      <p className="card-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an
                      </p>
                      <a href="/" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      borderRadius: "11px",
                      margin: "17px auto 17px auto",
                    }}
                  >
                    <img
                      src="https://www.rgstartup.com/demo9/images/services-3.jpg"
                      className="card-img-top"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Inter-Caste Marriage</h5>
                      <p className="card-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an
                      </p>
                      <a href="/" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      borderRadius: "11px",
                      margin: "17px auto 17px auto",
                    }}
                  >
                    <img
                      src="https://www.rgstartup.com/demo9/images/services-4.jpg"
                      className="card-img-top"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Love BreakUp Problem</h5>
                      <p className="card-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an
                      </p>
                      <a href="/" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      borderRadius: "11px",
                      margin: "17px auto 17px auto",
                    }}
                  >
                    <img
                      src="https://www.rgstartup.com/demo9/images/services-5.jpg"
                      className="card-img-top"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Get Your Ex Love Back</h5>
                      <p className="card-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an
                      </p>
                      <a href="/" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      borderRadius: "11px",
                      margin: "17px auto 17px auto",
                    }}
                  >
                    <img
                      src="https://www.rgstartup.com/demo9/images/services-6.jpg"
                      className="card-img-top"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Relationship Problem</h5>
                      <p className="card-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an
                      </p>
                      <a href="/" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Services End --> */}

        {/* Zodiac signs Predictions */}
        <section>
          <center>
            <h1>Zodiac Sign</h1>
            <h4>Predictions</h4>
          </center>
          <div className="zodiac container">
            <div className="row wow  fadeIn">
              <div className="col-lg-3">
                <div
                  className="z-card text-center"
                  style={{
                    backgroundColor: " rgb(139, 49, 115)",
                    width: "100%",
                    borderRadius: "11px",
                    margin: "17px auto 17px auto",
                    padding: "25px",
                  }}
                >
                  <img
                    className="img-fluid w-50 m-2"
                    src="https://rgstartup.com/demo14/images/zodiac/z-1.png"
                    alt=""
                  />
                  <h5 className="text-light" style={{ fontSize: "x-large" }}>
                    Aries
                  </h5>
                  <span className="text-light" style={{ fontSize: "large" }}>
                    aries
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="z-card text-center"
                  style={{
                    backgroundColor: " rgb(139, 49, 115)",
                    width: "100%",
                    borderRadius: "11px",
                    margin: "17px auto 17px auto",
                    padding: "25px",
                  }}
                >
                  <img
                    className="img-fluid w-50 m-2"
                    src="https://rgstartup.com/demo14/images/zodiac/z-2.png"
                    alt=""
                  />
                  <h5 className="text-light" style={{ fontSize: "x-large" }}>
                    Taurus
                  </h5>
                  <span className="text-light" style={{ fontSize: "large" }}>
                    Taurus
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="z-card text-center"
                  style={{
                    backgroundColor: " rgb(139, 49, 115)",
                    width: "100%",
                    borderRadius: "11px",
                    margin: "17px auto 17px auto",
                    padding: "25px",
                  }}
                >
                  <img
                    className="img-fluid w-50 m-2"
                    src="https://rgstartup.com/demo14/images/zodiac/z-3.png"
                    alt=""
                  />
                  <h5 className="text-light" style={{ fontSize: "x-large" }}>
                    Gemini
                  </h5>
                  <span className="text-light" style={{ fontSize: "large" }}>
                    Gemini
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="z-card text-center"
                  style={{
                    backgroundColor: " rgb(139, 49, 115)",
                    width: "100%",
                    borderRadius: "11px",
                    margin: "17px auto 17px auto",
                    padding: "25px",
                  }}
                >
                  <img
                    className="img-fluid w-50 m-2"
                    src="https://rgstartup.com/demo14/images/zodiac/z-4.png"
                    alt=""
                  />
                  <h5 className="text-light" style={{ fontSize: "x-large" }}>
                    CANCER{" "}
                  </h5>
                  <span className="text-light" style={{ fontSize: "large" }}>
                    CANCER{" "}
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="z-card text-center"
                  style={{
                    backgroundColor: " rgb(139, 49, 115)",
                    width: "100%",
                    borderRadius: "11px",
                    margin: "17px auto 17px auto",
                    padding: "25px",
                  }}
                >
                  <img
                    className="img-fluid w-50 m-2"
                    src="https://rgstartup.com/demo14/images/zodiac/z-5.png"
                    alt=""
                  />
                  <h5 className="text-light" style={{ fontSize: "x-large" }}>
                    Leo{" "}
                  </h5>
                  <span className="text-light" style={{ fontSize: "large" }}>
                    Leo{" "}
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="z-card text-center"
                  style={{
                    backgroundColor: " rgb(139, 49, 115)",
                    width: "100%",
                    borderRadius: "11px",
                    margin: "17px auto 17px auto",
                    padding: "25px",
                  }}
                >
                  <img
                    className="img-fluid w-50 m-2"
                    src="https://rgstartup.com/demo14/images/zodiac/z-6.png"
                    alt=""
                  />
                  <h5 className="text-light" style={{ fontSize: "x-large" }}>
                    Virgo{" "}
                  </h5>
                  <span className="text-light" style={{ fontSize: "large" }}>
                    Virgo{" "}
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="z-card text-center"
                  style={{
                    backgroundColor: " rgb(139, 49, 115)",
                    width: "100%",
                    borderRadius: "11px",
                    margin: "17px auto 17px auto",
                    padding: "25px",
                  }}
                >
                  <img
                    className="img-fluid w-50 m-2"
                    src="https://rgstartup.com/demo14/images/zodiac/z-7.png"
                    alt=""
                  />
                  <h5 className="text-light" style={{ fontSize: "x-large" }}>
                    Libra{" "}
                  </h5>
                  <span className="text-light" style={{ fontSize: "large" }}>
                    Libra{" "}
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="z-card text-center"
                  style={{
                    backgroundColor: " rgb(139, 49, 115)",
                    width: "100%",
                    borderRadius: "11px",
                    margin: "17px auto 17px auto",
                    padding: "25px",
                  }}
                >
                  <img
                    className="img-fluid w-50 m-2"
                    src="https://rgstartup.com/demo14/images/zodiac/z-8.png"
                    alt=""
                  />
                  <h5 className="text-light" style={{ fontSize: "x-large" }}>
                    Scorpius
                  </h5>
                  <span className="text-light" style={{ fontSize: "large" }}>
                    Sorpius
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="z-card text-center"
                  style={{
                    backgroundColor: " rgb(139, 49, 115)",
                    width: "100%",
                    borderRadius: "11px",
                    margin: "17px auto 17px auto",
                    padding: "25px",
                  }}
                >
                  <img
                    className="img-fluid w-50 m-2"
                    src="https://rgstartup.com/demo14/images/zodiac/z-9.png"
                    alt=""
                  />
                  <h5 className="text-light" style={{ fontSize: "x-large" }}>
                    Sagittarius{" "}
                  </h5>
                  <span className="text-light" style={{ fontSize: "large" }}>
                    Sagittarius{" "}
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="z-card text-center"
                  style={{
                    backgroundColor: " rgb(139, 49, 115)",
                    width: "100%",
                    borderRadius: "11px",
                    margin: "17px auto 17px auto",
                    padding: "25px",
                  }}
                >
                  <img
                    className="img-fluid w-50 m-2"
                    src="https://rgstartup.com/demo14/images/zodiac/z-10.png"
                    alt=""
                  />
                  <h5 className="text-light" style={{ fontSize: "x-large" }}>
                    Capricornus{" "}
                  </h5>
                  <span className="text-light" style={{ fontSize: "large" }}>
                    Capricornus{" "}
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="z-card text-center"
                  style={{
                    backgroundColor: " rgb(139, 49, 115)",
                    width: "100%",
                    borderRadius: "11px",
                    margin: "17px auto 17px auto",
                    padding: "25px",
                  }}
                >
                  <img
                    className="img-fluid w-50 m-2"
                    src="https://rgstartup.com/demo14/images/zodiac/z-11.png"
                    alt=""
                  />
                  <h5 className="text-light" style={{ fontSize: "x-large" }}>
                    Aquarius
                  </h5>
                  <span className="text-light" style={{ fontSize: "large" }}>
                    Aquarius
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="z-card text-center"
                  style={{
                    backgroundColor: " rgb(139, 49, 115)",
                    width: "100%",
                    borderRadius: "11px",
                    margin: "17px auto 17px auto",
                    padding: "25px",
                  }}
                >
                  <img
                    className="img-fluid w-50 m-2"
                    src="https://rgstartup.com/demo14/images/zodiac/z-12.png"
                    alt=""
                  />
                  <h5 className="text-light" style={{ fontSize: "x-large" }}>
                    Pisces{" "}
                  </h5>
                  <span className="text-light" style={{ fontSize: "large" }}>
                    Pisces{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact us and Goodbye */}
        <div className="container-fluid product py-5 mt-5">
          <div className="container">
            <div
              className="section-title text-center mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                maxWidth: "500px",
              }}
            >
              <p className="fs-5 fw-medium fst-italic text-primary">
                Contact Us And Say Goodbye To
              </p>
              <h3 className="display-6">
                Your All Problems With Pure Remedies
              </h3>
            </div>
            <div className="row wow fadeIn">
              {/* tjs */}
              <div
                className="content-column wow fadeIn container col-lg-4"
                style={{ margin: "2rem auto 2rem auto" }}
              >
                <div class="elementor-widget-wrap elementor-element-populated two_elementor_element wow fadeIn">
                  <div
                    class="elementor-element elementor-element-fa39f3b elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list two_elementor_element wow fadeIn"
                    data-id="fa39f3b"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div class="elementor-widget-container two_elementor_element wow fadeIn">
                      <ul class="elementor-icon-list-items two_elementor_element wow fadeIn">
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/how-to-break-your-ex-boyfriend-girlfriend-marriage/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              How To Break Your ex-boyfriend Girlfriend Marriage
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/how-to-bring-my-husband-back-from-another-woman/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              How To Bring My Husband Back From Another Woman
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/how-to-convince-my-ex-for-love-marriage-with-me/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              How To Convince My Ex For Love Marriage With Me
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/how-to-get-just-my-first-true-love-back/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              How To Get Just My First True Love Back
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/get-lost-love-back-in-usa/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Get Lost Love Back In Usa
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/get-lost-love-back-in-new-york/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Get Lost Love Back In New York
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/get-lost-love-back-in-california/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Get Lost Love Back In California
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/get-lost-love-back-in-illinois/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Get Lost Love Back In Illinois
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/get-lost-love-back-in-london/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Get Lost Love Back In London
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/get-lost-love-back-in-uk/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Get Lost Love Back In Uk
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/get-lost-love-back-in-birmingham/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Get Lost Love Back In Birmingham
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/get-lost-love-back-in-liverpool/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Get Lost Love Back In Liverpool
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/get-lost-love-back-in-nottingham/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Get Lost Love Back In Nottingham
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/husband-wife-problem-in-usa/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Husband Wife Problem In Usa
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/husband-wife-problem-in-new-york/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Husband Wife Problem In New York
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/husband-wife-problem-in-california/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Husband Wife Problem In California
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/husband-wife-problem-in-illinois/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Husband Wife Problem In Illinois
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/husband-wife-problem-in-uk/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Husband Wife Problem In Uk
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/husband-wife-problem-in-london/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Husband Wife Problem In London
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-problem-solution-in-california/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Problem Solution In California
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-column wow fadeIn container col-lg-4"
                style={{ margin: "2rem auto 2rem auto" }}
              >
                <div class="elementor-widget-wrap elementor-element-populated two_elementor_element wow fadeIn">
                  <div
                    class="elementor-element elementor-element-5b922bc elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list two_elementor_element wow fadeIn"
                    data-id="5b922bc"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div class="elementor-widget-container two_elementor_element wow fadeIn">
                      <ul class="elementor-icon-list-items two_elementor_element wow fadeIn">
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/how-to-get-my-ex-lesbian-partner-back/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              How To Get My Ex-lesbian Partner Back
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/how-to-get-your-ex-back-when-he-leaves-you-permanently/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              How To Get Your Ex Back When He Leaves You
                              Permanently
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/how-to-use-of-voodoo-specialist-doll-magic/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              How To Use Of Voodoo Specialist Doll Magic
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/husband-wife-problem-in-birmingham/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Husband Wife Problem In Birmingham
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/husband-wife-problem-in-liverpool/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Husband Wife Problem In Liverpool
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/husband-wife-problem-in-nottingham/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Husband Wife Problem In Nottingham
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-marriage-specialist-in-the-usa/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Marriage Specialist In Usa
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-marriage-specialist-in-new-york/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Marriage Specialist In New York
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-marriage-specialist-in-california/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Marriage Specialist In California
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-marriage-specialist-in-illinois/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Marriage Specialist In Illinois
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-marriage-specialist-in-the-uk/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Marriage Specialist In Uk
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-marriage-specialist-in-london/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Marriage Specialist In London
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-marriage-specialist-in-birmingham/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Marriage Specialist In Birmingham
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-marriage-specialist-in-liverpool/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Marriage Specialist In Liverpool
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-marriage-specialist-in-nottingham/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Marriage Specialist In Nottingham
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-marriage-specialist-in-australia/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Marriage Specialist In Australia
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-problem-solution-in-usa/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Problem Solution In Usa
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-column wow fadeIn container col-lg-4"
                style={{ margin: "2rem auto 2rem auto" }}
              >
                <div class="elementor-widget-wrap elementor-element-populated two_elementor_element wow fadeIn">
                  <div
                    class="elementor-element elementor-element-93a21dd elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list two_elementor_element wow fadeIn"
                    data-id="93a21dd"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div class="elementor-widget-container two_elementor_element wow fadeIn">
                      <ul class="elementor-icon-list-items two_elementor_element wow fadeIn">
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/how-to-win-a-court-case-immediately/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              How To Win A Court Case Immediately
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/i-just-want-my-ex-girlfriend-back-after-the-dispute/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              I Just Want My Ex-girlfriend Back After The
                              Dispute
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/kala-jadu-specialist-astrologer/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Kala Jadu Specialist Astrologer
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                            <i
                              aria-hidden="true"
                              class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                            ></i>{" "}
                          </span>
                          <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                            {" "}
                            Health Problems Solution
                          </span>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-problem-solution-in-illinois/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Problem Solution In Illinois
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-problem-solution-in-uk/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Problem Solution In Uk
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-problem-solution-in-london/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Problem Solution In London
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-problem-solution-in-birmingham/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Problem Solution In Birmingham
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-problem-solution-in-liverpool/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Problem Solution In Liverpool
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-problem-solution-in-nottingham/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Problem Solution In Nottingham
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-problem-solution-in-australia/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Problem Solution In Australia
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/black-magic-expert-in-usa/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Black Magic Expert In Usa
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/black-magic-expert-in-new-york/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Black Magic Expert In New York
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/black-magic-expert-in-california/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Black Magic Expert In California
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/black-magic-expert-in-illinois/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Black Magic Expert In Illinois
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/black-magic-expert-in-the-uk/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Black Magic Expert In Uk
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/black-magic-expert-in-london/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Black Magic Expert In London
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/black-magic-expert-in-liverpool/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Black Magic Expert In Liverpool
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/black-magic-expert-in-nottingham/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Black Magic Expert In Nottingham
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/black-magic-expert-in-sydney/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Black Magic Expert In Sydney
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/black-magic-expert-in-melbourne/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Black Magic Expert In Melbourne
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/black-magic-expert-in-perth/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Black Magic Expert In Perth
                            </span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item two_elementor_element wow fadeIn">
                          <a
                            href="https://astrologermdsharma.com/love-problem-solution-in-new-york/"
                            class="two_elementor_element wow fadeIn"
                          >
                            <span class="elementor-icon-list-icon two_elementor_element wow fadeIn">
                              <i
                                aria-hidden="true"
                                class="fas fa-hand-point-right two_elementor_element wow fadeIn"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text two_elementor_element wow fadeIn">
                              Love Problem Solution In New York
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact us and Goodbye */}

        {/* Testimonial Section */}
        <section
          className="testimonial "
        >
          <div className="testimonial-column">
            <div className="row p-5">
              <div className="col-lg-6 wow fadeIn mt-4" data-wow-delay="0.5s">
                <div
                  className="section-title text-center mx-auto wow fadeInUp"
                  data-wow-delay="0.1s"
                  style={{
                    maxWidth: "500px",
                  }}
                >
                  <h5 className="fs-5 fw-medium fst-italic text-primary">
                    Testimonial
                  </h5>
                  <h5 style={{ fontFamily: "Playfair Display" }}> Arjun Sharma Astrologer is your trusted choice for all
                    your astrological needs. With over 10 years of experience,
                    Arjun Sharma has helped  </h5>
                </div>
                <div
                  className="row justify-content-center wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  {/*//! slider for testimonials */}

                  <div className="slider">
                    <input type="radio" name="testimonial" id="t-1" />
                    <input type="radio" name="testimonial" id="t-2" />
                    <input type="radio" name="testimonial" id="t-3" defaultChecked />
                    <input type="radio" name="testimonial" id="t-4" />
                    <input type="radio" name="testimonial" id="t-5" />
                    <div className="testimonials">
                      <label className="item" htmlFor="t-1">
                        <img className="slider-image" src="https://www.rgstartup.com/demo9/images/tes.jpg" alt="" srcset="" />
                        <h6>Lorem, ipsum dolor.</h6>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem aperiam inventore perferendis, beatae autem ipsa veniam quae dolores explicabo aut repellendus quam nobis tempore! Ipsum sunt iure vero aliquam?</span>
                      </label>
                      <label className="item" htmlFor="t-2">
                        <img className="slider-image" src="https://www.rgstartup.com/demo9/images/tes2.jpg" alt="" />
                        <h6>Lorem, ipsum dolor.</h6>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem aperiam inventore perferendis, beatae autem ipsa veniam quae dolores explicabo aut repellendus quam nobis tempore! Ipsum sunt iure vero aliquam?</span>
                      </label>
                      <label className="item" htmlFor="t-3">
                        <img className="slider-image" src="https://www.rgstartup.com/demo9/images/tes3.jpg" alt="" />
                        <h6>Lorem, ipsum dolor.</h6>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem aperiam inventore perferendis, beatae autem ipsa veniam quae dolores explicabo aut repellendus quam nobis tempore! Ipsum sunt iure vero aliquam?</span>
                      </label>
                      <label className="item" htmlFor="t-4">
                        <img className="slider-image" src="https://www.rgstartup.com/demo9/images/tes.jpg" alt="" srcset="" />
                        <h6>Lorem, ipsum dolor.</h6>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem aperiam inventore perferendis, beatae autem ipsa veniam quae dolores explicabo aut repellendus quam nobis tempore! Ipsum sunt iure vero aliquam?</span>
                      </label>
                      <label className="item" htmlFor="t-5">
                        <img className="slider-image" src="https://www.rgstartup.com/demo9/images/tes2.jpg" alt="" />
                        <h6>Lorem, ipsum dolor.</h6>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem aperiam inventore perferendis, beatae autem ipsa veniam quae dolores explicabo aut repellendus quam nobis tempore! Ipsum sunt iure vero aliquam?</span>
                      </label>
                    </div>
                    <br />
                    <div className="dots">
                      <label htmlFor="t-1" />
                      <label htmlFor="t-2" />
                      <label htmlFor="t-3" />
                      <label htmlFor="t-4" />
                      <label htmlFor="t-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="logo-part  wow fadeInUp mt-4"
                  ata-wow-delay="0.5s"
                >
                  <img className="testimonial-img" src="https://img.freepik.com/premium-vector/astrology-logo_10250-3906.jpg" alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement & Awards */}
        <div className="awards-fluid product py-5 my-5">
          <div className="achivement-awards">
            <div
              className="awards-title text-center mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                maxWidth: "500px",
              }}
            >
              <p className="fs-5 fw-medium fst-italic text-primary">
                TRIUMPHANT HONORS
              </p>
              <h3 className="display-6"> ACHIEVEMENT & REWARDS.</h3>
            </div>
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-lg-4">
                  <div className="img-container">
                    <img src="https://plus.unsplash.com/premium_photo-1661487134705-b3693a52965c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="img-container">
                    <img src="https://images.pexels.com/photos/6651190/pexels-photo-6651190.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="img-container">
                    <img src="https://images.pexels.com/photos/8112198/pexels-photo-8112198.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="img-container">
                    <img src="https://images.pexels.com/photos/8524944/pexels-photo-8524944.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        {/* Contact Start */}
        <div className="container-xxl contact py-5">
          <div className="container">
            <div
              className="section-title text-center mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                maxWidth: "500px",
              }}
            >
              <p className="fs-5 fw-medium fst-italic text-primary">
                Contact Us
              </p>
              <h1 className="display-6">Contact us right now</h1>
            </div>
            <div
              className="row justify-content-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="col-lg-8">
                <p className="text-center mb-5">
                  Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                  erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                  Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                  erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                </p>
                <div className="row g-5">
                  <div
                    className="col-md-4 text-center wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="btn-square mx-auto mb-3">
                      <i className="fa fa-envelope fa-2x text-white" />
                    </div>
                    <p className="mb-2">info@example.com</p>
                    <p className="mb-0">support@example.com</p>
                  </div>
                  <div
                    className="col-md-4 text-center wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="btn-square mx-auto mb-3">
                      <i className="fa fa-phone fa-2x text-white" />
                    </div>
                    <p className="mb-2">+012 345 67890</p>
                    <p className="mb-0">+012 345 67890</p>
                  </div>
                  <div
                    className="col-md-4 text-center wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="btn-square mx-auto mb-3">
                      <i className="fa fa-map-marker-alt fa-2x text-white" />
                    </div>
                    <p className="mb-2">123 Street</p>
                    <p className="mb-0">New York, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Emd */}


        {/* why choose us */}
        <section
          className="why-choose-us"
          style={{ backgroundColor: "#f0ebfd" }}
        >
          <div className="choosee-us-column">
            <div className="row p-5">
              <div className="col-lg-6">
                <div
                  className="contact-part wow fadeIn mt-4"
                  ata-wow-delay="0.5s"
                >
                  <div className="form-texxx">
                    <h3>Send Us A Message </h3>
                  </div>
                  <form method="post">
                    <div className="row">
                      <div className="col-sm-6">
                        <label>Name</label>
                        <input
                          type="text"
                          name="fname"
                          className="form-control place"
                          id="inputfirst"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>E-mail</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control place"
                          id="inputEmail4"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>Phone No</label>
                        <input
                          type="tel"
                          name="mobile"
                          className="form-control place"
                          id="inputPassword4"
                          placeholder="Mobile"
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control place"
                          placeholder="City"
                          id="inputlast"
                          required
                        />
                      </div>
                      <div className="form-group col-sm-12">
                        <label>Message</label>
                        <textarea
                          name="message"
                          className="form-control place"
                          id="description"
                          placeholder="Enter Your Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-sm-12 ">
                        <button
                          type="submit"
                          name="submit"
                          className="btn btn-seconday "
                        >
                          <i className="fa fa-paper-plane" /> Send Message
                        </button>
                        {/* <button className="btn btn-seconday">Send Message</button> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn mt-4" data-wow-delay="0.5s">
                <div className="section-title">
                  <h1 className="display-6">Why Choose Us</h1>
                  <p className="fs-5 fw-medium fst-italic text-primary">
                    Get accurate Predictions & Solutions for All Astro Related
                    Problems.
                  </p>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="choose-us-card my-2 p-2">
                      <center>
                        <div className="fa-logo">
                          <i class="fa-regular fa-2x fa-face-smile-beam" style={{ color: "white", alignItems: "center", marginTop: "0.5rem" }}></i>
                        </div>
                        <h1>9739+</h1>
                        <span>Happy Clients</span>
                      </center>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="choose-us-card my-2 p-2">
                      <center>
                        <div className="fa-logo">
                          <i class="fa-regular fa-2x fa-face-smile-beam" style={{ color: "white", alignItems: "center", marginTop: "0.5rem" }}></i>
                        </div>
                        <h1>9739+</h1>
                        <span>Happy Clients</span>
                      </center>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="choose-us-card my-2 p-2">
                      <center>
                        <div className="fa-logo">
                          <i class="fa-regular fa-2x fa-face-smile-beam" style={{ color: "white", alignItems: "center", marginTop: "0.5rem" }}></i>
                        </div>
                        <h1>9739+</h1>
                        <span>Happy Clients</span>
                      </center>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="choose-us-card my-2 p-2">
                      <center>
                        <div className="fa-logo">
                          <i class="fa-regular fa-2x fa-face-smile-beam" style={{ color: "white", alignItems: "center", marginTop: "0.5rem" }}></i>
                        </div>
                        <h1>9739+</h1>
                        <span>Happy Clients</span>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </>
    </div>
  );
}
