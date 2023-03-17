import React, { useState } from "react";

import FoodMenu from "./FoodMenu";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleDishes from "../sampleDishes";
import Dish from "./Dish";
function Main() {
  const [state, setState] = useState({
    dishes: {},
    orders: {},
  });
  const addDish = (dish) => {
    //1. Take a copy of the existing state
    const dishes = { ...state.dishes };
    //2. Add the new dish to dishes variable
    dishes[`dish${Date.now()}`] = dish;
    //3. Set the new dishes object to state
    setState({
      ...state,
      dishes,
    });
  };
  const loadSampleDishes = () => {
    setState({ dishes: sampleDishes });
  };
  const addOrder = (key) => {
    //1. take a copy of the state
    const orders = {...state.orders}
    //2. either add to the order, or update the number in our order
        orders[key] = orders[key] + 1 || 1;
    //3.call setState to update the object
    setState({
        ...state,
        orders,
    });
    }
  return (
    <div
      className=" flex flex-shrink-1 p-8
     relative bg-white shadow-md min-h-screen"
    >
      <div className=" p-4 border-8 border-double border-gray-900 flex-1">
        <FoodMenu className=" h-full" />
        <ul className="dishes">
          {Object.keys(state.dishes).map((key) => (
            <Dish key={key} details={state.dishes[key]} addOrder ={addOrder} index={key}></Dish>
          ))}
        </ul>
      </div>
      <div className=" p-4  border-8 border-double border-gray-900 flex-1">
        <Order className=" h-full" />
      </div>
      <div className=" p-4 border-8 border-double border-gray-900 flex-1">
        <Inventory
          className=" h-full"
          addDish={addDish}
          loadSampleDishes={loadSampleDishes}
        />
      </div>
    </div>
  );
}
export default Main;
