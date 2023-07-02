import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
