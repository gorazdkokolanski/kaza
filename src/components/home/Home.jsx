import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "fullpage.js/dist/fullpage.min.css";
import fullpage from "fullpage.js";
import $ from "jquery";
import { Link } from "react-router-dom";
import homeEarning from "../../assets/img/home-earning-mob.png"
import { useRef } from "react";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // useEffect(() => {
  //   if (screenWidth <= 768) {
  //     return;
  //   }
  //   if ($("#fullpage").length > 0) {
  //     new fullpage("#fullpage", {
  //       sectionSelector: ".vertical-scrolling",
  //       slideSelector: ".horizontal-scrolling",
  //       anchors: [
  //         "welcome",
  //         "how-it-works",
  //         "earning-credit",
  //         "download-app",
  //         "faqs",
  //         "follow-us",
  //         "success-stories",
  //         "services",
  //         "technology-expertise",
  //         "engagement-models",
  //         "happy_clients",
  //         "journey",
  //         "corporate-social-responsibilities",
  //         "group-of-companies",
  //         "cheerful-workforce",
  //         "global-presence",
  //       ],
  //       navigation: true,
  //       slidesNavigation: true,
  //       controlArrows: false,
  //       scrollingSpeed: 700,
  //       fitToSection: true,
  //       verticalCentered: false,
  //       lazyLoading: true,
  //       scrollOverflow: false,
  //     });
  //   }

  //   return () => {
  //     if (typeof window.fullpage_api !== "undefined") {
  //       window.fullpage_api.destroy("all");
  //     }
  //   };
  // }, []);
  const swiperRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const stickyElements = document.querySelectorAll(".stickyk");
    const faqItems = document.querySelectorAll(".faq-item"); // Update as needed

    const setStickyPositionSection = () => {
      let windowHeight = window.innerHeight;
      stickyElements.forEach((element) => {
        if (element.clientHeight > windowHeight) {
          let difference = element.clientHeight - windowHeight;
          element.style.top = `-${difference}px`;
        }
      });

    };



    const calculateVisibleHeight = (element) => {
      let windowHeight = window.innerHeight;
      let blockRect = element.getBoundingClientRect();
      let blockTop = Math.max(blockRect.top, 0);
      let visibleHeightInPercent =
        (100 * (windowHeight - blockTop)) / windowHeight;
      return Math.ceil(visibleHeightInPercent);
    };

    const mapValue = (value, fromMin, fromMax, toMin, toMax) => {
      return (
        ((value - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin
      );
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      return rect.bottom <= windowHeight * 0.5;
    };

    const handleStickySection = () => {
      sections.forEach((section, index) => {
        let visibleHeight = calculateVisibleHeight(section);
        let prevSection = sections[index - 1];
        if (prevSection) {
          const sectionBack = prevSection.querySelector(".section-back");

          if (visibleHeight >= 30 && visibleHeight <= 80) {
            prevSection.style.transform = `translateY(-${mapValue(visibleHeight, 30, 80, 0, 100) / 2
              }px)`;
            if (sectionBack)
              sectionBack.style.opacity = `${mapValue(
                visibleHeight,
                30,
                80,
                0,
                100
              )}%`;
            prevSection.style.opacity = 1;
          } else if (visibleHeight > 80 && visibleHeight < 100) {
            prevSection.style.transform = `translateY(-${mapValue(80, 30, 80, 0, 100) / 2
              }px)`;
            if (sectionBack)
              sectionBack.style.opacity = `${mapValue(80, 30, 80, 0, 100)}%`;
            prevSection.style.opacity = 1;
          } else if (visibleHeight >= 100) {
            prevSection.style.opacity = 0;
          }

          if (visibleHeight >= 0 && visibleHeight <= 100) {
            prevSection.style.transform = `translateY(-${visibleHeight / 2}px)`;
          }
        }
      });
    };

    const showFirstFaqItem = () => {
      if (faqItems[0]) {
        faqItems[0].classList.add("show");
      }
    };

    const handleWindowScroll = () => {
      if (window.innerWidth > 768 && window.innerHeight > 479) {
        handleStickySection();
        setStickyPositionSection();
        if (
          faqItems[0] &&
          !faqItems[0].classList.contains("show") &&
          isElementInViewport(faqItems[0])
        ) {
          showFirstFaqItem();
        }
      }
    };

    const handleWindowResize = () => {
      if (window.innerWidth > 768 && window.innerHeight > 479) {
        setStickyPositionSection();
        handleStickySection();
      }
    };

    const handleWindowLoad = () => {
      if (window.innerWidth > 768 && window.innerHeight > 479) {
        setStickyPositionSection();
        handleStickySection();
      }
    };

    const handleOrientationChange = () => {
      if (window.innerWidth > 768 && window.innerHeight > 479) {
        setStickyPositionSection();
        handleStickySection();
      }
    };

    const debounce = (func, delay) => {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
      };
    };

    const debouncedResize = debounce(handleWindowResize, 200);

    window.addEventListener("resize", debouncedResize);
    window.addEventListener("scroll", handleWindowScroll);
    window.addEventListener("load", handleWindowLoad);
    window.addEventListener("orientationchange", handleOrientationChange);

    // Clean up
    return () => {
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("load", handleWindowLoad);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    // 1) JS-driven infinite marquee helper
    function setupMarquee(selector, speed = 1, direction = "left") {
      const marquee = document.querySelector(selector);
      if (!marquee) return;
  
      // duplicate 3× total
      const original = marquee.innerHTML;
      marquee.innerHTML = original + original + original;
  
      const block = marquee.scrollWidth / 3;
      let offset = direction === "left" ? 0 : -block;
      let hover = false;
  
      function step() {
        if (!hover) {
          offset += direction === "left" ? -speed : speed;
          if (direction === "left"  && Math.abs(offset) >= block) offset = 0;
          if (direction === "right" && offset >= 0)             offset = -block;
          marquee.style.transform = `translateX(${offset}px)`;
        }
        requestAnimationFrame(step);
      }
  
      marquee.addEventListener("mouseover", () => (hover = true));
      marquee.addEventListener("mouseout",  () => (hover = false));
      step();
    }
  
    // 2) Kick off the two looping marquees
    setupMarquee(".marquee-inner",  1, "left");
    setupMarquee(".marquee-inner1", 1, "right");
  
    // 3) Duplicate content for the scroll-synced lanes
    [".marquee-inner2", ".marquee-inner3"].forEach((sel) => {
      const m = document.querySelector(sel);
      if (!m) return;
      const html = m.innerHTML;
      m.innerHTML = html + html + html;
    });
  
    // 4) Hook up scroll → horizontal offset for lanes 2 & 3
    const synced = document.querySelectorAll(".marquee-inner2, .marquee-inner3");
    function onScroll() {
      const H = window.innerHeight;
      synced.forEach((m) => {
        const { top, height } = m.getBoundingClientRect();
        const block = m.scrollWidth / 3;
        let prog = (H - top) / (H + height);
        prog = Math.max(0, Math.min(1, prog));
  
        // inner2 → left (-1), inner3 → right (+1)
        const dir = m.classList.contains("marquee-inner2") ? -1 : 1;
        // for right-mover we offset start so it enters from left
        const x = dir * block * prog + (dir === 1 ? -block : 0);
        m.style.transform = `translateX(${x}px)`;
      });
    }
  
    window.addEventListener("scroll", onScroll);
    onScroll(); // initialize
  
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  
  
  


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
  
    // 1) Disable CSS animation & duplicate content
    scrollers.forEach((scroller) => {
      const inner = scroller.querySelector(".scroller__inner");
      if (!inner) return;
  
      scroller.removeAttribute("data-animated");
      inner.style.animation = "none";
  
      Array.from(inner.children).forEach((item) => {
        const dup = item.cloneNode(true);
        dup.setAttribute("aria-hidden", "true");
        inner.appendChild(dup);
      });
    });
  
    // 2) Scroll-sync handler with flipped direction for data-direction="up"
    function onScroll() {
      const vh = window.innerHeight;
      scrollers.forEach((scroller) => {
        const inner = scroller.querySelector(".scroller__inner");
        if (!inner) return;
  
        const { top, height } = scroller.getBoundingClientRect();
        const maxOffset = inner.scrollHeight - height;
  
        let prog = (vh - top) / (vh + height);
        prog = Math.max(0, Math.min(1, prog));
  
        // Default: move up (negative Y). If data-direction="up": move down (positive Y).
        const dir = scroller.dataset.direction === "up" ?  1 : -1;
        let y;
        if(dir==1){
          y  = inner.offsetHeight - (prog * maxOffset * dir);
          y*=-1
          console.log(y)
        }
        else{
          y   = prog * maxOffset * dir;
        }
  
        inner.style.transform = `translateY(${y}px)`;
      });
    }
  
    window.addEventListener("scroll", onScroll);
    onScroll(); // initialize on mount
  
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  

  const movingRef = useRef(null);

  useEffect(() => {
    const container = document.querySelector('.section-app-dash');
    const movingEl = container?.querySelector('.moving-image');
    const img = movingEl?.querySelector('img');
    if (!container || !movingEl || !img) return;

    let scrollHandler;

    // IntersectionObserver watches .moving-image
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.1) {
          // when 10% visible, install scroll handler
          scrollHandler = () => {
            // how far past the “start” point (200px before top of container)
            const { top } = container.getBoundingClientRect();
            let scrolledPast = top - 200;

            // only run if we've scrolled into that 200px window
            if (scrolledPast > 0) return;
            if (scrolledPast < -300) scrolledPast = -300;

            // your formula: 100 − (|scrolledPast| / 2)
            const pct = 100 - (Math.abs(scrolledPast) / 3);
            img.style.transform = `translateY(${pct}%)`;
          };

          window.addEventListener('scroll', scrollHandler);
          scrollHandler(); // run once immediately
        } else if (scrollHandler) {
          // when <10% visible, clean up
          window.removeEventListener('scroll', scrollHandler);
          scrollHandler = null;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(movingEl);

    return () => {
      if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
      observer.disconnect();
    };
  }, []);








  return (
    <>
      <main class="content-scroll">
        <section class="section first-sec stickyk">
          <div class="main-hero-sec fix vertical-scrolling">
            <section class="hero-section hero-4">
              <div class="container-fluid">
                <div class="">
                  <div class="">
                    <div className="hero-content d-flex flex-column">
                      <h1 class="wow fadeInUp" data-wow-delay=".3s">
                        Swap your place, explore the world.
                      </h1>
                      <div class="align-items-center discover-btn d-flex justify-content-between">
                        <div class="">
                          <p class="wow fadeInUp mb-0" data-wow-delay=".5s">
                            Join a global community of explorers, swapping
                          </p>
                          <p>homes and saving on travel.</p>
                        </div>
                        <a
                          href="https://app.kazaswap.co/"
                          class="theme-btn padding-style wow fadeInUp bg-black "
                          data-wow-delay=".7s"
                        >
                          Discover our places
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="marquee">
                <div class="marquee-inner">
                  <img src="assets/img/img-1.png" alt="Image 1" />
                  <img src="assets/img/img-2.png" alt="Image 3" />
                  <img src="assets/img/img-3.png" alt="Image 2" />
                  <img src="assets/img/img-4.png" alt="Image 4" />
                  <img src="assets/img/img-5.png" alt="Image 5" />
                  <img src="assets/img/img-11.jpg" alt="Image 1" />
                  <img src="assets/img/img-7.png" alt="Image 3" />
                  <img src="assets/img/img-8.png" alt="Image 2" />
                  <img src="assets/img/img-9.png" alt="Image 4" />
                  <img src="assets/img/img-10.png" alt="Image 5" />
                  <img src="assets/img/img-12.jpg" alt="Image 1" />
                  <img src="assets/img/img-1.png" alt="Image 1" />
                  <img src="assets/img/img-2.png" alt="Image 3" />
                  <img src="assets/img/img-3.png" alt="Image 2" />
                  <img src="assets/img/img-4.png" alt="Image 4" />
                  <img src="assets/img/img-5.png" alt="Image 5" />
                  <img src="assets/img/img-11.jpg" alt="Image 1" />
                  <img src="assets/img/img-3.png" alt="Image 2" />
                  <img src="assets/img/img-4.png" alt="Image 4" />
                  <img src="assets/img/img-5.png" alt="Image 5" />
                  <img src="assets/img/img-11.jpg" alt="Image 1" />
                  <img src="assets/img/img-7.png" alt="Image 3" />
                  <img src="assets/img/img-8.png" alt="Image 2" />
                  <img src="assets/img/img-9.png" alt="Image 4" />
                  <img src="assets/img/img-10.png" alt="Image 5" />
                  <img src="assets/img/img-12.jpg" alt="Image 1" />
                  <img src="assets/img/img-1.png" alt="Image 1" />
                  <img src="assets/img/img-2.png" alt="Image 3" />
                  <img src="assets/img/img-3.png" alt="Image 2" />

                </div>
              </div>

              <div class="marquee-wrapper">
                <div class="marquee-inner1">
                  <img src="assets/img/img-11.jpg" alt="Image 1" />
                  <img src="assets/img/img-7.png" alt="Image 3" />
                  <img src="assets/img/img-8.png" alt="Image 2" />
                  <img src="assets/img/img-9.png" alt="Image 4" />
                  <img src="assets/img/img-10.png" alt="Image 5" />
                  <img src="assets/img/img-12.jpg" alt="Image 1" />
                  <img src="assets/img/img-13.jpg" alt="Image 3" />
                  <img src="assets/img/img-14.jpg" alt="Image 2" />
                  <img src="assets/img/img-15.jpg" alt="Image 4" />
                  <img src="assets/img/img-10.png" alt="Image 5" />

                  <img src="assets/img/img-11.jpg" alt="Image 1" />
                  <img src="assets/img/img-7.png" alt="Image 3" />
                  <img src="assets/img/img-8.png" alt="Image 2" />
                  <img src="assets/img/img-9.png" alt="Image 4" />
                  <img src="assets/img/img-10.png" alt="Image 5" />
                  <img src="assets/img/img-12.jpg" alt="Image 1" />
                  <img src="assets/img/img-13.jpg" alt="Image 3" />
                  <img src="assets/img/img-14.jpg" alt="Image 2" />
                  <img src="assets/img/img-15.jpg" alt="Image 4" />
                  <img src="assets/img/img-10.png" alt="Image 5" />

                  <img src="assets/img/img-11.jpg" alt="Image 1" />
                  <img src="assets/img/img-7.png" alt="Image 3" />
                  <img src="assets/img/img-8.png" alt="Image 2" />
                  <img src="assets/img/img-9.png" alt="Image 4" />
                  <img src="assets/img/img-10.png" alt="Image 5" />
                  <img src="assets/img/img-12.jpg" alt="Image 1" />
                  <img src="assets/img/img-13.jpg" alt="Image 3" />
                  <img src="assets/img/img-14.jpg" alt="Image 2" />
                  <img src="assets/img/img-15.jpg" alt="Image 4" />
                  <img src="assets/img/img-10.png" alt="Image 5" />

                </div>
              </div>

              <div class="row hide-on-desktop">
                <a
                  href="#!"
                  class="theme-btn padding-style wow fadeInUp bg-black bottom-new"
                  data-wow-delay=".7s"
                >
                  Discover our places
                </a>
              </div>
            </section>
          </div>
          {/* <div className="section-back" style={{opacity:0}}></div> */}
        </section>
        <section class="section stickyk">
          <section class="about-section  section-padding vertical-scrolling">
            <div class="container">
              <div class="about-wrapper-3 style-2">
                <div class="row">
                  <div class="">
                    <div class="about-content text-center">
                      <div class="section-title about-heading about-mob">
                        <h2 class="splt-txt wow" data-splitting>
                          How it works
                        </h2>
                      </div>
                      <p
                        class="mt-3 about-p mt-md-0 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        Swap your home, earn credits, and explore the world like
                        never before!
                      </p>

                      <div class="row-grid mt-1 hide-on-mobile">
                        <div class="">
                          <div class="feature-card card1">
                            <div class="feature-content">
                              <div class="feature-details">
                                <div class="feature-number">01</div>
                                <h3 class="feature-title">Add your place</h3>
                              </div>

                              <div class="feature-image">
                                <img
                                  src="assets/img/add-place.png"
                                  class="w-100"
                                  alt="Feature Image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          <div class="feature-card">
                            <div class="feature-content">
                              <div class="feature-details">
                                <div class="feature-number">02</div>
                                <h3 class="feature-title">
                                  Earn Credits by hosting
                                </h3>
                                <p class="feature-description">
                                  Earn credits every time someone
                                  <br /> stays at your place
                                </p>
                              </div>

                              <div class="feature-image">
                                <img
                                  src="assets/img/earn-credit.png"
                                  class="w-100"
                                  alt="Feature Image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          <div class="feature-card image-need">
                            <div class="feature-content">
                              <div class="feature-details">
                                <div class="feature-number">03</div>
                                <h3 class="feature-title">Use Credits</h3>
                              </div>
                            </div>
                            <div class="feature-image-img">
                              <img
                                src="assets/img/use-credit.png"
                                class=""
                                alt="Feature Image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div class="row hide-on-desktop"> */}
                      {screenWidth <= 990 && (
                        <>
                          <style>{`
    .swiper-pagination-bullets {
      margin-top: 20px !important;
    }
    .swiper-pagination-bullet {
      width: 12px !important;
      height: 12px !important;
      background: #000 !important;
      opacity: 0.5 !important;
      transition: all 0.3s ease !important;
    }
    .swiper-pagination-bullet-active {
      opacity: 1 !important;
      background: #000 !important;
      transform: scale(1.2) !important;
    }
  `}</style>

                          <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[Pagination, Autoplay]}
                            spaceBetween={10}
                            slidesPerView={1.1} // Show 1 full + 10% of next
                            loop={true}
                            centeredSlides={true}
                            initialSlide={0}
                            autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                            }}
                            pagination={{
                              clickable: true,
                            }}
                            breakpoints={{
                              640: {
                                slidesPerView: 1.1,
                              },
                              768: {
                                slidesPerView: 2.1,
                              },
                              1024: {
                                slidesPerView: 3.1,
                              },
                            }}
                          >
                            <SwiperSlide>
                              <div className="col-lg-12">
                                <div className="feature-card homepage card1">
                                  <div className="feature-content">
                                    <div className="feature-details">
                                      <div className="feature-number">01</div>
                                      <h3 className="feature-title">
                                        Add your place
                                      </h3>
                                    </div>

                                    <div className="feature-image">
                                      <img
                                        src="/kaza/assets/img/add-place.png"
                                        className="w-100"
                                        alt="Feature Image"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                              <div className="col-lg-12">
                                <div className="feature-card homepage">
                                  <div className="feature-content">
                                    <div className="feature-details">
                                      <div className="feature-number">02</div>
                                      <h3 className="feature-title">
                                        Earn Credits by hosting
                                      </h3>
                                      <p className="feature-description">
                                        Earn credits every time someone
                                        <br /> stays at your place
                                      </p>
                                    </div>

                                    <div className="feature-image">
                                      <img
                                        src="/kaza/assets/img/earn-credit.png"
                                        className="w-100"
                                        alt="Feature Image"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="">
                                <div className="feature-card homepage image-need">
                                  <div className="feature-content">
                                    <div className="feature-details">
                                      <div className="feature-number">03</div>
                                      <h3 className="feature-title">
                                        Use Credits
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="feature-image-img">
                                    <img
                                      src="/kaza/assets/img/use-credit.png"
                                      className=""
                                      alt="Feature Image"
                                    />
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>


                          </Swiper>
                        </>
                      )}

                      {/* </div> */}

                      <div
                        class="about-button wow fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <a
                          href="https://app.kazaswap.co/register"
                          class="theme-btn padding-style register-btn"
                        >
                          Register your place
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="section-back"></div>
        </section>
        <section
          class="section stickyk"

          style={{
            background: 'url(/kaza/assets/img/earning-credit-bg.png)',

            backgroundSize: 'cover',
            borderRadius: '30px',
          }}


        >
          <section class="service-section-2 services-new vertical-scrolling">
            {" "}
            <div class="container">
              <div class="">
                <div class="service-new-section">
                  <div class="service-box-items style-2">
                    <div class="content">
                      <h4 class="splt-txt wow" data-splitting>
                        <a href="#!">
                          Earning credits by
                          <br />
                          Hosting
                        </a>
                      </h4>
                      <p>
                        For every night a guest stays at <br />
                        your place, receive{" "}
                        <span class="credt-bold"> 1 credit!</span>
                      </p>
                      <img
                        src="/kaza/assets/img/earning-host-icon.png"
                        class="hide-on-mobile"
                      />
                      <div class="row hide-on-desktop">
                        <img src="/kaza/assets/img/earn-mob.png" />

                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center gap-3 align-items-center nocost mobile">
                  <a href="" class="no-member">
                    <img src="/kaza/assets/img/membership-vip 1.png" /> No membership
                    fees
                  </a>
                  <a href="" class="no-member hiden-cost">
                    <img src="/kaza/assets/img/no-hidden-cost.png" width="29px" />
                    No hidden costs
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="section-back"></div>
        </section>
        <section class="section stickyk">
          <div class="section-app-dash">
            <div class="container">
              <div
                class="cta-video-wrapper-2 bg-cover application"
                style={{
                  backgroundImage: "url('/kaza/assets/img/app-sec-bg.png')",
                  backgroundSize: "cover",
                }}
              >
                <div class="app-section-grid">
                  <div class="">
                    <div class="logo-black">
                      <img src="/kaza/assets/img/logo-black.png" />
                    </div>
                    <h2>
                      Make it easier, <br />
                      download our <br />
                      mobile App
                    </h2>

                    <div class="btn-white mob-new">
                      <a href="#!" class="white">
                        <p>Coming Soon</p>
                      </a>
                      <a
                        href="#!"
                        class="d-flex align-items-center white opacity-low"
                      >
                        <img
                          src="/kaza/assets/img/apple-icon.png"
                          width="29px"
                          alt="App Store"
                        />
                        <img
                          src="/kaza/assets/img/android-icon.png"
                          width="26px"
                          alt="App Store"
                        />
                        <p>Install App</p>
                      </a>
                    </div>
                  </div>
                  <div class="app-img-sec">
                    <div class="app-img-2 homescreen">
                      <img
                        src="/kaza/assets/img/app-img.png"
                        class="hide-on-mobile"
                      />
                      <div ref={movingRef} class="row hide-on-desktop moving-image">
                        <img src="/kaza/assets/img/new-mob-img.png" class="app-mob" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-back"></div>
        </section>
        <section class="section stickyk faq-sec">
          <section class="faq-section fix vertical-scrolling">
            <div class="container">
              <div class="faq-content text-center">
                <div class="section-title">
                  <h2 class="splt-txt wow" data-splitting>
                    Any questions?
                  </h2>
                </div>
                <p class="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Learn more about our community.
                </p>
              </div>
              <div class="faq-wrapper">
                <div class="row justify-content-center">
                  <div class="col-lg-6 mt-5 mt-lg-0">
                    <div class="faq-accordion">
                      <div class="accordion" id="accordion">
                        <div
                          class="accordion-item mb-4 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <h5 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq1"
                              aria-expanded="false"
                              aria-controls="faq1"
                            >
                              What is the KazaSwap community?
                            </button>
                          </h5>
                          <div
                            id="faq1"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div class="accordion-body">
                              KazaSwap is a home exchange platform that allows
                              members to swap homes with others using credits,
                              offering a flexible and cost-effective way to
                              travel.
                            </div>
                          </div>
                        </div>
                        <div
                          class="accordion-item mb-4 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <h5 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq2"
                              aria-expanded="false"
                              aria-controls="faq2"
                            >
                              How to earn credits?
                            </button>
                          </h5>
                          <div
                            id="faq2"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div class="accordion-body">
                              Credits can be earned by hosting people at your
                              place with our app, or with the Reward Program
                            </div>
                          </div>
                        </div>
                        <div
                          class="accordion-item mb-4 wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <h5 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq3"
                              aria-expanded="false"
                              aria-controls="faq3"
                            >
                              How does KazaSwap work?
                            </button>
                          </h5>
                          <div
                            id="faq3"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div class="accordion-body">
                              Upon registration, members receive 5 credits,
                              equivalent to 5 nights stay in another city.To
                              earn more credits, members can host other
                              traveler's in their homes or participate in the
                              reward program. There are no mandatory
                              memberships, and credits do not expire.
                            </div>
                          </div>
                        </div>
                        <div
                          class="accordion-item wow  mb-4  fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <h5 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq4"
                              aria-expanded="false"
                              aria-controls="faq4"
                            >
                              How do I list my home?
                            </button>
                          </h5>
                          <div
                            id="faq4"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div class="accordion-body">
                              Create an account and provide detailed information
                              about your property, including photos, amenities,
                              and availability. Once your home is listed, it
                              becomes part of the Kaza Swap community for others
                              to request a stay.
                            </div>
                          </div>
                        </div>
                        <div
                          class="accordion-item wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <h5 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq5"
                              aria-expanded="false"
                              aria-controls="faq5"
                            >
                              How do I book a stay at someone else’s home?
                            </button>
                          </h5>
                          <div
                            id="faq5"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div class="accordion-body">
                              Browse available properties and send a request to
                              the host. Once the host accepts, the swap is
                              confirmed, and the service fee is applied.
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
          <div className="section-back"></div>
        </section>
        <section class="section bottom-art stickyk">
          <div class="last-section vertical-scrolling">
            <div class="section-padding pb-0 insta-section">
              <div class="container">
                <div
                  class="cta-video-wrapper bg-cover1 insta-img"
                  style={{
                    backgroundImage: "url('/kaza/assets/img/insta-bg.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div class="row align-items-center scrollers-cont">
                    <div class="col-lg-6">
                      <h2 className="mobnot">
                        Follow us on <br />
                        <img src="/kaza/assets/img/instagram.png" width="50px" />{" "}
                        Instagram,
                        <br />
                        and share your <br />
                        journey!
                      </h2>

                      <h2 className="mob">
                      Follow us on <br />
                        <img src="/kaza/assets/img/instagram.png" width="50px" />{" "}
                        Instagram
                      </h2>

                      <div class="btn-white justify-content-start insta-follow">
                        <a
                          href="https://www.instagram.com/kazaswap.app/"
                          class="white yellow"
                        >
                          <p>Follow Us</p>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="row hide-on-desktop">
                        <div class="marquee">
                          <div class="marquee-inner2">
                            <img src="assets/img/insta-pic.png" alt="Image 1" />
                            <img src="assets/img/insta-1.png" alt="Image 3" />
                            <img src="assets/img/insta-2.png" alt="Image 2" />
                            <img src="assets/img/insta-3.png" alt="Image 4" />
                            <img src="assets/img/insta-5.png" alt="Image 5" />
                          </div>
                        </div>

                        <div class="marquee-wrapper">
                          <div class="marquee-inner3">
                            <img src="assets/img/insta-1.png" alt="Image 5" />
                            <img src="assets/img/insta-2.png" alt="Image 1" />
                            <img src="assets/img/insta-3.png" alt="Image 3" />
                            <img src="assets/img/insta-5.png" alt="Image 2" />
                            <img src="assets/img/insta-pic.png" alt="Image 4" />
                            <img src="assets/img/insta-3.png" alt="Image 5" />
                          </div>
                        </div>

                      </div>
                      <div class="hide-on-mobile">
                        <div class="main-container">
                          <div class="scroller" data-speed="slow">
                            <ul class="tag-list scroller__inner">
                              <li>
                                <img
                                  src="assets/img/insta-1.png"
                                  alt="Image 1"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/img/insta-2.png"
                                  alt="Image 1"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/img/insta-3.png"
                                  alt="Image 1"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/img/insta-4.png"
                                  alt="Image 1"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/img/insta-5.png"
                                  alt="Image 1"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/img/insta-1.png"
                                  alt="Image 1"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/img/insta-pic.png"
                                  alt="Image 1"
                                />
                              </li>
                            </ul>
                          </div>
                          <div
                            class="scroller"
                            data-speed="slow"
                            data-direction="up"
                          >
                            <ul class="tag-list scroller__inner">
                              <li>
                                <img
                                  src="assets/img/insta-5.png"
                                  alt="Image 1"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/img/insta-3.png"
                                  alt="Image 1"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/img/insta-2.png"
                                  alt="Image 1"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/img/insta-1.png"
                                  alt="Image 1"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/img/insta-4.png"
                                  alt="Image 1"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/img/insta-pic.png"
                                  alt="Image 1"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/img/insta-1.png"
                                  alt="Image 1"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div class="line-bg">
                  <img src="/kaza/assets/img/line-footer.png" />
                </div>
                <div className="site-footer">
                  <div className="footer-links">
                    <img
                      src="/kaza/assets/img/image-footer-logo.png"
                      alt="KazaSwap logo"
                      className="footer-logo"
                    />
                    <div className="d-flex justify-content-around gap-100 footer-last-sec3">
                      <Link to="/confidential" className="footer-link">
                        Confidentiality
                      </Link>
                      <Link to="/terms" className="footer-link">
                        Terms of Use
                      </Link>
                    </div>
                    <div className="footer-contact footer-last-sec2">
                      <a
                        href="mailto:community@kazaswap.co"
                        className="contact-email"
                      >
                        community@kazaswap.co
                      </a>
                    </div>
                    <div className="footer-contact footer-last-sec row hide-on-desktop">
                      <p>© 2025 Kaza Swap LLC. All rights reserved.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-back"></div>
        </section>
      </main>
    </>
  );
};

export default Home;
