import * as React from "react";
import { CartContext } from "../context/CartContext";
import { moneyFormat } from "../util";

export default function Card(props) {
  const { currency, addToCart } = React.useContext(CartContext);
  let currSymbol;
  let price = props.price;

  if (currency === "EUR") {
    currSymbol = "€";
  }

  if (currency === "USD") {
    currSymbol = "$";
    price = props.price * 1.1;
  }

  return (
    <div className="bg-gray-200 rounded shadow-xl">
      <div className="relative pb-48">
        <img
          src={`/img/${props.img}`}
          className="absolute inset-0 object-cover w-full h-full rounded-t"
          alt=""
        />
      </div>
      <div className="relative px-2">
        <h1 className="text-4xl font-semibold">{props.name}</h1>
        <h2 className="text-2xl font-bold text-right">
          <span className="text-lg font-medium text-gray-600">
            {currSymbol}
          </span>{" "}
          {moneyFormat(price / 100)}
        </h2>
      </div>
      <div className="flex border-t justify-evenly ">
        <button
          type="button"
          onClick={() =>
            addToCart({
              id: props.id,
              name: props.name,
              price: props.price
            })
          }
          className="block w-full h-full px-4 py-3 rounded-b hover:text-gray-700 hover:bg-gray-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
