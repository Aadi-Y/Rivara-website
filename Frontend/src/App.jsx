import Landing from "./Landing/Landing";
import Navbar from "./Navbar/Navbar";
import Shirt from "./Mens/ShirtSection";
import Pant from "./Mens/PantSection";
import Tshirt from "./Mens/TshirtSection";
import Trouser from "./Mens/TrouserSection";
import Perfume from "./Perfumes/PerfumeSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import About from "./About/About";
import Card from "./Cards/Card";
import Admin from "./Admin/Admin";
import Delivery from "./Delivery/AddressManager";
import Checkout from "./Checkout/Checkout";
import Order from "./Orders/Orders";
import MyOrders from "./Orders/MyOrders";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/shirt" element={<Shirt />}></Route>
          <Route path="/pant" element={<Pant />}></Route>
          <Route path="/tshirt" element={<Tshirt />}></Route>
          <Route path="/trouser" element={<Trouser />}></Route>
          <Route path="/perfume" element={<Perfume />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/address" element={<Delivery />}></Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
