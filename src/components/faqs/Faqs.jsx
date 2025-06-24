import React from "react";

const Faqs = () => {
  return (
    <>
      <section className="about-section pb-0 fix section-padding  mw-100 pricing-padding">
        <div className="container-fluid pb-0">
          <div className="about-wrapper-3 style-2">
            <div className="row justify-content-end align-items-center position-relative">
              <div className="col-lg-8 mt-5 mt-lg-0">
                <div className="about-content ">
                  <div className="section-title">
                    <h2 className="splt-txt wow" data-splitting>
                      KazaSwap FAQ
                    </h2>
                  </div>
                  <p
                    className="mt-3 about-p margin-75 mt-md-0 wow fadeInUp faq-des faq-para"
                    data-wow-delay=".5s"
                  >
                    Find here all your answers for your questions about us!
                  </p>
                  <div className="input-serach">
                    <img src="assets/img/search.png" width="29px" />
                    <input
                      type="text"
                      placeholder="How can i earn credits?"
                      className="search-input"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-5 mt-lg-0">
                <div className="faq-img text-center">
                  <img src="assets/img/faq-girl.png" width="373px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mobnot">

        <section className="faq-section section-padding mw-100 section-bg fix bg-white first-sect">
          <div className="container">
            <div className="faq-wrapper">
              <div className="row">
                <div className="col-lg-10 mt-5 mt-lg-0">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion">
                      <div
                        className="accordion-item mb-4 wow fadeInUp w-100"
                        data-wow-delay=".3s"
                      >
                        <h5 className="accordion-header">
                          <div className="accordion-button1" type="button">
                            <span>
                              <img
                                src="assets/img/info-1.png"
                                alt=""
                                width="43px"
                              />
                            </span>{" "}
                            General Information
                          </div>
                        </h5>
                        <div
                          id="faq1"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <h4>1. What is KazaSwap?</h4>
                            KazaSwap is a home exchange platform that allows
                            members to swap homes with others using credits,
                            offering a flexible and cost-effective way to travel.
                          </div>
                          <div className="accordion-body">
                            <h4>2. How does KazaSwap work?</h4>
                            Upon registration, members receive 5 credits,
                            equivalent to 5 nights stay in another city.To earn
                            more credits, members can host other traveler's in
                            their homes or participate in the reward program.
                            There are no mandatory memberships, and credits do not
                            expire
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
        <section className="faq-section section-padding fix mw-100 bg-yellow">
          <div className="container">
            <div className="faq-wrapper">
              <div className="row">
                <div className="col-lg-10 mt-5 mt-lg-0">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion1">
                      <div
                        className="accordion-item mb-4 wow fadeInUp w-100"
                        data-wow-delay=".5s"
                      >
                        <h5 className="accordion-header">
                          <div
                            className="accordion-button1 bg-none"
                            type="button"
                          >
                            <span>
                              <img
                                src="assets/img/membership-vip-1.png"
                                alt=""
                                width="52px"
                              />
                            </span>
                            Using the Platform
                          </div>
                        </h5>
                        <div
                          id="faq2"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body bg-none">
                            <h4>3. Is there a membership fee?</h4>
                            No, KazaSwap does not charge a membership fee. The
                            platform operates on a pay-per-use model, with only a
                            service fee applied when a swap is confirmed.
                          </div>
                          <div className="accordion-body bg-none">
                            <h4>4. How much is the service fee?</h4>
                            The service fee is 150€ per trip, regardless of the
                            stay's duration or location.
                          </div>
                          <div className="accordion-body bg-none">
                            <h4>5. Can I purchase additional credits?</h4>
                            Yes, but only in specific cases. While Kazaswap is
                            designed to encourage hosting and sharing, members who
                            are short on credits and unable to host at the moment
                            may be eligible to purchase a limited number of top-up
                            credits to complete a planned swap. This option is
                            offered selectively to maintain community balance.
                          </div>
                          <div className="accordion-body bg-none">
                            <h4>
                              6. Can I lose my credits if I don’t use them
                              quickly?
                            </h4>
                            No, credits do not expire and can be accumulated
                            indefinitely.
                          </div>
                          <div className="accordion-body bg-none">
                            <h4>7. Does KazaSwap charge a cleaning fee?</h4>
                            No, there is no cleaning fee. Members are expected to
                            maintain their homes and leave them in good condition
                            for the next user.
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
        <section className="faq-section section-padding mw-100 section-bg fix bg-white">
          <div className="container">
            <div className="faq-wrapper">
              <div className="row">
                <div className="col-lg-10 mt-5 mt-lg-0">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion">
                      <div
                        className="accordion-item mb-4 wow fadeInUp w-100"
                        data-wow-delay=".3s"
                      >
                        <h5 className="accordion-header">
                          <div className="accordion-button1" type="button">
                            <span>
                              {" "}
                              <img src="assets/img/hosting.png" width="51px" />
                            </span>{" "}
                            Hosting and Staying
                          </div>
                        </h5>
                        <div
                          id="faq3"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <h4>8. How do I list my home?</h4>
                            Create an account and provide detailed information
                            about your property, including photos, amenities, and
                            availability. Once your home is listed, it becomes
                            part of the Kaza Swap community for others to request
                            a stay.
                          </div>
                          <div className="accordion-body">
                            <h4>
                              9. Do I have to be present when someone stays at my
                              home?
                            </h4>
                            No, hosting can be done remotely if your home is
                            prepared for guest arrivals. Ensure you have
                            arrangements for access (e.g., a lockbox or trusted
                            neighbor).
                          </div>
                          <div className="accordion-body">
                            <h4>
                              10. Can I host someone without traveling myself?
                            </h4>
                            Yes! Hosting earns you credits that you can use later
                            for your travels.
                          </div>
                          <div className="accordion-body">
                            <h4>
                              11. What happens if there is damage to my property?
                            </h4>
                            KazaSwap recommends establishing clear expectations
                            with your guests. However, we also encourage members
                            to maintain homeowner’s or renter’s insurance that
                            covers guest stays.
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
        <section className="faq-section section-padding mw-100 fix bg-yellow">
          <div className="container">
            <div className="faq-wrapper">
              <div className="row">
                <div className="col-lg-10 mt-5 mt-lg-0">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion1">
                      <div
                        className="accordion-item mb-4 wow fadeInUp w-100"
                        data-wow-delay=".5s"
                      >
                        <h5 className="accordion-header">
                          <div className="accordion-button1 bg-none">
                            <span>
                              <img src="assets/img/booking.png" width="44px" />{" "}
                            </span>{" "}
                            Bookings and Swaps
                          </div>
                        </h5>
                        <div
                          id="faq4"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body bg-none">
                            <h4>
                              12. How do I book a stay at someone else’s home?
                            </h4>
                            Browse available properties and send a request to the
                            host. Once the host accepts, the swap is confirmed,
                            and the service fee is applied.
                          </div>
                          <div className="accordion-body bg-none">
                            <h4>13. Can I cancel a swap?</h4>
                            Yes, but cancellations disrupt the community. If a
                            cancellation occurs, Kazaswap will work with both
                            parties to resolve the situation. If you cancel, your
                            credits will be returned within a few days.
                          </div>
                          <div className="accordion-body bg-none">
                            <h4>
                              14. What if I don’t have enough credits for a swap?
                            </h4>
                            You’ll need to host more travelers to earn additional
                            credits, wait until your home is requested — or you
                            can also top up your credits directly.
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
        <section className="faq-section section-padding mw-100 section-bg fix bg-white">
          <div className="container">
            <div className="faq-wrapper">
              <div className="row">
                <div className="col-lg-10 mt-5 mt-lg-0">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion">
                      <div
                        className="accordion-item mb-4 wow fadeInUp w-100"
                        data-wow-delay=".3s"
                      >
                        <h5 className="accordion-header">
                          <div className="accordion-button1" type="button">
                            <span>
                              {" "}
                              <img src="assets/img/accounts.png" width="67px" />
                            </span>{" "}
                            Account and Community Guidelines
                          </div>
                        </h5>
                        <div
                          id="faq5"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <h4>15.  Can I join KazaSwap if I rent my home?</h4>
                            Yes, as long as your lease agreement allows subletting
                            or home exchanges. Always check with your landlord if
                            you're unsure.
                          </div>
                          <div className="accordion-body">
                            <h4>
                              16. Are there any restrictions on the type of homes
                              I can list?
                            </h4>
                            KazaSwap welcomes all types of homes, from apartments
                            to villas. The key is to provide accurate descriptions
                            and photos of your place.
                          </div>
                          <div className="accordion-body">
                            <h4>
                              17. How does KazaSwap ensure the quality of
                              listings?
                            </h4>
                            We rely on community feedback and reviews. Members can
                            rate their experiences, ensuring transparency and
                            quality.
                          </div>
                          <div className="accordion-body">
                            <h4>
                              18. How does KazaSwap handle disputes between
                              members?
                            </h4>
                            Our Mediation Team is available to assist with
                            disputes. We encourage open communication between
                            members to address any issues directly.
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
        <section className="faq-section section-padding mw-100 fix bg-yellow">
          <div className="container">
            <div className="faq-wrapper">
              <div className="row">
                <div className="col-lg-10 mt-5 mt-lg-0">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion1">
                      <div
                        className="accordion-item mb-4 wow fadeInUp w-100"
                        data-wow-delay=".5s"
                      >
                        <h5 className="accordion-header">
                          <div
                            className="accordion-button1 bg-none"
                            type="button"
                          >
                            <span>
                              <img src="assets/img/security.png" width="44px" />{" "}
                            </span>{" "}
                            Security and Trust
                          </div>
                        </h5>
                        <div
                          id="faq6"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body bg-none">
                            <h4>19. Is KazaSwap safe?</h4>
                            Absolutely! Kazaswap is built on a community of trust.
                            Profiles, reviews, and open communication help ensure
                            safe and reliable exchanges.
                          </div>
                          <div className="accordion-body bg-none">
                            <h4>
                              20. What personal information is shared with other
                              members?
                            </h4>
                            Your profile includes basic details such as your first
                            name and home listing information. Contact information
                            is shared only when a swap is confirmed.
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
        <section className="faq-section section-padding mw-100 section-bg fix bg-white">
          <div className="container">
            <div className="faq-wrapper">
              <div className="row">
                <div className="col-lg-10 mt-5 mt-lg-0">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion">
                      <div
                        className="accordion-item mb-4 wow fadeInUp w-100"
                        data-wow-delay=".3s"
                      >
                        <h5 className="accordion-header">
                          <div className="accordion-button1" type="button">
                            <span>
                              {" "}
                              <img src="assets/img/reward.png" width="44px" />
                            </span>{" "}
                            Reward Program
                          </div>
                        </h5>
                        <div
                          id="faq5"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <div className="d-flex align-items-center gap-61">
                              <img src="assets/img/first-adge.png" width="98px" />
                              <div className="">
                                <h4>First Badge: "Globetrotter in Training"</h4>
                                <b> How to unlock:</b>Create a completed profile
                                and host your first guest.
                                <br />
                                <b>Reward:</b> Earn 3 bonus credits for hosting
                                your first guest.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-body">
                            <div className="d-flex align-items-center gap-61">
                              <img src="assets/img/sec-badge.png" width="98px" />
                              <div className="">
                                <h4>Second Badge: "Explorer Host"</h4>
                                <b> How to unlock:</b> Host 5 guests and receive 3
                                positive reviews.
                                <br />
                                <b>Reward:</b> Earn 5 bonus credits and a special
                                profile highlight as an "Explorer Host."
                              </div>
                            </div>
                          </div>
                          <div className="accordion-body">
                            <div className="d-flex align-items-center gap-61">
                              <img
                                src="assets/img/third-badge.png"
                                width="98px"
                              />
                              <div className="">
                                <h4>Third Badge: "Master Host Nomad"</h4>
                                <b> How to unlock:</b> Host 10+ guests with
                                consistent positive feedback.
                                <br />
                                <b>Reward:</b> Access exclusive Kazaswap perks,
                                such as priority listing in search results or
                                discounted service fees.
                              </div>
                            </div>
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

      </div>

      <div className="mob">
        {/* 1. General Information */}
        <section className="faq-section section-padding mw-100 section-bg fix bg-white first-sect">
          <div className="container">
            <div className="faq-accordion">
              <div className="accordion" id="accordionMobile1">
                <div className="accordion-item mb-4">
                  <h2 className="accordion-header" id="headingMobile1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqMobile1"
                      aria-expanded="false"
                      aria-controls="faqMobile1"
                    >
                      <img src="assets/img/info-1.png" width="43" className="me-2" alt="" />
                      General Information
                    </button>
                  </h2>
                  <div
                    id="faqMobile1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingMobile1"
                    data-bs-parent="#accordionMobile1"
                  >
                    <div className="accordion-body">
                      <h4>1. What is KazaSwap?</h4>
                      KazaSwap is a home exchange platform that allows members to swap homes with others using credits, offering a flexible and cost-effective way to travel.
                    </div>
                    <div className="accordion-body">
                      <h4>2. How does KazaSwap work?</h4>
                      Upon registration, members receive 5 credits, equivalent to 5 nights stay in another city. To earn more credits, members can host other travelers in their homes or participate in the reward program. There are no mandatory memberships, and credits do not expire.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Using the Platform */}
        <section className="faq-section section-padding fix mw-100 bg-yellow">
          <div className="container">
            <div className="faq-accordion">
              <div className="accordion" id="accordionMobile2">
                <div className="accordion-item mb-4">
                  <h2 className="accordion-header" id="headingMobile2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqMobile2"
                      aria-expanded="false"
                      aria-controls="faqMobile2"
                    >
                      <img src="assets/img/membership-vip-1.png" width="52" className="me-2" alt="" />
                      Using the Platform
                    </button>
                  </h2>
                  <div
                    id="faqMobile2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingMobile2"
                    data-bs-parent="#accordionMobile2"
                  >
                    <div className="accordion-body">
                      <h4>3. Is there a membership fee?</h4>
                      No, KazaSwap does not charge a membership fee. The platform operates on a pay-per-use model, with only a service fee applied when a swap is confirmed.
                    </div>
                    <div className="accordion-body">
                      <h4>4. How much is the service fee?</h4>
                      The service fee is €150 per trip, regardless of the stay’s duration or location.
                    </div>
                    <div className="accordion-body">
                      <h4>5. Can I purchase additional credits?</h4>
                      Yes, but only in specific cases. While KazaSwap is designed to encourage hosting and sharing, members who are short on credits and unable to host at the moment may be eligible to purchase a limited number of top-up credits to complete a planned swap. This option is offered selectively to maintain community balance.
                    </div>
                    <div className="accordion-body">
                      <h4>6. Can I lose my credits if I don’t use them quickly?</h4>
                      No, credits do not expire and can be accumulated indefinitely.
                    </div>
                    <div className="accordion-body">
                      <h4>7. Does KazaSwap charge a cleaning fee?</h4>
                      No, there is no cleaning fee. Members are expected to maintain their homes and leave them in good condition for the next user.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Hosting and Staying */}
        <section className="faq-section section-padding mw-100 section-bg fix bg-white">
          <div className="container">
            <div className="faq-accordion">
              <div className="accordion" id="accordionMobile3">
                <div className="accordion-item mb-4">
                  <h2 className="accordion-header" id="headingMobile3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqMobile3"
                      aria-expanded="false"
                      aria-controls="faqMobile3"
                    >
                      <img src="assets/img/hosting.png" width="51" className="me-2" alt="" />
                      Hosting and Staying
                    </button>
                  </h2>
                  <div
                    id="faqMobile3"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingMobile3"
                    data-bs-parent="#accordionMobile3"
                  >
                    <div className="accordion-body">
                      <h4>8. How do I list my home?</h4>
                      Create an account and provide detailed information about your property, including photos, amenities, and availability. Once your home is listed, it becomes part of the KazaSwap community for others to request a stay.
                    </div>
                    <div className="accordion-body">
                      <h4>9. Do I have to be present when someone stays at my home?</h4>
                      No, hosting can be done remotely if your home is prepared for guest arrivals. Ensure you have arrangements for access (e.g., a lockbox or trusted neighbor).
                    </div>
                    <div className="accordion-body">
                      <h4>10. Can I host someone without traveling myself?</h4>
                      Yes! Hosting earns you credits that you can use later for your travels.
                    </div>
                    <div className="accordion-body">
                      <h4>11. What happens if there is damage to my property?</h4>
                      KazaSwap recommends establishing clear expectations with your guests. However, we also encourage members to maintain homeowner’s or renter’s insurance that covers guest stays.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Bookings and Swaps */}
        <section className="faq-section section-padding mw-100 fix bg-yellow">
          <div className="container">
            <div className="faq-accordion">
              <div className="accordion" id="accordionMobile4">
                <div className="accordion-item mb-4">
                  <h2 className="accordion-header" id="headingMobile4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqMobile4"
                      aria-expanded="false"
                      aria-controls="faqMobile4"
                    >
                      <img src="assets/img/booking.png" width="44" className="me-2" alt="" />
                      Bookings and Swaps
                    </button>
                  </h2>
                  <div
                    id="faqMobile4"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingMobile4"
                    data-bs-parent="#accordionMobile4"
                  >
                    <div className="accordion-body">
                      <h4>12. How do I book a stay at someone else’s home?</h4>
                      Browse available properties and send a request to the host. Once the host accepts, the swap is confirmed, and the service fee is applied.
                    </div>
                    <div className="accordion-body">
                      <h4>13. Can I cancel a swap?</h4>
                      Yes, but cancellations disrupt the community. If a cancellation occurs, KazaSwap will work with both parties to resolve the situation. If you cancel, your credits will be returned within a few days.
                    </div>
                    <div className="accordion-body">
                      <h4>14. What if I don’t have enough credits for a swap?</h4>
                      You’ll need to host more travelers to earn additional credits, wait until your home is requested—or you can also top up your credits directly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Account and Community Guidelines */}
        <section className="faq-section section-padding mw-100 section-bg fix bg-white">
          <div className="container">
            <div className="faq-accordion">
              <div className="accordion" id="accordionMobile5">
                <div className="accordion-item mb-4">
                  <h2 className="accordion-header" id="headingMobile5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqMobile5"
                      aria-expanded="false"
                      aria-controls="faqMobile5"
                    >
                      <img src="assets/img/accounts.png" width="67" className="me-2" alt="" />
                      Account and Community Guidelines
                    </button>
                  </h2>
                  <div
                    id="faqMobile5"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingMobile5"
                    data-bs-parent="#accordionMobile5"
                  >
                    <div className="accordion-body">
                      <h4>15. Can I join KazaSwap if I rent my home?</h4>
                      Yes, as long as your lease agreement allows subletting or home exchanges. Always check with your landlord if you're unsure.
                    </div>
                    <div className="accordion-body">
                      <h4>16. Are there any restrictions on the type of homes I can list?</h4>
                      KazaSwap welcomes all types of homes, from apartments to villas. The key is to provide accurate descriptions and photos of your place.
                    </div>
                    <div className="accordion-body">
                      <h4>17. How does KazaSwap ensure the quality of listings?</h4>
                      We rely on community feedback and reviews. Members can rate their experiences, ensuring transparency and quality.
                    </div>
                    <div className="accordion-body">
                      <h4>18. How does KazaSwap handle disputes between members?</h4>
                      Our Mediation Team is available to assist with disputes. We encourage open communication between members to address any issues directly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Security and Trust */}
        <section className="faq-section section-padding mw-100 fix bg-yellow">
          <div className="container">
            <div className="faq-accordion">
              <div className="accordion" id="accordionMobile6">
                <div className="accordion-item mb-4">
                  <h2 className="accordion-header" id="headingMobile6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqMobile6"
                      aria-expanded="false"
                      aria-controls="faqMobile6"
                    >
                      <img src="assets/img/security.png" width="44" className="me-2" alt="" />
                      Security and Trust
                    </button>
                  </h2>
                  <div
                    id="faqMobile6"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingMobile6"
                    data-bs-parent="#accordionMobile6"
                  >
                    <div className="accordion-body">
                      <h4>19. Is KazaSwap safe?</h4>
                      Absolutely! KazaSwap is built on a community of trust. Profiles, reviews, and open communication help ensure safe and reliable exchanges.
                    </div>
                    <div className="accordion-body">
                      <h4>20. What personal information is shared with other members?</h4>
                      Your profile includes basic details such as your first name and home listing information. Contact information is shared only when a swap is confirmed.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Reward Program */}
        <section className="faq-section section-padding mw-100 section-bg fix bg-white">
          <div className="container">
            <div className="faq-accordion">
              <div className="accordion" id="accordionMobile7">
                <div className="accordion-item mb-4">
                  <h2 className="accordion-header" id="headingMobile7">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqMobile7"
                      aria-expanded="false"
                      aria-controls="faqMobile7"
                    >
                      <img src="assets/img/reward.png" width="44" className="me-2" alt="" />
                      Reward Program
                    </button>
                  </h2>
                  <div
                    id="faqMobile7"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingMobile7"
                    data-bs-parent="#accordionMobile7"
                  >
                    <div className="accordion-body d-flex align-items-center gap-61">
                      <img src="assets/img/first-adge.png" width="50" alt="" />
                      <div>
                        <h4>First Badge: "Globetrotter in Training"</h4>
                        <b>How to unlock:</b> Create a completed profile and host your first guest.<br />
                        <b>Reward:</b> Earn 3 bonus credits for hosting your first guest.
                      </div>
                    </div>
                    <div className="accordion-body d-flex align-items-center gap-61">
                      <img src="assets/img/sec-badge.png" width="50" alt="" />
                      <div>
                        <h4>Second Badge: "Explorer Host"</h4>
                        <b>How to unlock:</b> Host 5 guests and receive 3 positive reviews.<br />
                        <b>Reward:</b> Earn 5 bonus credits and a special profile highlight as an "Explorer Host."
                      </div>
                    </div>
                    <div className="accordion-body d-flex align-items-center gap-61">
                      <img src="assets/img/third-badge.png" width="50" alt="" />
                      <div>
                        <h4>Third Badge: "Master Host Nomad"</h4>
                        <b>How to unlock:</b> Host 10+ guests with consistent positive feedback.<br />
                        <b>Reward:</b> Access exclusive Kazaswap perks, such as priority listing in search results or discounted service fees.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default Faqs;
