import React from "react";
import product1 from "../../../../public/images/products/1.png";
import product2 from "../../../../public/images/products/2.png";
import product3 from "../../../../public/images/products/3.png";
import product4 from "../../../../public/images/products/4.png";
import product5 from "../../../../public/images/products/5.png";
import product6 from "../../../../public/images/products/6.png";
import Prouct from "./Prouct";
export default function Products() {
  const products = [
    { id: 1, image: product1, title: "Car Engine Plug", price: "20.00" },
    { id: 2, image: product2, title: "Car Air Filter", price: "30.00" },
    { id: 3, image: product3, title: "Cools Led Light", price: "25.00" },
    { id: 4, image: product4, title: "Cools Led Light", price: "20.00" },
    { id: 5, image: product5, title: "Cools Led Light", price: "20.00" },
    { id: 6, image: product6, title: "Cools Led Light", price: "20.00" },
  ];
  return (
    <div className="max-w-6xl	mx-auto">
      <div className="text-center w-1/2 mx-auto  mb-2">
        <p className="font-bold text-orange-500">Popular Products</p>
        <h2 className="text-5xl font-bold mb-3">Browse Our Products</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 ">
        {products.map((product) => (
          <Prouct key={product.id} product={product}></Prouct>
        ))}
      </div>
      <p
        className="border-2 mx-auto rounded-md py-2
       border-orange-600 text-orange-600 mb-8
       text-center w-1/6"
      >
        More Products
      </p>
    </div>
  );
}
