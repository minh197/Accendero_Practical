import "./App.css";
import StorePicker from "./components/StorePicker";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StorePicker />} />
        <Route path="/hawker/:hawkerId" element={<Main />} />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
