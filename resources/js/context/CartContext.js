import * as React from "react";
import * as _ from "lodash";

export const CartContext = React.createContext();

export function CartProvider(props) {
  const [currency, setCurrency] = React.useState("EUR");
  const [articles, setArticles] = React.useState([]);
  const total = React.useMemo(() => {
    return (
      articles.reduce((total, current) => {
        return total + current.quantity * current.price;
      }, 0) / 100
    );
  }, [articles, currency]);

  React.useEffect(() => {
    const curr =
      window.localStorage.getItem("currency") ||
      window.localStorage.setItem("currency", currency);

    let cart =
      window.localStorage.getItem("cartContent") ||
      window.localStorage.setItem("cartContent", JSON.stringify(articles));

    if (cart) {
      cart = JSON.parse(cart);
    }

    if (curr && curr !== currency) {
      setCurrency(curr);
    }

    if (cart && !_.isEqual(cart, articles)) {
      setArticles(cart);
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("currency", currency);
  }, [currency]);

  const addToCart = element => {
    const index = articles.findIndex(article => article.id === element.id);
    let cartItems = articles.slice();
    if (index === -1) {
      cartItems = [...cartItems, Object.assign({}, element, { quantity: 1 })];
      setArticles(cartItems);
    } else {
      cartItems[index].quantity++;
      setArticles(cartItems);
    }
    window.localStorage.setItem("cartContent", JSON.stringify(cartItems));
  };

  const changeQuantity = (id, quantity) => {
    const index = articles.findIndex(article => article.id === id);
    let cartItems = articles.slice();
    if (index !== -1) {
      cartItems[index].quantity = quantity;
      setArticles(cartItems);
    }
    window.localStorage.setItem("cartContent", JSON.stringify(cartItems));
  };

  return (
    <CartContext.Provider
      value={{
        currency,
        setCurrency,
        articles,
        total,
        addToCart,
        changeQuantity
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
