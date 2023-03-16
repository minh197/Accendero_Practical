import React from "react";

function StorePicker() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" max-w-500 mx-auto p-8 border-2 border-black flex justify-between">
        <form className="store-selector ">
          <h2 className="text-red-400	">
            Please Enter The Name of Your Food Hawker
          </h2>
          <input
            className="w-full border-2 bg-slate-200	 text-center"
            type="text"
            required
            placeholder="Hawker Name"
          ></input>
          <button
            className="w-full text-center text-xl bg-sky-50 hover:bg-cyan-300"
            type="submit"
          >
            Vist Hawker
          </button>
        </form>
      </div>
    </div>
  );
}

export default StorePicker;
