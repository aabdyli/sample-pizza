import { InertiaApp } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";
import Page from "./components/Page";
import { CartProvider } from "./context/CartContext";

const app = document.getElementById("app");

render(
  <CartProvider>
    <Page>
      <InertiaApp
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={name => require(`./Pages/${name}`).default}
      />
    </Page>
  </CartProvider>,
  app
);
