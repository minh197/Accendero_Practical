import logo from "./logo.svg";
import "./App.css";
import StorePicker from "./components/StorePicker";
import FoodMenu from "./components/FoodMenu";
import Inventory from "./components/Inventory";
import Order from "./components/Order";
function App() {
  return (
    <div
      className=" flex flex-shrink-1 p-8
     relative bg-white shadow-md min-h-screen"
    >
      {/* <StorePicker /> */}
      <div className=" p-4 border-8 border-double border-gray-900 flex-1">
        <FoodMenu className=" h-full" />
      </div>
      <div className=" p-4 border-8 border-double border-gray-900 flex-1">
        <Inventory className=" h-full" />
      </div>
      <div className=" p-4  border-8 border-double border-gray-900 flex-1">
        <Order className=" h-full" />
      </div>
    </div>
  );
}

export default App;
