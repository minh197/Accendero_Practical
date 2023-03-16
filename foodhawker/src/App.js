import logo from './logo.svg';
import './App.css';
import StorePicker from './components/StorePicker';
import FoodMenu from './components/FoodMenu';
import Inventory from './components/Inventory';
import Order from './components/Order';
function App() {
  return (
    <div
      className=" flex flex-shrink-1 p-8
     relative bg-white shadow-md min-h-screen"
    >
      {/* <StorePicker/> */}
      <div className="w-1/3 p-4 h-full border-8 border-double border-gray-900">
        <FoodMenu />
      </div>
      <div className="w-1/3 p-4 h-full border-8 border-double border-gray-900">
        <Inventory />
      </div>
      <div className="w-1/3 p-4 h-full border-8 border-double border-gray-900">
        <Order />
      </div>
    </div>
  );
}

export default App;
