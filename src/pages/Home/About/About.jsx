import React from "react";
import person from "../../../../public/images/about_us/person.jpg";
import parts from "../../../../public/images/about_us/parts.jpg";
export default function About() {
  return (
    <div className="hero min-h-screen max-w-6xl	mx-auto ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative ml-8">
          <img src={person} className="w-3/5 max-w-sm rounded-lg shadow-2xl" />
          <img
            src={parts}
            className=" w-1/2 left-[20%] top-[60%] absolute max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <p className="text-bold text-orange-600">About us</p>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-primary  bg-orange-600">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
}
