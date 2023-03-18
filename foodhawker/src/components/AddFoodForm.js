import React, { useState, useRef } from "react";

function AddFoodForm(props) {
  const [name, price, select, desc, image] = [
    useRef(""),
    useRef(""),
    useRef(""),
    useRef(""),
    useRef(""),
  ];

  const [createNewDish, setCreateNewDish] = useState(() => {
    function handleCreateNewDish(event) {
      //stop the form from auto submission
      event.preventDefault();
      const dish = {
        name: name.current.value,
        price: parseFloat(price.current.value),
        select: select.current.option,
        desc: desc.current.value,
        image: image.current.value,
      };
      props.addDish(dish);
      console.log(dish);
      console.log("This is select", select);
      //refresh the form
      console.log(event);
      event.target.reset();
    }
    return { handleCreateNewDish };
  });

  return (
    <div className="mb-20 border-2 border-black ">
      <form
        className="overflow-hidden flex flex-wrap dish-edit"
        onSubmit={createNewDish.handleCreateNewDish}
      >
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="focus:bg-yellow-200 w-1/3 p-10 text-base border-0 border-b-2 border-black rounded-none bg-white"
          ref={name}
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          className="focus:bg-yellow-200 w-1/3 p-10 text-base border-0 border-b-2 border-black rounded-none bg-white"
          ref={price}
        />
        <select
          name="status"
          className="focus:bg-yellow-200 w-1/3 p-10 text-base border-0 border-b-2 border-black rounded-none bg-white"
          ref={select}
          defaultValue="available"
          onSelect={props.handleSelectChange}
        >
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea
          name="desc"
          placeholder="Desc"
          className="focus:bg-yellow-200 w-full p-10 text-base border-0 border-b-2 border-black border-r-2 rounded-none bg-white"
          ref={desc}
        />
        <input
          name="image"
          type="text"
          placeholder="Image"
          className="focus:bg-yellow-200 w-full p-10 text-base border-0 border-b-2 border-black border-r-2 rounded-none bg-white"
          ref={image}
        />
        <button
          type="submit"
          className="bg-sky-50 hover:bg-cyan-300 w-full text-center"
        >
          + Add New Dish
        </button>
      </form>
    </div>
  );
}

export default AddFoodForm;
