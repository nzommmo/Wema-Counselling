import React from 'react';
import Navbar from "./Navbar.jsx";
import HomeBanner from "./HomeBanner.jsx";
import Services from "./Services.jsx";

const Home = () => {
    return (
        <>
            <Navbar/>
            <HomeBanner/>
            <Services/>
        </>
    )
}

export default Home;
