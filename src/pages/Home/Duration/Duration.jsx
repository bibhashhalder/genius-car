import React from "react";
import { TbCalendarStats } from "react-icons/tb";

export default function Duration() {
  return (
    <div className="max-w-6xl	mx-auto h-60 rounded-lg bg-black mb-6">
      <div className="grid grid-cols-3 h-full justify-items-center items-center py-auto">
        <div className="flex">
          <TbCalendarStats className="text-white text-5xl mr-3"></TbCalendarStats>
          <div className="flex flex-col">
            <span className="text-white ">We are open monday-friday</span>
            <span className="text-white font-bold">7:00 am - 9:00 pm</span>
          </div>
        </div>
        <div className="flex">
          <i className="fa-solid fa-phone-volume text-white text-5xl mr-3"></i>

          <div className="flex flex-col">
            <span className="text-white ">Have a question?</span>
            <span className="text-white font-bold ">+2546 251 2658</span>
          </div>
        </div>
        <div className="flex">
          <i className="fa-sharp fa-solid fa-location-dot text-white text-5xl mr-3"></i>
          <div className="flex flex-col">
            <span className="text-white ">Need a repair? our address</span>
            <span className="text-white font-bold ">Liza Street, New York</span>
          </div>
        </div>
      </div>
    </div>
  );
}
