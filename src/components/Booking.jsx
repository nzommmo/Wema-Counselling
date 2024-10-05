// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import Navbar from "./Navbar.jsx";
import BookingImg from "../assets/BookingImg.png";
import Footer from "./Footer.jsx";

const Booking = () => {
    return (
        <>
            <Navbar/>
            <div className="container mx-auto bg-white md:p-0 p-6">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="lg:mt-[2rem]">
                        <p className="font-baloo font-semibold text-black text-[28px] md:text-[56px]">
                            Let’s talk, we care
                        </p>

                        <p className="font-baloo font-normal text-[#000024] text-[18px] md:text-[20px] md:mt-5 mt-[1rem]">
                            Book with us today for a session! Here at Mindful Wema we care
                        </p>

                        <div className="w-full max-w-xl">
                            <form className="mt-[2rem]">
                                <div className="mb-5">
                                    <label htmlFor="full_name"
                                           className="block mb-2 text-[18px] font-baloo font-medium text-[#6B7280]">
                                        Full Names (First and Last Name) <span className="text-[#f62d51]">*</span>
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
                                        E-mail Address <span className="text-[#f62d51]">*</span>
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
                                    <label htmlFor="date"
                                           className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                                        Date <span className="text-[#f62d51]">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        className="bg-[#F2F1F1] border border-[#F2F1F1] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                                        required
                                    />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="time"
                                           className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                                        Time <span className="text-[#f62d51]">*</span>
                                    </label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path fillRule="evenodd"
                                                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <input type="time" id="time"
                                               className="bg-[#F2F1F1] border border-[#F2F1F1] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                                               min="09:00" max="18:00" value="00:00" required/>
                                    </div>
                                </div>

                                <div>
                                    <button type="button"
                                            className="mt-[3rem] h-[53px] w-full text-white text-[19px] font-medium font-baloo rounded-2xl bg-[#DF1C67] border-2 border-solid border-[#DF1C67] flex justify-center items-center ">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mt-[2.5rem]">
                        <img className="h-full w-full" alt="BookingImg" src={BookingImg}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Booking;
