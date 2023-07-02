import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Home from './pages/Home';




=======
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
>>>>>>> Stashed changes

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
<<<<<<< Updated upstream
          <Route path="/" element={<Home />} />
=======
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
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
