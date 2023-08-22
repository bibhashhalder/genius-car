import React from "react";

export default function TeamMember({ member }) {
  const { image, details, title } = member;
  return (
    <div className="w-1/3 mx-5 border-2 p-2 rounded-md">
      <img className="w-full rounded-md" src={image} alt="" />
      <h2 className="mx-24 w-full text-2xl font-bold">{details}</h2>
      <p className="mx-32 font-semibold w-full">{title}</p>
    </div>
  );
}
