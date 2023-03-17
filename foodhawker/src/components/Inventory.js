import React from 'react'
import AddFoodForm from './AddFoodForm';

function Inventory(props) {
  return (
    <div>
      <h2 className="text-center mt-0 mb-2 font-normal font-Josefin">
        Inventory
      </h2>
      <AddFoodForm addDish = {props.addDish}/>
    </div>
  );
}

export default Inventory