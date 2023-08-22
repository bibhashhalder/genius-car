import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function ServicesCard({ service }) {
  const { img, title, price } = service;
  console.log(service);
  return (
    <div className="w-full ">
      <div className="border-2  rounded-lg p-2 m-3 relative">
        <img className="w-full h-52 rounded-lg" src={img} alt="" />
        <h3 className="font-bold">{title}</h3>
        <p className="text-orange-600">price:$ {price}</p>
        <IoIosArrowRoundForward className="absolute right-1 bottom-1 text-2xl text-orange-600"></IoIosArrowRoundForward>
      </div>
    </div>
  );
}
