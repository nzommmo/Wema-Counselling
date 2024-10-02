import React from 'react';
import ServicesImg from "../assets/ServicesImg.png";
import {Link} from "react-router-dom";

const Services = () => {
    return (
        <>
            <div className="bg-[#C096001A] h-auto">
                <div className="container mx-auto px-6 md:p-0">
                    <div className="text-center mt-[2rem] lg:mt-10">
                        <h4 className="font-baloo font-normal text-[#8a898e] text-xs text-center tracking-[6.30px] mt-[2rem] lg:mt-0 py-[3rem]">
                            SERVICES
                        </h4>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="md:mt-[2rem] lg:mb-[4rem]">
                                <img className="h-full w-full" alt="ServicesImg" src={ServicesImg}/>
                            </div>

                            <div className="lg:ml-[5rem] mt-[1rem] lg:mt-0">
                                <h4 className="font-baloo font-semibold text-[22px] md:text-[33px] text-[#000033] lg:mt-[10rem]">We
                                    offer the best services</h4>
                                <div className="flex gap-1 text-left mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                        <path fill="#c09600" fillRule="evenodd"
                                              d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <p className="font-baloo font-normal text-[20px] text-[#000033]">
                                        Specialized counselling for teens, youths and couples.
                                    </p>
                                </div>

                                <div className="flex gap-1 text-left mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                        <path fill="#c09600" fillRule="evenodd"
                                              d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <p className="font-baloo font-normal text-[20px] text-[#000033]">
                                        Research services for academic proposals and data analysis.
                                    </p>
                                </div>

                                <div className="flex gap-1 text-left mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                        <path fill="#c09600" fillRule="evenodd"
                                              d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <p className="font-baloo font-normal text-[20px] text-[#000033]">
                                        Motivational speaking engagements for institutions and corporates.
                                    </p>
                                </div>

                                <div className="flex gap-1 text-left mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                        <path fill="#c09600" fillRule="evenodd"
                                              d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <p className="font-baloo font-normal text-[20px] text-[#000033]">
                                        Supply of household, construction, and school materials across East Africa.
                                    </p>
                                </div>

                                <button type="button"
                                        className="mt-[3rem] mb-[3rem] h-[53px] w-full lg:w-[157px] text-[#C09600] text-[19px] font-medium font-baloo rounded-2xl border-2 border-solid border-[#C09600] flex justify-center items-center ">
                                    <Link to="/booking">Book Now</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services;
