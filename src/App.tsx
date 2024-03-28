import './App.css'
import Reservation from './components/UserInterface/Haircuts/Reservation'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/UserInterface/Home/Home';
function App() {
  return (
      <BrowserRouter>
      <div>
        <Routes>
          
        <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </div>
    </BrowserRouter> 
  )
}

export default App
