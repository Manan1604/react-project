import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/about";
import { Outlet } from "react-router-dom";

function Layout(){
    return (
       <>
        <Header />
        <Home />
        <About />
        <Footer />
       </>
       

    )
}

export default Layout