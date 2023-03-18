import React from "react";
import { formatPrice } from "../helper";

function Order(props) {
  const isAvailable = (key) =>{
    const dish = props.dishes[key];
    return dish && dish.status === "available";
  }
  const ordersIds = Object.keys(props.orders);
  //   console.log("This is props.order", typeof props.orders);
  const total = ordersIds.reduce((prevTotal, key) => {
    const dish = props.dishes[key];
    const count = props.orders[key];
    
    if (isAvailable(key)) {
      return prevTotal + count * dish.price;
    }
    return prevTotal;
  }, 0);
  return (
    <div>
      <h2 className="text-center">Orders</h2>
      <ul>
        {ordersIds.map((key) => {
          const dish = props.dishes[key];
          const count = props.orders[key];
          if (isAvailable(key)) {
            return (
              <li className="border-b-2 border-black py-8 flex justify-between items-center">
                {count} bowl of {dish.name}
              </li>
            );
          }
        })}
      </ul>
      <div className="px-8 py-0 text-lg border-solid border black border-t-3 border-double ">
        <strong className="float-right">Total: {formatPrice(total)}</strong>
      </div>
    </div>
  );
}

export default Order;
