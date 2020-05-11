import * as React from "react";

export default function Card() {
  return (
    <div className="bg-gray-200 rounded shadow-xl">
      <div className="relative pb-48">
        <img
          src="/img/pizza.jpg"
          className="absolute inset-0 h-full w-full rounded-t object-cover"
          alt=""
        />
      </div>
      <div className="relative px-2">
        <h1 className="text-4xl font-semibold">Name</h1>
        <h2 className="text-2xl font-bold text-right">
          <span className="text-lg text-gray-600 font-medium">$</span> 23.99
        </h2>
      </div>
      <div className="flex justify-evenly border-t ">
        <button className="w-full h-full block py-3 px-4 hover:text-gray-700 hover:bg-gray-300 rounded-bl">
          Add to Cart
        </button>
        <button className="w-full h-full block py-3 px-4 hover:text-gray-700 hover:bg-gray-300 rounded-br">
          Details
        </button>
      </div>
    </div>
  );
}
