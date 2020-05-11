import * as React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const currencies = ["EUR", "USD"];
  const cart = React.useContext(CartContext);
  return (
    <nav className="px-16 py-2 text-gray-800 border-b border-gray-400 shadow xl:px-32">
      <div className="flex justify-between">
        <InertiaLink className="text-2xl font-bold" href={route("index")}>
          Pizza Time
        </InertiaLink>
        <div className="flex items-center">
          <div className="relative">
            <select
              defaultValue={cart.currency}
              onChange={event => cart.currencySet(event.target.value)}
              className="block appearance-none py-2 px-4 pr-8 rounded leading-tight focus:bg-gray-300 hover:bg-gray-200 focus:border-gray-500"
            >
              {currencies.map(currency => {
                return <option key={currency}>{currency}</option>;
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <InertiaLink
            className="relative text-lg hover:text-gray-900 px-2"
            href={route("cart")}
          >
            Cart
            {cart.articles.length !== 0 ? (
              <div className="-right-1 -bottom-1 absolute text-center text-sm rounded-full h-4 w-4 bg-red-400 text-red-100 leading-4">
                {cart.articles.length}
              </div>
            ) : null}
          </InertiaLink>
        </div>
      </div>
    </nav>
  );
}
