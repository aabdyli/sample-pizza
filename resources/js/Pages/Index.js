import * as React from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";

export default function Index(props) {
  return (
    <>
      <Helmet>
        <title>Pizza Shop</title>
      </Helmet>
      <header>
        <section className="">
          <h1 className="text-4xl font-semibold">Select your pizzas!</h1>
        </section>
      </header>
      <div className="grid gap-4 pt-4 mb-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 xl:gap-8">
        {props.pizzas.map(pizza => (
          <Card
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            img={pizza.image}
          />
        ))}
      </div>
    </>
  );
}
