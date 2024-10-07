// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "./Navbar.jsx";
import MainServicesImg from "../assets/MainServicesImg.jpg";
import Testimonials from "./Testimonials.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import {Link} from "react-router-dom";
import MentorshipImg from "../assets/MentorshipImg.png";
import ChildCounsellingImg from "../assets/ChildCounsellingImg.png";
import MarriageTherapyImg from "../assets/MarriageTherapyImg.png"
import PreMaritalTherapyImg from "../assets/PreMaritalTherapyImg.png";
import CorporateTrainingImg from "../assets/CorporateTrainingImg.png";
import ClinicalCounsellingImg from "../assets/ClinicalCounsellingImg.png";
import MediationImg from "../assets/MediationImg.png";
import ClinicalAssessmentImg from "../assets/ClinicalAssessmentImg.png";
import ParentalCoachingImg from "../assets/ParentalCoachingImg.png";
import AddictionCounsellingImg from "../assets/AddictionCounsellingImg.png";
import PsychologicalFirstAidImg from "../assets/PsychologicalFirstAidImg.png";
import TraumaCounsellingImg from "../assets/TraumaCounsellingImg.png";
import LifeSkillsImg from "../assets/LifeSkillsImg.jpg";

const MainServices = () => {
    return (
        <>
            <Navbar/>
            <div className="container mx-auto bg-white md:p-0 p-6">
                <div className="grid grid-cols-1">
                    <div className="lg:mt-[2rem]">
                        <p className="font-baloo font-semibold text-black text-[28px] md:text-[46px] lg:text-[56px] text-left md:text-center">
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

                        <h4 className="mt-[3rem] font-baloo font-normal text-[#8a898e] text-[14px] text-center tracking-[6.30px]">OUR SERVICES</h4>


                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                            <div className="mt-[2rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full" src={MentorshipImg} alt="MentorshipImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Mentorship Programme
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[2rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full" src={ChildCounsellingImg}
                                         alt="ChildCounsellingImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Child Counselling
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[2rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full" src={MarriageTherapyImg}
                                         alt="MarriageTherapyImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Marriage & Family Therapy
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[2rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full" src={PreMaritalTherapyImg}
                                         alt="PreMaritalTherapyImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Pre-Marital Counselling
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[1rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full h-full" src={CorporateTrainingImg}
                                         alt="CorporateTrainingImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Corporate Training
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[1rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full" src={ClinicalCounsellingImg}
                                         alt="ClinicalCounsellingImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Clinical Counselling
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[1rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full" src={MediationImg}
                                         alt="MediationImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Mediation
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[1rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full" src={ClinicalAssessmentImg}
                                         alt="ClinicalAssessmentImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Clinical Assessment
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[1rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full" src={ParentalCoachingImg}
                                         alt="ParentalCoachingImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Parental Coaching
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[1rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full" src={AddictionCounsellingImg}
                                         alt="AddictionCounsellingImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Addiction Counselling
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[1rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full" src={PsychologicalFirstAidImg}
                                         alt="PsychologicalFirstAidImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Psychological First Aid (PFA)
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[1rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full" src={TraumaCounsellingImg}
                                         alt="TraumaCounsellingImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Trauma Counselling
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[1rem]">
                                <div
                                    className="bg-white rounded-[10px] shadow-[0px_0px_9px_2px_#DF1C671A] hover:shadow-[0px_0px_9px_2px_#DF1C674D] hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="rounded-t-lg w-full" src={LifeSkillsImg}
                                         alt="LifeSkillsImg"/>

                                    <div className="p-5">
                                        <h3 className="font-baloo font-semibold text-black text-[22px]">
                                            Life Skills Training
                                        </h3>

                                        <p className="mb-3 font-baloo font-normal text-[#707070]">

                                        </p>
                                        <button type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-baloo font-medium text-center text-[#df1c67] rounded-md border-2 border-solid border-[#df1c67] justify-center transition duration-300 ease-in-out hover:bg-[#df1c67] hover:text-white">
                                            <Link to="/booking">Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
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
