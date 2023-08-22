import React from "react";
import team1 from "../../../../public/images/team/1.jpg";
import team2 from "../../../../public/images/team/2.jpg";
import team3 from "../../../../public/images/team/3.jpg";
import TeamMember from "./TeamMember";
export default function Team() {
  const members = [
    {
      id: 1,
      image: team1,
      details: "Car Engine Plug",
      title: "Engine Expert",
    },
    {
      id: 2,
      image: team2,
      details: "Car Engine Plug",
      title: "Engine Expert",
    },
    {
      id: 3,
      image: team3,
      details: "Car Engine Plug",
      title: "Engine Expert",
    },
  ];
  return (
    <div className="max-w-6xl	mx-auto">
      <div className="w-3/5 mx-auto text-center mb-5">
        <h5 className="text-orange-600 font-bold text-xl">Team</h5>
        <h2 className="text-4xl font-extrabold">Meet Our Team</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which look even slightly believable.{" "}
        </p>
      </div>
      <div className="flex  mb-8">
        {members.map((member) => (
          <TeamMember key={member.id} member={member}></TeamMember>
        ))}
      </div>
    </div>
  );
}
