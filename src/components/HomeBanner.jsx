import React from 'react';
import {Link} from "react-router-dom";
import HomeImg from '../assets/HomeImg.png'

const HomeBanner = () => {
    return (
        <>
            <div className="container mx-auto bg-white md:p-0 p-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="lg:mt-[8rem]">
                        <p className="font-baloo font-semibold text-black text-[28px] md:text-[56px]">
                            Welcome to Mindful Wema Solutions Limited
                        </p>
                        <p className="font-baloo font-normal text-black text-[18px] md:text-[20px] md:mt-5 mt-[1rem]">
                            Your partner in navigating life’s challenges.
                            We assist teens, youths, couples, and families in overcoming various challenges they face.
                        </p>
                        <div className="flex">
                            <Link
                                to="/booking"
                                className="mr-7 mt-[30px] text-white bg-[#C09600] py-3 px-7 rounded-3xl font-baloo font-normal text-[18px]"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>

                    <div className="mt-[2rem]">
                        <img className="h-full w-full" alt="HomeImg" src={HomeImg}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner;
