import React, { useState, useEffect, useRef } from "react";
import FoodMenu from "./FoodMenu";
import Inventory from "./Inventory";
import Order from "./Order";
import { useParams } from "react-router-dom";
import { sampleDishes } from "../sampleDishes";
import Dish from "./Dish";
import { db } from "../base";
import { ref, onValue, set } from "firebase/database";

function Main() {
  const [state, setState] = useState({
    dishes: {},
    orders: {},
    icount: 0,
  });
  const uploadSampleData = () => {
    if (params.hawkerId) {
      Object.keys(sampleDishes).map((key) => {
        set(ref(db, `${params.hawkerId}/dishes/sampleDishes/${key}`), {
          name: sampleDishes[key].name,
          image: sampleDishes[key].image,
          desc: sampleDishes[key].desc,
          price: sampleDishes[key].price,
          status: sampleDishes[key].status,
        });
        loadSampleDishes();
      });
    }
  };
  const params = useParams();
  const icountRef = useRef(0);
  useEffect(() => {
    const dishesCountRef = ref(
      db,
      `${params.hawkerId}/dishes/inventoryDishes/`
    );
    let data;
    let icount = 0;
    onValue(dishesCountRef, (snapshot) => {
      data = snapshot.val();
      icount++;
      icountRef.current = icountRef.current + 1;
      setState({ dishes: data, orders: {}, icount: icount });
    });
  }, [params.hawkerId]);
  const addDish = (dish) => {
    console.log("This is icountref", icountRef.current);
    console.log("length of state: ",state.dishes.length)
    let obj = { length: 0 };
    Object.keys(state?.dishes).forEach((key) => {
      obj.length = obj.length + 1;
    });
    if (params.hawkerId) {
      set(
        ref(
          db,
          `${params.hawkerId}/dishes/inventoryDishes/idish${
            obj.length + 1
          }`
        ),
        {
          name: dish.name,
          image: dish.image,
          desc: dish.desc,
          price: dish.price,
          status: dish.status,
        }
      );
    }
  };
  const loadSampleDishes = () => {
    const dishesCountRef = ref(db, `${params.hawkerId}/dishes/sampleDishes/`);
    let data;
    onValue(dishesCountRef, (snapshot) => {
      data = snapshot.val();
      setState({ dishes: data, orders: {} });
    });
  };
  const addOrder = (key) => {
    //1. take a copy of the state
    const orders = { ...state.orders };
    //2. either add to the order, or update the number in our order
    orders[key] = orders[key] + 1 || 1;
    //3.call setState to update the object
    setState({
      ...state,
      orders,
    });
  };
  return (
    <div
      className=" flex flex-shrink-1 p-8
     relative bg-white shadow-md min-h-screen"
    >
      <div className=" p-4 border-8 border-double border-gray-900 flex-1">
        <FoodMenu className=" h-full" />
        <ul className="dishes">
          {state?.dishes !== undefined &&
            state?.dishes !== null &&
            Object.keys(state?.dishes).map((key) => (
              <Dish
                key={key}
                details={state.dishes[key]}
                addOrder={addOrder}
                index={key}
              ></Dish>
            ))}
        </ul>
      </div>
      <div className=" p-4 border-8 border-double border-gray-900 flex-1">
        <Order
          className=" h-full"
          dishes={state.dishes}
          orders={state.orders}
        />
      </div>
      <div className=" p-4 border-8 border-double border-gray-900 flex-1">
        <Inventory
          className=" h-full"
          addDish={addDish}
          loadSampleDishes={loadSampleDishes}
          uploadSampleData={uploadSampleData}
        />
      </div>
    </div>
  );
}
export default Main;
