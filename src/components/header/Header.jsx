import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const Header = () => {
  const location = useLocation();
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

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      {screenWidth <= 1200 && (
        <>
          <Drawer
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  src="assets/img/image-footer-logo.png"
                  alt="logo"
                  width={120}
                />
                <CloseOutlined
                  onClick={toggleSidebar}
                  style={{ fontSize: 18, cursor: "pointer" }}
                />
              </div>
            }
            placement="right"
            onClose={toggleSidebar}
            open={sidebarOpen}
            closable={false}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link
                  to="/how-it-works"
                  onClick={toggleSidebar}
                  style={{
                    color:
                      location.pathname === "/how-it-works" ? "yellow" : "",
                  }}
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  to="https://app.kazaswap.co/"
                  target="_blank"
                  onClick={toggleSidebar}
                  style={{
                    color: location.pathname === "/properties" ? "yellow" : "",
                  }}
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing-app"
                  onClick={toggleSidebar}
                  style={{
                    color: location.pathname === "/pricing-app" ? "yellow" : "",
                  }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  onClick={toggleSidebar}
                  style={{
                    color: location.pathname === "/faqs" ? "yellow" : "",
                  }}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/app"
                  onClick={toggleSidebar}
                  style={{
                    color: location.pathname === "/app" ? "yellow" : "",
                  }}
                >
                  App
                </Link>
              </li>
              <li>
                <Link to="https://app.kazaswap.co/login" className="search-trigger search-icon d-xs-none">
                  <div className="icon w-embed">
                    <svg
                      className="hover-yellow"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M15 12H5"
                          stroke="black"
                          stroke-width="1.15"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12 15L15 12L12 9"
                          stroke="black"
                          stroke-width="1.15"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M3.95032 16.0002C4.37866 16.8754 4.94818 17.6741 5.63605 18.3642C8.21003 20.9382 12.0811 21.7082 15.4442 20.3152C18.8072 18.9222 21 15.6404 21 12.0003C21 8.3601 18.8072 5.07837 15.4442 3.68534C12.0811 2.29232 8.21003 3.06232 5.63605 5.63631C4.94819 6.32641 4.37867 7.12506 3.95032 8.00021"
                          stroke="black"
                          stroke-width="1.15"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p>Sign in</p>
                </Link>
              </li>
              <li>
                <Link
                  to="https://app.kazaswap.co/register"
                  className="theme-btn padding-style d-xs-none wow visible fadeInUp"
                >
                  <div className="icon w-embed">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M20 20V19.25C20 16.9028 18.0972 15 15.75 15H8.25C5.90279 15 4 16.9028 4 19.25V20"
                          stroke="black"
                          stroke-width="1.15"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <circle
                          cx="12"
                          cy="7"
                          r="4"
                          stroke="black"
                          stroke-width="1.15"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></circle>
                      </g>
                    </svg>
                  </div>
                  <p>Register your place</p>
                </Link>
              </li>
            </ul>
          </Drawer>
        </>
      )}
      <header>
        <div id="header-sticky" className="header-1">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link to="/" className="header-logo-2">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/img/image-footer-logo.png`}
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                  {screenWidth >= 1200 && (
                    <div className="mean__menu-wrapper">
                      <div className="main-menu">
                        <nav
                          id="mobile-menu"
                          style={{
                            display: screenWidth <= 1200 ? "none" : "block",
                          }}
                        >
                          <ul>
                            <li>
                              <Link
                                to="/how-it-works"
                                style={{
                                  color:
                                    location.pathname === "/how-it-works"
                                      ? "yellow"
                                      : "",
                                }}
                              >
                                How it works
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://app.kazaswap.co/"
                                target="_blank"
                                style={{
                                  color:
                                    location.pathname === "/properties"
                                      ? "yellow"
                                      : "",
                                }}
                              >
                                Properties
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/pricing-app"
                                style={{
                                  color:
                                    location.pathname === "/pricing-app"
                                      ? "yellow"
                                      : "",
                                }}
                              >
                                Pricing
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/faqs"
                                style={{
                                  color:
                                    location.pathname === "/faqs"
                                      ? "yellow"
                                      : "",
                                }}
                              >
                                FAQ
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/app"
                                style={{
                                  color:
                                    location.pathname === "/app"
                                      ? "yellow"
                                      : "",
                                }}
                              >
                                App
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  )}
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <Link
                    to="https://app.kazaswap.co/login"
                    className="search-trigger search-icon d-xs-none"
                  >
                    <div className="icon w-embed">
                      <svg
                        className="hover-yellow"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M15 12H5"
                            stroke="black"
                            stroke-width="1.15"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M12 15L15 12L12 9"
                            stroke="black"
                            stroke-width="1.15"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M3.95032 16.0002C4.37866 16.8754 4.94818 17.6741 5.63605 18.3642C8.21003 20.9382 12.0811 21.7082 15.4442 20.3152C18.8072 18.9222 21 15.6404 21 12.0003C21 8.3601 18.8072 5.07837 15.4442 3.68534C12.0811 2.29232 8.21003 3.06232 5.63605 5.63631C4.94819 6.32641 4.37867 7.12506 3.95032 8.00021"
                            stroke="black"
                            stroke-width="1.15"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <p>Sign in</p>
                  </Link>

                  <Link
                    to="https://app.kazaswap.co/register"
                    className="theme-btn padding-style d-xs-none wow visible fadeInUp"
                  >
                    <div className="icon w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M20 20V19.25C20 16.9028 18.0972 15 15.75 15H8.25C5.90279 15 4 16.9028 4 19.25V20"
                            stroke="black"
                            stroke-width="1.15"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <circle
                            cx="12"
                            cy="7"
                            r="4"
                            stroke="black"
                            stroke-width="1.15"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></circle>
                        </g>
                      </svg>
                    </div>
                    <p>Register your place</p>
                  </Link>
                  <div
                    className="header__hamburger d-xl-none my-auto"
                    onClick={toggleSidebar}
                  >
                    <div className="sidebar__toggle">
                      <img
                        src="assets/img/menu.png"
                        alt="hamburger"
                        width="29px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
