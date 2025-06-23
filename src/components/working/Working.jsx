import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Footer from "../footer/Footer";
import girlmobPic from "../../assets/img/how-it-work-girl-pic-mob.png";
import exchangeBg from "../../assets/img/exchange-bg.png";

const Working = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        class="about-section section-padding mw-100 fix pricing-padding"
        style={{
          background: "linear-gradient(0deg, #F7F6E9 47.95%, #FFFFFF 119.86%)",
          backgroundSize: "cover",
        }}
      >
        <div class="container-fluid">
          <div class="about-wrapper-3 style-2">
            <div class="row">
              <div class="col-lg-12 mt-5 mt-lg-0">
                <div class="about-content ">
                  <div class="section-title">
                    <h2 class="splt-txt wow" data-splitting>
                      How It Works with KazaSwap
                    </h2>
                  </div>
                  <p
                    class="mt-3 about-p mt-md-0 wow fadeInUp how-it-work-p"
                    data-wow-delay=".5s"
                  >
                    KazaSwap is a global community of travellers <br />
                    sharing their homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {screenWidth <= 990 && (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="works-slider"
        >
          <SwiperSlide>
            <div className="col-lg-12 text-center">

              <div className="credit-img">
                <img
                  src="assets/img/how-credit.png"
                  style={{ width: "188px" }}
                  className="smallmg"
                />
              </div>
              <div className="credit-trext">
                <h5>Start with 5 Credits</h5>
                <p>
                  When you join KazaSwap, you’ll receive 5 credits, giving you 5
                  nights to stay at any member’s home.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-lg-12 text-center">

              <div className="credit-img">
                <img src="assets/img/no-subs.png" style={{ width: "188px" }} className="smallmg" />
              </div>
              <div className="credit-trext">
                <h5>
                  No Subscriptions, No <br /> Commitments
                </h5>
                <p>
                  KazaSwap only charges a small service fee when you confirm a
                  swap—no subscriptions, no recurring payments.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-lg-12 text-center">

              <div className="credit-img">
                <img
                  src="assets/img/by-hosting.png"
                  className="mb-0 img-big bigmg"
                  style={{ width: "188px" }}
                />
              </div>
              <div className="credit-trext" style={{ marginTop: -40 }}>
                <h5>Earn Credits by Hosting</h5>
                <p>
                  The only way to earn more credits is by hosting other members
                  in your home, ensuring a truly authentic sharing economy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-lg-12 text-center">

              <div className="credit-img">
                <img
                  src="assets/img/true-sharing.png"
                  style={{ width: "188px" }}
                  className="img-big bigmg"
                />
              </div>

              <div className="credit-trext">
                <h5>Promoting True Sharing</h5>
                <p>
                  Credits can be topped up through payment each credit still
                  represents a meaningful exchange within the travel community.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}

      <section class="about-section fix1 section-padding exchange-div position-relative">
        <div class="container">
          <div class="about-wrapper-3 style-2">
            <div class="row">
              <div class="col-lg-12 mt-5 mt-lg-0">
                <div class="about-content text-center works-flow">
                  <div class="row hide-on-mobile">
                    <div class="col-lg-4">
                      <div class="col-lg-12">
                        <div class="path-img position-relative">
                          <img src="assets/img/Path-1.png" />
                        </div>
                        <div class="credit-img">
                          <img src="assets/img/how-credit.png" width="188px" />
                        </div>
                        <div class="credit-trext">
                          <h5>Start with 5 Credits</h5>
                          <p>
                            When you join KazaSwap, you’ll receive <br /> 5
                            credits, giving you 5 nights to stay at <br /> any
                            member’s home.
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="path-img position-relative">
                          <img src="assets/img/Path-2.png" />
                        </div>
                        <div class="credit-img">
                          <img src="assets/img/no-subs.png" width="220px" />
                        </div>
                        <div class="credit-trext">
                          <h5>
                            No Subscriptions, No <br />
                            Commitments
                          </h5>
                          <p>
                            KazaSwap only charges a small service fee <br />{" "}
                            when you confirm a swap—no subscriptions, <br />
                            no recurring payments.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <img
                        src="assets/img/how-it-works-phone-2.png"
                        width="314px"
                        class="small-size"
                      />
                    </div>
                    <div class="col-lg-4">
                      <div class="col-lg-12">
                        <div class="path-img position-relative">
                          <img
                            src="assets/img/Path-3.png"
                            class="path3"
                            width="342px"
                          />
                        </div>
                        <div class="credit-img">
                          <img
                            src="assets/img/by-hosting.png"
                            class="mb-0"
                            width="250px"
                          />
                        </div>
                        <div class="credit-trext">
                          <h5>Earn Credits by Hosting</h5>
                          <p>
                            The only way to earn more credits is by <br />
                            hosting other members in your home,
                            <br /> ensuring a truly authentic sharing <br />
                            economy.
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="path-img position-relative">
                          <img
                            src="assets/img/Path-4.png"
                            class="path4"
                            width="342px"
                          />
                        </div>
                        <div class="credit-img">
                          <img
                            src="assets/img/true-sharing.png"
                            width="222px"
                          />
                        </div>

                        <div class="credit-trext">
                          <h5>Promoting True Sharing</h5>
                          <p>
                            Credits can be topped up through payment <br />
                            each credit still represents a meaningful <br />
                            exchange within the travel community.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="service-section-2 fix section-padding mw-100 pricing-sec exchange-sec"
        style={{
          background: `url(assets/img/exchange-bg.png)`,
          backgroundSize: 'cover',
          borderRadius: '30px'
        }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div className="mob mobimg-bg">
              <img src="/assets/img/mobile-exchange-bg.png" alt="bg" />
            </div>
            <div
              class="col-xl-8 col-lg-8 col-sm-12 wow fadeInUp define-width-price"
              data-wow-delay=".3s"
            >
              
              <div class="exchange-offer-section">
              <div class="row hide-on-mobile">
                <h4
                  class="splt-txt wow heading-exchange"
                  data-splitting="true"
                  style={{ textAlign: "left" }}
                >
                  <a href="#!"> How Home Exchange Works</a>
                </h4>
              </div>
                <div class="row hide-on-desktop">
                  <h4
                    class="splt-txt wow heading-exchange"
                    data-splitting="true"
                    style={{ textAlign: "left" }}
                  >
                    <a href="#!">
                      {" "}
                      How Home <br />
                      Exchange Works
                    </a>
                  </h4>

                </div>
                <div class="content row hide-on-desktop">
                  <div class="exchnage-coin-2">
                    <div class="coin-sec d-flex align-items-center gap-3 mb-0">
                      <div class="coin-img">
                        <img
                          width="74px"
                          src="/assets/img/how1.png"
                        />
                      </div>
                    </div>
                    <p>
                    Use 1 credit per night to book your stay at any member’s home.
                    </p>
                  </div>
                  <div class="exchnage-coin-2">
                    <div class="coin-sec d-flex align-items-center gap-3 mb-0">
                      <div class="coin-img">
                        <img
                          width="74px"
                        src="/assets/img/how2.png"
                        />
                      </div>
                    </div>
                    <p>
                    Your credits never expire, so you can save them for future travels or use them whenever you're ready.
                    </p>
                  </div>
                  <div class="exchnage-coin-2">
                    <div class="coin-sec d-flex align-items-center gap-3 mb-0">
                      <div class="coin-img">
                        <img
                          width="74px"
                          src="/assets/img/how3.png"
                          />
                      </div>
                    </div>
                    <p>
                    With no nightly fees and no cleaning charges, traveling with KazaSwap is straightforward and affordable.
                    </p>
                  </div>
                </div>
                <div class="content row hide-on-mobile">
                  <div class="coin-sec d-flex align-items-start">
                    <div class="coin-img">
                      <img
                        width="74px"
                        src="/assets/img/how1.png"
                        />
                    </div>
                    <div class="">
                      <p>
                      Use 1 credit per night to book your stay at any member’s home.
                      </p>
                    </div>
                  </div>
                  <div class="coin-sec d-flex align-items-start">
                    <div class="coin-img">
                      <img
                        width="74px"
                        src="/assets/img/how2.png"
                      />
                    </div>
                    <div class="">
                      <p>
                      Your credits never expire, so you can save them for future travels or use them whenever you're ready.
                      </p>
                    </div>
                  </div>
                  <div class="coin-sec d-flex align-items-start mb-0">
                    <div class="coin-img">
                      <img
                        width="74px"
                        src="/assets/img/how3.png"
                      />
                    </div>
                    <div class="">
                      <p>
                      With no nightly fees and no cleaning charges, traveling with KazaSwap is straightforward and affordable.
                      </p>
                    </div>
                  </div>
                </div>
                <a className="new-btn" href="https://app.kazaswap.co/register">Register your place</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Working;
