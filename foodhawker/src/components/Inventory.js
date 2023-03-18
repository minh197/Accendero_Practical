import React from 'react'
import AddFoodForm from './AddFoodForm';

function Inventory(props) {
  return (
    <div>
      <h2 className="text-center mt-0 mb-2">Inventory</h2>
      <AddFoodForm
        addDish={props.addDish}
      />
      <button
        className="bg-sky-50 hover:bg-cyan-300 text-center"
        // onClick={props.loadSampleDishes}
        onClick={props.uploadSampleData}

      >
        + Load Sample Dishes +
      </button>
    </div>
  );
}

export default Inventory