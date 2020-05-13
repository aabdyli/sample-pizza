import * as React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { CartContext } from "../context/CartContext";
import { moneyFormat } from "../util";

export default function Navbar() {
  const currencies = ["EUR", "USD"];
  const cart = React.useContext(CartContext);
  const [showCart, setShowCart] = React.useState(false);
  const containedRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        containedRef.current &&
        !containedRef.current.contains(event.target)
      ) {
        setShowCart(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containedRef]);

  const handleChange = (id, event) => {
    const quantity = Number(event.target.value);
    if (quantity < 1) {
      return;
    }
    cart.changeQuantity(id, event.target.value);
  };

  let rate = 1;
  let currSymbol;

  if (cart.currency === "EUR") {
    currSymbol = "€";
  }

  if (cart.currency === "USD") {
    currSymbol = "$";
    rate = 1.1;
  }

  return (
    <nav className="px-2 py-2 text-gray-800 border-b border-gray-400 shadow md:px-16 xl:px-32">
      <div className="flex justify-between">
        <InertiaLink className="text-2xl font-bold" href={route("index")}>
          Pizza Time
        </InertiaLink>
        <div className="flex items-center">
          <div className="relative">
            <button
              type="button"
              className="relative px-2 text-lg hover:text-gray-900"
              onClick={() => setShowCart(!showCart)}
              disabled={cart.articles.length === 0}
            >
              Cart
              {cart.articles.length !== 0 ? (
                <div className="absolute z-10 w-4 h-4 text-sm leading-4 text-center text-red-100 bg-red-400 rounded-full -right-1 -bottom-1">
                  {cart.articles.length}
                </div>
              ) : null}
            </button>
            {showCart === true ? (
              <div
                ref={containedRef}
                className="absolute right-0 z-10 w-64 px-2 pt-1 mt-1 bg-gray-100 border border-gray-200 rounded shadow-lg"
              >
                <div className="-mx-2 border-b border-gray-300">
                  <h1 className="block pl-2 mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                    Your Order
                  </h1>
                </div>
                <ul>
                  {cart.articles.map(cartItem => (
                    <li key={cartItem.id}>
                      <div className="py-4">
                        <div className="flex justify-between">
                          <div>
                            <h2 className="font-semibold">{cartItem.name}</h2>
                            <p>Quantity</p>
                          </div>
                          <div className="flex">
                            <div className="flex flex-col">
                              <h3 className="font-bold">
                                {moneyFormat(
                                  (cartItem.price * cartItem.quantity * rate) /
                                    100
                                )}{" "}
                                {currSymbol}
                              </h3>
                              <input
                                className="right-0 self-end w-10 text-right"
                                type="number"
                                value={cartItem.quantity}
                                onChange={e => handleChange(cartItem.id, e)}
                              />
                            </div>
                            <button
                              type="button"
                              className="ml-2"
                              onClick={() => cart.removeFromCart(cartItem.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-600 fill-current hover:text-gray-900"
                                viewBox="0 0 24 24"
                              >
                                <path d="M3 6v18h18V6H3zm5 14a1 1 0 01-2 0V10a1 1 0 012 0v10zm5 0a1 1 0 01-2 0V10a1 1 0 012 0v10zm5 0a1 1 0 01-2 0V10a1 1 0 012 0v10zm4-18v2H2V2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2H22z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between pt-2 -mx-2 border-t border-gray-300">
                  <h1 className="block pl-2 mb-2 text-lg font-bold tracking-wide text-gray-700 uppercase">
                    Total
                  </h1>
                  <h2 className="pr-2 font-bold">
                    {moneyFormat(cart.total * rate)} {currSymbol}
                  </h2>
                </div>
                <div className="-mx-2">
                  <InertiaLink
                    className="block w-full h-full py-2 font-semibold text-center bold hover:bg-gray-400"
                    href={route("checkout.store")}
                    method="post"
                    data={{
                      articles: cart.articles.map(article => ({
                        id: article.id,
                        quantity: article.quantity
                      }))
                    }}
                    onClick={() => setShowCart(false)}
                  >
                    Checkout
                  </InertiaLink>
                </div>
              </div>
            ) : null}
          </div>
          <div className="relative">
            <select
              value={cart.currency}
              onChange={event => cart.setCurrency(event.target.value)}
              className="block px-4 py-2 pr-8 leading-tight rounded appearance-none focus:bg-gray-300 hover:bg-gray-200 focus:border-gray-500"
            >
              {currencies.map(currency => {
                return <option key={currency}>{currency}</option>;
              })}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
