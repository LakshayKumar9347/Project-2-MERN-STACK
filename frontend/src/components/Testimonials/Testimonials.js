import React from 'react'
import HeaderTop from '../HeaderTop'

export default function Testimonials() {
  return (
    <div>
        <>

              <div>
                  {/* Page Header Start */}
                  <HeaderTop heading="Testimonials" list="Testimonials" />
                  {/* Page Header End */}
                  {/* Testimonial Start */}
                  <div className="container-fluid py-5">
                      <div className="container">
                          <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                              <p className="fs-5 fw-medium fst-italic text-primary">Testimonial</p>
                              <h1 className="display-6">What our clients say about our tea</h1>
                          </div>
                          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.5s">
                              <div className="testimonial-item p-4 p-lg-5">
                                  <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                                  <div className="d-flex align-items-center justify-content-center">
                                      <img className="img-fluid flex-shrink-0" src="img/testimonial-1.jpg" alt="" />
                                      <div className="text-start ms-3">
                                          <h5>Client Name</h5>
                                          <span className="text-primary">Profession</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="testimonial-item p-4 p-lg-5">
                                  <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                                  <div className="d-flex align-items-center justify-content-center">
                                      <img className="img-fluid flex-shrink-0" src="img/testimonial-2.jpg" alt="" />
                                      <div className="text-start ms-3">
                                          <h5>Client Name</h5>
                                          <span className="text-primary">Profession</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="testimonial-item p-4 p-lg-5">
                                  <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                                  <div className="d-flex align-items-center justify-content-center">
                                      <img className="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" alt="" />
                                      <div className="text-start ms-3">
                                          <h5>Client Name</h5>
                                          <span className="text-primary">Profession</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* Testimonial End */}
              </div>

        </>
    </div>
  )
}
