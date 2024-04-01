import "./App.css";
import Reservation from "./components/UserInterface/Haircuts/Reservation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/UserInterface/Home/Home";
import ProductDetail from "./components/UserInterface/Home/Products/ProductDetail";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
