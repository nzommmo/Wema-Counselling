// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logo.jpeg";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="container mx-auto bg-white border-gray-200 relative">
            <div className="flex flex-wrap items-center justify-between">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                    <img className="h-24 px-5 md:p-0" alt="Logo" src={Logo}/>
                </Link>

                <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                    <NavLink to="/contact">
                        {({isActive}) => (
                            <button
                                type="button"
                                className={`h-[50px] w-[162px] text-[19px] font-medium font-baloo rounded-2xl border-2 border-solid items-center justify-center lg:block hidden ${
                                    isActive
                                        ? 'bg-[#df1c67] text-white border-none'  // Active styles
                                        : 'text-[#df1c67] border-[#df1c67]'  // Default styles
                                }`}
                            >
                                Contact Us
                            </button>
                        )}
                    </NavLink>
                </div>

                <div className="flex gap-2 lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 mr-2 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-menu-deep"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 6h16"/>
                            <path d="M7 12h13"/>
                            <path d="M10 18h10"/>
                        </svg>
                    </button>
                </div>

                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1"
                     id="navbar-cta">
                    <ul className="ml-[10rem] flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 md:border-0 lg:bg-white">
                        <li className="block py-2 px-3 lg:p-0 font-baloo font-normal text-[18px]">
                            <NavLink
                                to="/"
                                className={({isActive}) => isActive ? "text-[#df1c67]" : ""}>
                                Home
                            </NavLink>
                        </li>
                        <li className="block py-2 px-3 md:p-0 font-baloo font-normal text-[18px]">
                            <NavLink
                                to="/about"
                                className={({isActive}) => isActive ? "text-[#df1c67]" : ""}>
                                About
                            </NavLink>
                        </li>
                        <li className="block py-2 px-3 md:p-0 font-baloo font-normal text-[18px]">
                            <NavLink
                                to="/services"
                                className={({isActive}) => isActive ? "text-[#df1c67]" : ""}>
                                Services
                            </NavLink>
                        </li>
                        <li className="md:hidden block">
                            <div
                                className="font-baloo font-normal text-black text-[18px] text-center px-4 py-2 cursor-pointer md:block hidden">
                                <Link to="/login">Log in</Link>
                            </div>
                            <button type="button"
                                    className="text-white bg-[#75a774] w-[111px] h-[49px] rounded-[10px] font-baloo font-normal px-4 py-2 text-center cursor-pointer text-[18px]">
                                <Link to="/signup">Sign up</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={`fixed flex flex-col items-start px-6 py-20 z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform lg:hidden ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button className="absolute right-7 top-4 p-3" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon className="text-5xl" icon={faXmark}/>
                </button>
                <ul className="flex flex-col items-start space-y-4 md:space-y-8 font-baloo font-normal">
                    <li className="text-[20px] md:text-3xl hover:text-[#df1c67]">
                        <NavLink to="/" className={({isActive}) => (isActive ? "text-[#df1c67]" : "")}>Home</NavLink>
                    </li>
                    <li className="text-[20px] md:text-3xl hover:text-[#df1c67]">
                        <NavLink to="/about"
                                 className={({isActive}) => (isActive ? "text-[#df1c67]" : "")}>About</NavLink>
                    </li>
                    <li className="text-[20px] md:text-3xl hover:text-[#df1c67]">
                        <NavLink to="/services"
                                 className={({isActive}) => (isActive ? "text-[#df1c67]" : "")}>Services</NavLink>
                    </li>
                    <li className="text-[20px] md:text-3xl hover:text-[#df1c67]">
                        <NavLink to="/contact"
                                 className={({isActive}) => (isActive ? "text-[#df1c67]" : "")}>Contact</NavLink>
                    </li>
                    {/*<img className="md:hidden" alt="Line" src={Line}/>*/}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
