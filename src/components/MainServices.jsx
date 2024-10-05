// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "./Navbar.jsx";
import MainServicesImg from "../assets/Img 02.png";
import Testimonials from "./Testimonials.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

const MainServices = () => {
    return (
        <>
            <Navbar/>
            <div className="container mx-auto bg-white md:p-0 p-6">
                <div className="grid grid-cols-1">
                    <div className="lg:mt-[2rem]">
                        <p className="font-baloo font-semibold text-black text-[28px] md:text-[46px] lg:text-[56px] text-center">
                            Services offered at Mindful Wema
                        </p>

                        <p className="font-baloo font-normal text-[#000033] text-[18px] md:text-[20px] md:mt-5 mt-[1rem]">
                            At Mindful Wema, we offer a range of specialized services, including counseling for
                            children, adolescents, couples, and families.
                            We also provide support for addiction, trauma, and parental coaching. Our corporate training
                            and clinical supervision services ensure mental well-being in the workplace.
                            Whatever your needs, we are here to guide you through life’s challenges with care and
                            expertise.
                        </p>

                        <div className="mt-[2.5rem]">
                            <img className="h-full w-full" alt="MainServicesImg" src={MainServicesImg}/>
                        </div>


                    </div>
                </div>
            </div>

            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default MainServices;
