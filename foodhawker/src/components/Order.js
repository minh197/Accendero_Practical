import React from "react";
import { formatPrice } from "../helper";

function Order(props) {
  const isAvailable = (key) => {
    const order = props.orders[key];
    return order && order.status === "available";
  };
  const total = props.state?.totalPrice;

  console.log(props?.totalPrice);
  return (
    <div>
      <h2 className="text-center">Orders</h2>
      <ul>
        {Object.keys(props?.orders).map((key) => {
          const order = props.orders[key];
          if (isAvailable(key)) {
            return (
              <li className="border-b-2 border-black py-8 flex justify-between items-center">
                {order?.quantity} bowl of {order?.name}
              </li>
            );
          }
        })}
      </ul>
      <div className="px-8 py-0 text-lg border black border-t-3 border-double ">
        <strong className="float-right">
          Total: {formatPrice(props?.totalPrice)}
        </strong>
      </div>
    </div>
  );
}

export default Order;
