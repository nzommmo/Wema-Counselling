// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "./Navbar.jsx";
import AboutImg from "../assets/AboutImg.png";
import Footer from "./Footer.jsx";

const About = () => {
    return (
        <>
            <Navbar/>
            <div className="container mx-auto bg-white md:p-0 p-6">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="lg:mt-[10rem]">
                        <p className="font-baloo font-semibold text-black text-[28px] md:text-[56px]">
                            About Mindful Wema
                        </p>

                        <p className="font-baloo font-normal text-[#000033] text-[18px] md:text-[20px] md:mt-5 mt-[1rem]">
                            Mindful Wema Solutions Limited is a private registered company dedicated to providing specialized counselling services.
                            We assist teens, youths, couples, and families in overcoming various challenges they face.
                            Our expertise extends to research services for university and college students, guiding them in crafting effective
                            academic proposals, data collection and timely analysis.
                        </p>
                    </div>

                    <div className="mt-[2rem]">
                        <img className="h-full w-full" alt="AboutImg" src={AboutImg}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About;
