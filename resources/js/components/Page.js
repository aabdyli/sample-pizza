import * as React from "react";
import Navbar from "./Navbar";

export default function Page({ children }) {
  return (
    <>
      <Navbar />
      <div className="md:px-32 md:mt-8 sm:px-8 mt-4 px-8 xl:px-32">
        {children}
      </div>
    </>
  );
}
