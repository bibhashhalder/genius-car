import React from "react";
import { AiFillStar } from "react-icons/ai";
export default function Prouct({ product }) {
  const { image, title, price } = product;
  console.log(product);
  return (
    <div>
      <div className="w-11/12 border-4 m-3 p-2 rounded-lg">
        <img
          className="w-full bg-gray-100 p-1 h-56 rounded-lg"
          src={image}
          alt=""
        />
        <div className="mx-32 w-full">
          <i className="fa-solid fa-star text-orange-600"></i>
          <i className="fa-solid fa-star text-orange-600"></i>
          <i className="fa-solid fa-star text-orange-600"></i>
          <i className="fa-solid fa-star text-orange-600"></i>
          <i className="fa-solid fa-star text-orange-600"></i>
        </div>
        <h2 className="mx-28 font-bold text-xl w-full">{title}</h2>
        <p className="mx-36 text-orange-600">${price}</p>
      </div>
    </div>
  );
}
