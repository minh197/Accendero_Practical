import React from 'react'

function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

function Dish(props) {
    const {image, name, price, desc, status} = props.details; 
    
  return (
    <li className="border-b-2 border-t-1 border-black pb-8 pt-8 mb-5 clear-both overflow-hidden">
      <img className="" src={image} alt={name} />
      <h3 className="flex justify-between items-center">
        {name}
        <span>{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button className="border border-black bg-sky-50 hover:bg-orange-600">
        Add to Order
      </button>
    </li>
  );
}

export default Dish