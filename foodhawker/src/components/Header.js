import React from "react";

function Header() {
  return (
    <div>
      <header className="top">
        <h1 className="flex items-center justify-center text-2xl text-orange-500">
          Today's Foods
        </h1>
      </header>
      <h3 className=" flex items-center text-yellow-500 relativw z-2 justify-center">
        <span className="">Just As Good As Your Homemade's</span>
      </h3>
    </div>
  );
}

export default Header;
