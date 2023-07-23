import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Chat from "./pages/Chat";
import ContactUs from "./pages/ContactUs";
import CheckoutProducts from "./pages/CheckoutProducts";
import CheckoutService from "./pages/CheckoutService";
import ContractPolicy from "./pages/ContractPolicy";
import Faq from "./pages/Faq";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import OurStore from "./pages/OurStore";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import SingleService from "./pages/SingleService";
import SingleProduct from "./pages/SingleProduct";
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
            <Route path="Chat" element={<Chat />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="CheckoutProducts" element={<CheckoutProducts />} />
            <Route path="CheckoutService/:id" element={<CheckoutService />} />
            <Route path="ContractPolicy" element={<ContractPolicy />} />
            <Route path="Faq" element={<Faq />} />
            <Route path="ForgotPassword" element={<ForgotPassword />} />
            <Route path="Login" element={<Login />} />
            <Route path="Orders" element={<Orders />} />
            <Route path="OurStore" element={<OurStore />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="ResetPassword/:token" element={<ResetPassword />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="SingleService/:id" element={<SingleService />} />
            <Route path="SingleProduct/:id" element={<SingleProduct />} />
            <Route path="TermsAndConditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
