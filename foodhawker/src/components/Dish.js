import React from "react";

function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

function Dish(props) {
  const { image, name, price, desc, status } = props.details;
  const isAvailable = status === "available";

  function handleAddToOrder () {
    props.addOrder(props.index);
  }

  return (
    <li className="border-b-2 border-t-1 border-black pb-8 pt-8 mb-5 clear-both overflow-hidden">
      <img className="" src={image} alt={name} />
      <h3 className="flex justify-between items-center">
        {name}
        <span>{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <h3
        className="items-center"
        style={{ color: isAvailable ? "blue" : "red" }}
      >
        Status: {status}
      </h3>
      <button
        disabled={!isAvailable}
        className={`border border-black bg-sky-50 ${
          isAvailable ? "hover:bg-orange-600" : "opacity-50 cursor-not-allowed"
        }`}
        onClick ={() => handleAddToOrder()}
      >
        {isAvailable ? "Add to Order" : "Unavailable"}
      </button>
    </li>
  );
}

export default Dish;
