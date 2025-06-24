import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Confidentials = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <section className="about-section fix mw-100 section-padding pricing-padding mb-0">
        <div className="container-fluid">
          <div className="about-wrapper-3 style-2">
            <div className="row">
              <div className="col-lg-12 mt-5 mt-lg-0">
                <div className="about-content ">
                  <div className="section-title">
                    <h2 className="splt-txt wow" data-splitting>
                      Confidentiality
                    </h2>
                  </div>
                  <p
                    className="mt-3 about-p mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    KazaSwap Confidentiality Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section mw-100 fix section-padding pricing-padding pt-5">
        <div className="container">
          <div className="about-wrapper-3 style-2">
            <div className="row">
              <div className="col-lg-12 mt-5 mt-lg-0">
                <div className="confidenti-head">
                  <h4>KazaSwap Confidentiality Policy</h4>

                  <div className="confidenti-text">
                    <p>
                      <span>Effective Date: 09.04.2025</span>
                    </p>

                    <p>
                      At <span>KazaSwap</span>, the trust and privacy of our
                      community members are of the utmost importance. This
                      Confidentiality Policy outlines how confidential
                      information is handled within our platform and sets
                      expectations for both KazaSwap and its members.
                    </p>
                    <p className="mb-0">
                      <span> 1. Member Confidentiality Obligations </span>
                    </p>
                    <p className="mb-0">
                      By using the KazaSwap platform, you agree to:
                    </p>
                    <ul>
                      <li>
                        Keep all personal, private, and identifying information
                        obtained through the platform confidential.
                      </li>
                      <li>
                        Not share or misuse information such as full names, home
                        addresses, contact details, schedules, or any private
                        details related to another member.
                      </li>
                      <li>
                        Respect the privacy of members before, during, and after
                        a swap.
                      </li>
                      <li>
                        Avoid taking photos, videos, or recordings inside
                        another member’s home without their express permission.
                      </li>
                      <li>
                        Not access, use, or interfere with any personal
                        documents, mail, or digital information found in a
                        member’s home.
                      </li>
                    </ul>
                    <p className="mb-0">
                      <span>2. KazaSwap’s Commitment to Confidentiality </span>
                    </p>
                    <p className="mb-0">KazaSwap is committed to:</p>
                    <ul>
                      <li>
                        Protecting the personal data of all users in compliance
                        with applicable data protection laws (e.g., GDPR).
                      </li>
                      <li>
                        Only sharing necessary personal information (such as
                        contact details and address) after a swap is confirmed.
                      </li>
                      <li>
                        Never selling or distributing user data to third parties
                        for commercial purposes.
                      </li>
                    </ul>
                    <p className="mb-0">
                      <span> 3. Communication and Messaging</span>
                    </p>
                    <p>
                      All communication between members should occur through the
                      KazaSwap platform. This ensures a secure environment and
                      allows KazaSwap to monitor and assist in case of a
                      dispute.
                    </p>
                    <p className="mb-0">
                      <span> 4. Breach of Confidentiality </span>
                    </p>
                    <p className="mb-0">
                      {" "}
                      If a member is found to have violated another member’s
                      confidentiality:
                    </p>
                    <ul>
                      <li>
                        {" "}
                        KazaSwap may suspend or terminate the member’s account.
                      </li>
                      <li>
                        {" "}
                        Legal action may be pursued depending on the severity of
                        the breach.
                      </li>
                    </ul>
                    <p>
                      <span> 5. Questions or Concerns </span>
                    </p>
                    <p className="mb-0">
                      {" "}
                      For any concerns regarding confidentiality, please contact
                      us at: <a href="mailto:community@kazaswap.com">community@kazaswap.com</a>
                    </p>
                    <p>
                      {" "}
                      Thank you for respecting the trust and privacy that make
                      the KazaSwap community safe and welcoming for all.
                    </p>
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

export default Confidentials;
