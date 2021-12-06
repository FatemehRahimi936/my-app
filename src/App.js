import "./App.css";
import Pardakht from "./components/Pardakht";

import CartPage from "./components/CartPage";

import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CartPage />} />
          <Route path="Pardakht" element={<Pardakht />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
