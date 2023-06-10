import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componenets/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";
import ContractPolicy from "./pages/ContractPolicy";
import Faq from "./pages/Faq";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import OurStore from "./pages/OurStore";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import SingleService from "./pages/SingleService";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="Checkout" element={<Checkout />} />
            <Route path="ContractPolicy" element={<ContractPolicy />} />
            <Route path="Faq" element={<Faq />} />
            <Route path="ForgotPassword" element={<ForgotPassword />} />
            <Route path="Login" element={<Login />} />
            <Route path="Orders" element={<Orders />} />
            <Route path="OurStore" element={<OurStore />} />
            <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="ResetPassword" element={<ResetPassword />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="SingleService" element={<SingleService />} />
            <Route path="TermsAndConditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
