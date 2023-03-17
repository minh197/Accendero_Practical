import React, { useState } from "react";

import FoodMenu from "./FoodMenu";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleDishes from "../sampleDishes";
import dishes from "../sampleDishes";
import Dish from "./Dish";
function Main() {
  const [state, setState] = useState({
    dishes: {},
    order: {},
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
    setState({dishes: sampleDishes});
    
  };
  return (
    <div
      className=" flex flex-shrink-1 p-8
     relative bg-white shadow-md min-h-screen"
    >
      <div className=" p-4 border-8 border-double border-gray-900 flex-1">
        <FoodMenu className=" h-full" />
        <ul className="dishes">
          {Object.keys(state.dishes).map(key => <Dish key={key} details ={state.dishes[key]}></Dish>)}
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
