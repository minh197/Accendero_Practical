import FoodMenu from "./FoodMenu";
import Inventory from "./Inventory";
import Order from "./Order";
function Main() {
  return (
    <div
      className=" flex flex-shrink-1 p-8
     relative bg-white shadow-md min-h-screen"
    >
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
export default Main;
