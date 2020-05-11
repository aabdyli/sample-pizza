import * as React from "react";

export const CartContext = React.createContext();

export function CartProvider(props) {
  const [currency, currencySet] = React.useState("EUR");
  const [articles, articlesSet] = React.useState([]);

  React.useEffect(() => {
    const curr =
      window.localStorage.getItem("currency") ||
      window.localStorage.setItem("currency", currency);
    if (curr !== currency) {
      currencySet(curr);
    }
    console.log(curr);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("currency", currency);
  }, [currency]);

  return (
    <CartContext.Provider
      value={{ currency, currencySet, articles, articlesSet }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
