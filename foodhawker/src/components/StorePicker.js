import React, { useState } from "react";
import { useNavigate } from "react-router";

function StorePicker() {
  const navigate = useNavigate();
  const myInput = React.createRef();
  const [goToHawker, setGoToHawker] = useState(() => {
    function handleGoToHawker(event) {
      //stop the form from auto submit
      event.preventDefault();
      // get the text from the user's input
      const userInput = myInput.current.value;
      //change the page to /hawker/whatever-they-entered
      navigate(`hawker/${userInput}`);
    }
    return handleGoToHawker;
  });

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-400	">
      <div className=" max-w-500 mx-auto p-8 border-2 border-black flex justify-between">
        <form className="store-selector" onSubmit={goToHawker}>
          <h2>Please Enter The Name of Your Food Hawker</h2>
          <input
            ref={myInput}
            className="w-full border-2 bg-slate-200	 text-center"
            type="text"
            required
            placeholder="Hawker Name"
          />
          <button
            className="w-full text-center text-xl bg-sky-50 hover:bg-cyan-300"
            type="submit"
          >
            Visit Hawker
          </button>
        </form>
      </div>
    </div>
  );
}

export default StorePicker;
