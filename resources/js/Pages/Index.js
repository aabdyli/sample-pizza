import * as React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import route from "ziggy";
import Card from "../components/Card";

export default function Index() {
  return (
    <div className="md:px-32 md:mt-8 sm:px-8 mt-4 px-8 xl:px-64">
      <header>
        <section className="">
          <h1 className="text-4xl font-semibold">Select your pizzas!</h1>
        </section>
      </header>
      <div className="grid pt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
