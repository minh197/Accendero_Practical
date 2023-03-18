import React, { useState, useEffect, useRef, useCallback } from "react";
import FoodMenu from "./FoodMenu";
import Inventory from "./Inventory";
import Order from "./Order";
import { useParams } from "react-router-dom";
import { sampleDishes } from "../sampleDishes";
import Dish from "./Dish";
import { db } from "../base";
import { ref, onValue, set, get, update } from "firebase/database";

function Main() {
  const [state, setState] = useState({
    dishes: {},
    orders: {},
    totalPrice: 0,
  });

  console.log(state.totalPrice);

  const params = useParams();
  const icountRef = useRef(0);
  const loadSampleRef = useRef(false);

  const uploadSampleData = () => {
    loadSampleRef.current = true;
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

  const addDish = (dish) => {
    let obj = { length: 0 };
    Object.keys(state?.dishes).forEach((key) => {
      obj.length = obj.length + 1;
    });
    if (params.hawkerId) {
      set(
        ref(
          db,
          `${params.hawkerId}/dishes/inventoryDishes/idish${
            icountRef.current + 1
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

  useEffect(() => {
    const dishesRef = ref(db, `${params.hawkerId}/dishes/inventoryDishes/`);
    let data;
    onValue(dishesRef, (snapshot) => {
      let icount = 0;
      data = snapshot.val();
      if (data !== null && data !== undefined) {
        Object.keys(data).forEach((key) => {
          icount += 1;
        });
      }
      icountRef.current = icount;
      setState((prev) => {
        return {
          dishes: data,
          orders: { ...prev.orders },
          totalPrice: prev.totalPrice,
        };
      });
      console.log(loadSampleRef.current);
      if (loadSampleRef.current === true) {
        loadSampleDishes();
      }
    });
  }, [params.hawkerIdm]);

  const loadSampleDishes = () => {
    const dishesRef = ref(db, `${params.hawkerId}/dishes/sampleDishes/`);
    let data;
    onValue(dishesRef, (snapshot) => {
      data = snapshot.val();
      setState((prev) => {
        return {
          dishes: { ...data, ...prev.dishes },
          orders: { ...prev.orders },
          totalPrice: prev.totalPrice || 0,
        };
      });
    });
  };

  useEffect(() => {
    const orderRef = ref(db, `${params.hawkerId}/orders/`);
    let data;
    onValue(orderRef, (snapshot) => {
      data = snapshot.val();
      setState((prev) => {
        return {
          dishes: { ...prev.dishes },
          orders: { ...data },
          totalPrice: prev.totalPrice,
        };
      });
    });
  }, [params.hawkerIdm]);

  useEffect(() => {
    const priceRef = ref(db, `${params.hawkerId}/orders/totalPrice`);
    let data;
    onValue(priceRef, (snapshot) => {
      data = snapshot.val();
      console.log(data);
      console.log(state.totalPrice);
      if (data === null || data === undefined) {
        return;
      }
      setState((prev) => {
        return {
          dishes: { ...prev.dishes },
          orders: { ...prev.dishes },
          totalPrice: data.totalPrice || 0,
        };
      });
    });
  }, [params.hawkerIdm]);

  const addOrder = (key) => {
    let dish = state.dishes[key];

    const dishRef = ref(db, `${params.hawkerId}/orders/${key}`);
    const priceRef = ref(db, `${params.hawkerId}/orders/totalPrice`);
    get(dishRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // Document exists
          const data = snapshot.val();
          update(dishRef, { quantity: data?.quantity + 1 });
          console.log(state.totalPrice);
          console.log(dish?.price);
          update(priceRef, { totalPrice: state.totalPrice + dish?.price });
        } else {
          dish.quantity = 1;
          set(dishRef, dish);
          console.log(state.totalPrice);
          console.log(dish?.price);
          update(priceRef, { totalPrice: state.totalPrice + dish?.price });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className=" flex flex-shrink-1 p-8 relative bg-white shadow-md min-h-screen">
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
        {state?.orders !== undefined && state?.orders !== null && (
          <Order
            className=" h-full"
            orders={state?.orders}
            totalPrice={state?.totalPrice}
          />
        )}
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
