// eslint-disable-next-line no-unused-vars
import React from 'react';
import Line1 from "../assets/Line.png"

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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    </div>
                </section>
            </div>
        </>
    )
}

export default Testimonials;
