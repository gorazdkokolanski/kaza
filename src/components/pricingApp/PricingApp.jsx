import React, { useEffect, useState, useRef } from 'react';
import pricingBg from "../../assets/img/pricing-bg-img.png";

const PricingApp = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const tripBoxRef = useRef(null);
    const tripReviewRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);

        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const container = tripBoxRef.current;
        const img = tripReviewRef.current;
        if (!container || !img) return;

        let scrollHandler;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.1) {
                    // when 10% visible, start listening to scroll
                    scrollHandler = () => {
                        const { top } = container.getBoundingClientRect();
                        // replicate your “start 200px before” window:
                        let scrolledPast = top - 800;

                        if (scrolledPast > 0) return;            // not yet in range
                        if (scrolledPast < -300) scrolledPast = -300;  // don’t overshoot

                        // same formula you used: 100 − (|scrolledPast|/3)
                        const pct = 100 - Math.abs(scrolledPast) / 3;
                        img.style.transform = `translateY(${pct*1.3}%)`;
                    };

                    window.addEventListener('scroll', scrollHandler);
                    scrollHandler(); // initialize position immediately
                } else if (scrollHandler) {
                    window.removeEventListener('scroll', scrollHandler);
                    scrollHandler = null;
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(container);

        return () => {
            if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
            observer.disconnect();
        };
    }, [screenWidth]);



    return (
        <>


            <section className="about-section fix section-padding mw-100 pricing-padding mb-0">
                <div className="container-fluid">
                    <div className="about-wrapper-3 style-2">
                        <div className="row">
                            <div className="col-lg-12 mt-5 mt-lg-0">
                                <div className="about-content ">
                                    <div className="section-title">

                                        <h2 className="splt-txt wow" data-splitting>
                                            How Pricing Works
                                        </h2>
                                    </div>
                                    <p className="mt-3 about-p mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        {screenWidth > 991 ? "You won't pay more, for staying longer." : "There’s no membership fee and no commitment required - just simple, affordable travel"}
                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-section fix section-padding pricing-padding bg-white pt-5">
                <div className="container">
                    <div className="about-wrapper-3 style-2">
                        <div className="pricing-app-row">
                            <div className="">
                                <div className="feature-card p-0 card1 bg-none h-auto w-100 mb-0 pb-0 mt-0 pt-0 d-flex align-items-center">
                                    <div className="feature-content">
                                        <div className="feature-details">
                                            <div className="feature-image_more ">
                                                <img src="assets/img/one-time-service.png" width="220px" alt="Feature Image" />
                                            </div>
                                            <h3 className="feature-title">One-Time Service Fee</h3>
                                            <p className="feature-description">At Kaza, we reward long-term stays -<br />
                                                whether you're here for 7 days or 30, our<br />
                                                <span className="fw-bold"> 150€</span> service fee never changes. No<br />
                                                surprises, just simple pricing.</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="feature-card bg-none h-auto w-100 mb-0 pb-0 mt-0 pt-0 d-flex align-items-center">
                                    <div className="feature-content">
                                        <div className="feature-details">
                                            <div className="feature-image_more ">
                                                <img src="assets/img/credits-5.png" width="188px" alt="Feature Image" className="image-spacing" />
                                            </div>
                                            <h3 className="feature-title">5 Credits Included</h3>
                                            <p className="feature-description">
                                                When you register your place, you’ll <br />
                                                <span className="fw-bold"> receive 5 credits</span>, which you can use to<br />
                                                stay in any cities. That's 5 nights of travel<br />
                                                on us!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="feature-card bg-none h-auto w-100 mb-0 pb-0 mt-0 pt-0 d-flex align-items-center">
                                    <div className="feature-content">
                                        <div className="feature-details">
                                            <div className="feature-image_more ">
                                                <img src="assets/img/no-mem.png" width="332px" alt="Feature Image" />
                                            </div>
                                            <h3 className="feature-title">Radically Affordable Stays</h3>
                                            <p className="feature-description">
                                                Travel more for less with KazaSwap’s <br />
                                                straight forward pricing model. <span className="fw-bold"> No nightly <br />
                                                    fees, no cleaning charges </span>—just a single <br />
                                                service fee per swap.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-section-2 fix mw-100 section-padding pricing-sec"
                style={{
                    background: 'url(assets/img/pricing-bg.png)',
                    backgroundSize: "cover",
                    borderRadius: "30px",


                }}>
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp define-width-price" data-wow-delay=".3s" ref={tripBoxRef}>
                            <div className="mob trip-mobile">
                                <img src="/assets/img/trip-mobile.png" alt="img" />
                                <img className='trip-review' src="/assets/img/trip-review.png" alt="review" ref={tripReviewRef} /> 
                            </div>
                            <div className="trip-box">
                                <h2>One-week trip in Berlin</h2>

                                <p>
                                    Join our community for affordable home exchanges and experience savings unlike any Airbnb stay.
                                </p>

                                <h4>Saving up to 1500€ cost on Airbnb.</h4>

                                <div className='trip-icons'>
                                    <div>
                                        <div>
                                            <div>
                                                <img src="/assets/img/t1.png" alt="trip" />
                                            </div>
                                            <div>2 weeks in Berlin.</div>
                                        </div>
                                        <div>
                                            <div>
                                                <img src="/assets/img/t2.png" alt="trip" />
                                            </div>
                                            <div>Work setup, desk, speed WIFI.</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>
                                                <img src="/assets/img/t3.png" alt="trip" />
                                            </div>
                                            <div>2 bedrooms, bright flat.</div>
                                        </div>
                                        <div>
                                            <div>
                                                <img src="/assets/img/t4.png" alt="trip" />
                                            </div>
                                            <div>2 bathrooms.</div>
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
    )
}

export default PricingApp