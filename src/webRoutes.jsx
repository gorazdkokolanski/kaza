import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Properties from "./components/properties/Properties";
import PricingApp from "./components/pricingApp/PricingApp";
import Faqs from "./components/faqs/Faqs";
import Confidentials from "./components/confidential/Confidentials";
import WebApp from "./components/webApp/WebApp";
import Terms from "./components/terms/Terms";
import Working from "./components/working/Working";
import Signup from "./components/auth/Signup";
import SignIn from "./components/auth/SignIn";
import OTP from "./components/auth/OTP";
import ResetPassword from "./components/auth/ResetPassword";
import Forgot from "./components/auth/Forgot";
import Footer from "./components/footer/Footer";
// import ProtectedRoute from './ProtectedRoute'

const WebRoutes = () => {
  const location = useLocation();

  const noHeaderRoutes = [
    "/otp",
    "/forgot-password",
    "/reset-password",
    "/sign-in",
    "/signup",
  ];
  const homeRoute = ["/"];

  useEffect(() => {
    if (noHeaderRoutes.includes(location.pathname)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/sign-up.css"; // Make sure this file is inside the public folder
      link.id = "otp-style";
      document.head.appendChild(link);

      return () => {
        const existing = document.getElementById("otp-style");
        if (existing) existing.remove();
      };
    }
  }, [location.pathname]);

  return (
    <div className="section-bg">
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<WebApp />} />
        <Route path="/confidential" element={<Confidentials />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/how-it-works" element={<Working />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/pricing-app" element={<PricingApp />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      {!homeRoute.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default WebRoutes;
