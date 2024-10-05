// eslint-disable-next-line no-unused-vars
import React from 'react';
import Line1 from "../assets/Line.png"
import Person1 from "../assets/TestimonialsImg.png"

const Testimonials = () => {
    return (
        <>
            <div className="px-0 grid grid-cols-1">
                <section className="bg-testimonialsRectangle w-full h-full md:mt-[4rem] mt-[3rem] px-6 lg:px-0">
                    <h4 className="font-baloo font-normal text-[#8a898e] text-[14px] text-center tracking-[6.30px]">TESTIMONIALS</h4>
                    <h2 className="font-baloo font-normal text-[#000033] text-[22px] md:text-[40px] lg:text-[45px] text-center">
                        What our customers say about us!
                    </h2>
                    <img className="mx-auto mt-3 lg:mt-0" alt="Line1" src={Line1}/>

                    <div
                        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto mt-[3rem] mb-[1rem] cursor-pointer">
                        <div
                            className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="p-3">
                                <div className="flex flex-row mt-4">
                                    <div className="flex">
                                        <img
                                            className="rounded-[10px] px-2 py-1"
                                            alt="Person1"
                                            src={Person1}
                                        />
                                        <div className="flex flex-col mt-2">
                                            <p className="font-baloo font-semibold text-[#000033] text-[16px]">Jane
                                                Kirimi</p>
                                            <p className="font-baloo font-normal text-[#00003380] text-[16px]">Meru</p>
                                        </div>
                                    </div>

                                    <div className="ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 20 20">
                                            <path fill="#DF1C67"
                                                  d="M11 9v7h7V9c0-2.2-1.8-5-4-5h-2l1 2s2 0 2 3zM2 9v7h7V9c0-2.2-1.8-5-4-5H3l1 2s2 0 2 3z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className="px-6 mb-[2rem] text-[#000033] text-[15px] tracking-[0.30px] leading-[21.8px]  font-baloo font-normal">
                                Having interacted with the service providers, I received timely consultancy and
                                professionalism from Mindful Wema
                                Solutions Limited.
                            </p>
                        </div>

                        <div
                            className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="p-3">
                                <div className="flex flex-row mt-4">
                                    <div className="flex">
                                        <img
                                            className="rounded-[10px] px-2 py-1"
                                            alt="Person1"
                                            src={Person1}
                                        />
                                        <div className="flex flex-col mt-2">
                                            <p className="font-baloo font-semibold text-[#000033] text-[16px]">John
                                                Mwangi</p>
                                            <p className="font-baloo font-normal text-[#00003380] text-[16px]">Nakuru</p>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 20 20">
                                            <path fill="#DF1C67"
                                                  d="M11 9v7h7V9c0-2.2-1.8-5-4-5h-2l1 2s2 0 2 3zM2 9v7h7V9c0-2.2-1.8-5-4-5H3l1 2s2 0 2 3z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className="px-6 mb-[2rem] text-[#000033] text-[15px] tracking-[0.30px] leading-[21.8px]  font-baloo font-normal">
                                I found the sessions at Mindful Wema Solutions incredibly insightful. Their tailored
                                approach helped me overcome
                                personal challenges with confidence.
                            </p>
                        </div>

                        <div
                            className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="p-3">
                                <div className="flex flex-row mt-4">
                                    <div className="flex">
                                        <img
                                            className="rounded-[10px] px-2 py-1"
                                            alt="Person1"
                                            src={Person1}
                                        />
                                        <div className="flex flex-col mt-2">
                                            <p className="font-baloo font-semibold text-[#000033] text-[16px]">Grace Achieng'</p>
                                            <p className="font-baloo font-normal text-[#00003380] text-[16px]">Nairobi</p>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 20 20">
                                            <path fill="#DF1C67"
                                                  d="M11 9v7h7V9c0-2.2-1.8-5-4-5h-2l1 2s2 0 2 3zM2 9v7h7V9c0-2.2-1.8-5-4-5H3l1 2s2 0 2 3z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className="px-6 mb-[2rem] text-[#000033] text-[15px] tracking-[0.30px] leading-[21.8px]  font-baloo font-normal">
                                The counseling sessions were life-changing for me. The experts at Mindful Wema Solutions
                                provided practical tools
                                that helped me navigate through a difficult phase.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Testimonials;
