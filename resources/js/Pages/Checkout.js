import * as React from "react";
import { Helmet } from "react-helmet";
import { moneyFormat } from "../util";

export default function Checkout(props) {
  return (
    <>
      <Helmet>
        <title>Checkout - Pizza Shop</title>
      </Helmet>
      <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-1">
        <div className="">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
                  id="firstName"
                  type="text"
                  placeholder="Jane"
                  required
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-2 -mx-3">
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="contact"
                >
                  Contact
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="contact"
                  type="text"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-gray-100 bg-gray-900 rounded-md hover:text-gray-700 hover:bg-gray-200"
            >
              Order Now
            </button>
          </form>
        </div>
        <div>
          <h1 className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
            Receipt
          </h1>
          <ul>
            {props.pizzas.map(pizza => {
              return (
                <li className="pb-3 mb-3 border-b" key={pizza.id}>
                  <div className="flex justify-between">
                    <h2 className="self-end text-lg font-semibold uppercase">
                      {pizza.name}
                    </h2>
                    <div className="flex">
                      <div className="flex flex-col font-bold text-right text-gray-800">
                        <h3>{moneyFormat(pizza.cost / 100)} </h3>
                        <p className="text-sm font-semibold text-gray-600">
                          {pizza.quantity} x {moneyFormat(pizza.price / 100)}
                        </p>
                      </div>
                      <p className="ml-1 text-3xl font-semibold text-gray-600">
                        €
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex items-end justify-between">
            <h3 className="font-semibold text-gray-700 uppercase ">Total</h3>
            <p className="text-xl font-semibold uppercase">
              {moneyFormat(props.total / 100)} €
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
