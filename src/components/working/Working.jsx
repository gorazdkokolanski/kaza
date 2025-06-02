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
        >
          <SwiperSlide>
            <div className="col-lg-12 text-center">

              <div className="credit-img">
                <img
                  src="assets/img/how-credit.png"
                  style={{ width: "188px" }}
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
                <img src="assets/img/no-subs.png" style={{ width: "188px" }} />
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
                  className="mb-0 img-big"
                  style={{ width: "188px" }}
                />
              </div>
              <div className="credit-trext">
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
                  className="img-big"
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
            <div
              class="col-xl-8 col-lg-8 col-sm-12 wow fadeInUp define-width-price"
              data-wow-delay=".3s"
            >
              <div class="row hide-on-mobile">
                <h4
                  class="splt-txt wow heading-exchange"
                  data-splitting="true"
                  style={{ textAlign: "left" }}
                >
                  <a href="#!"> How Home Exchange Works</a>
                </h4>
                <div class="exchange-para">
                  <p>
                    Discover new destinations while saving with
                    <br /> KazaSwap.
                  </p>
                </div>
              </div>
              <div class="exchange-offer-section">
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
                  <div class="exchange-para">
                    <p>
                      Discover new destinations while saving
                      <br /> with KazaSwap.
                    </p>
                  </div>
                </div>
                <div class="content row hide-on-desktop">
                  <div class="exchnage-coin-2">
                    <div class="coin-sec d-flex align-items-center gap-3 mb-0">
                      <div class="coin-img">
                        <img
                          width="74px"
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <div class="">
                        <h5>Spend Credits to Stay Anywhere</h5>
                      </div>
                    </div>
                    <p>
                      Send a request to connect and start your adventure. Use 1
                      credit per night to book your stay at any member’s home.
                    </p>
                  </div>
                  <div class="exchnage-coin-2">
                    <div class="coin-sec d-flex align-items-center gap-3 mb-0">
                      <div class="coin-img">
                        <img
                          width="74px"
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <div class="">
                        <h5>Unlimited Credit Accumulation</h5>
                      </div>
                    </div>
                    <p>
                      Your credits never expire, so you can save them for future
                      travels or use them whenever you're ready.{" "}
                    </p>
                  </div>
                  <div class="exchnage-coin-2">
                    <div class="coin-sec d-flex align-items-center gap-3 mb-0">
                      <div class="coin-img">
                        <img
                          width="74px"
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <div class="">
                        <h5>Simple and Transparent</h5>
                      </div>
                    </div>
                    <p>
                      With no nightly fees and no cleaning charges, traveling
                      with KazaSwap is straightforward and affordable.{" "}
                    </p>
                  </div>
                </div>
                <div class="content row hide-on-mobile">
                  <div class="coin-sec d-flex align-items-start">
                    <div class="coin-img">
                      <img
                        width="74px"
                        src="data:image/png;base64,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"
                      />
                    </div>
                    <div class="">
                      <h5>Spend Credits to Stay Anywhere</h5>
                      <p>
                        Send a request to connect and start your adventure. Use
                        1 credit per night to book your stay at any member’s
                        home.
                      </p>
                    </div>
                  </div>
                  <div class="coin-sec d-flex align-items-start">
                    <div class="coin-img">
                      <img
                        width="74px"
                        src="data:image/png;base64,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"
                      />
                    </div>
                    <div class="">
                      <h5>Unlimited Credit Accumulation</h5>
                      <p>
                        Your credits never expire, so you can save them for
                        future travels or use them whenever you're ready.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="coin-sec d-flex align-items-start mb-0">
                    <div class="coin-img">
                      <img
                        width="74px"
                        src="data:image/png;base64,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"
                      />
                    </div>
                    <div class="">
                      <h5>Simple and Transparent</h5>
                      <p>
                        With no nightly fees and no cleaning charges, traveling
                        with KazaSwap is straightforward and affordable.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Working;
