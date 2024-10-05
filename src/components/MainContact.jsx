// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const MainContact = () => {
    return (
        <>
            <Navbar/>
            <div className="grid md:grid-cols-1 bg-white min-h-screen">
                <div className="container mx-auto flex flex-col items-center md:px-0 px-6">
                    <div className="text-center">
                        <h4 className="font-baloo font-bold text-[#000033] text-[28px] md:text-[56px]">
                            Contact Us
                        </h4>
                        <p className="font-baloo font-medium text-[18px] text-[#717171] px-1">
                            Any question or remarks? Just write us a message!
                        </p>
                    </div>

                    <div className="w-full max-w-xl">
                        <form className="mt-[2rem]">
                            <div className="mb-5">
                                <label htmlFor="full_name"
                                       className="block mb-2 text-[18px] font-baloo font-medium text-[#6B7280]">
                                    Full Names
                                </label>
                                <input
                                    type="text"
                                    id="full_name"
                                    name="full_name"
                                    className="bg-[#F2F1F1] border border-[#F2F1F1] font-baloo font-normal text-[#6B7280] text-[16px] rounded-[12px] w-full p-3"
                                    placeholder="eg John Doe"
                                    required
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="email"
                                       className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="bg-[#F2F1F1] border border-[#F2F1F1] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                                    placeholder="eg john@gmail.com"
                                    required
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="subject"
                                       className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                                   Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="bg-[#F2F1F1] border border-[#F2F1F1] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                                    placeholder="eg Inquiry"
                                    required
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="email"
                                       className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    className="bg-[#F2F1F1] border border-[#F2F1F1] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                                    placeholder="Type here..."
                                    required
                                />
                            </div>

                            <div>
                                <button type="button"
                                        className="mt-[3rem] h-[53px] w-full text-white text-[19px] font-medium font-baloo rounded-2xl bg-[#DF1C67] border-2 border-solid border-[#DF1C67] flex justify-center items-center ">
                                    Send Message
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ml-2">
                                        <path fill="#ffffff" d="m2 21l21-9L2 3v7l15 2l-15 2z"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default MainContact;
