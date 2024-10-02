// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "./Navbar.jsx";
import HomeBanner from "./HomeBanner.jsx";
import Services from "./Services.jsx";
import Testimonials from "./Testimonials.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
    return (
        <>
            <Navbar/>
            <HomeBanner/>
            <Services/>
            <Testimonials/>
            <Contact/>
        </>
    )
}

export default Home;
