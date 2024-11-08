import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-cyan-500 rounded-lg px-6 md:px-10 lg:px-20">
      {/* ----------left side ---------------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-4 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className=" text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment with <br /> Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our exclusive doctors,
            <br className="hidden sm:block" /> schedule your appointments
            hassle-free
          </p>
        </div>

        {/* Book appointment  button in the header section */}
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-gradient-to-r from-stone-300 to-stone-100 px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 group shadow-lg"
        >
          Book Appointment{" "}
          <img
            className="w-3 transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            src={assets.arrow_icon}
            alt="arrow_icon"
          />
        </a>
      </div>
      {/* -------------right side------------ */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
