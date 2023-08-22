import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="max-w-6xl	mx-auto">
      <div className="flex justify-center mb-5">
        <div className="w-2/3 text-center">
          <p className="text-2xl text-center font-bold text-orange-600">
            Services
          </p>
          <h2 className="text-5xl text-center font-bold">Our Service Area</h2>
          <p className="text-2xl text-center font-normal">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which look even slightly believable.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mb-2">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <p className="border-2 mx-auto rounded-md py-2 border-orange-600 text-orange-600 mb-8 text-center w-1/6">
        More Services
      </p>
    </div>
  );
}
