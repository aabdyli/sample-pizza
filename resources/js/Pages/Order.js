import * as React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function Order(props) {
  return (
    <div>
      <div className="mb-4">
        <h1>Your order no. {props.orderId} is being proccessed!</h1>
      </div>
      <InertiaLink
        href="/"
        className="px-4 py-2 text-gray-100 bg-gray-800 rounded-md hover:bg-gray-900 hover:text-gray-200"
      >
        Order more
      </InertiaLink>
    </div>
  );
}
