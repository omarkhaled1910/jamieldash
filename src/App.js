import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import CentersMang from "./Pages/CentersMang";
import Center from "./Pages/Center";
import OredersMang from "./Pages/OredersMang";
import Order from "./Pages/Order";
import ServicesMang from "./Pages/ServicesMang";
import Settings from "./Pages/Settings";
import { Drawer } from "@mui/material";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <div className="sidemenu-con">
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="sidemenuitem-1">DashBoard</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/centers">
          <div className="sidemenuitem">centers</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/orders">
          <div className="sidemenuitem">Orders</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/services">
          <div className="sidemenuitem">Services</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/settings">
          <div className="sidemenuitem">Settings</div>
        </Link>
      </div>
      {
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/centers" element={<CentersMang />}></Route>
          <Route path="/center/:id" element={<Center />} />
          <Route path="/orders" element={<OredersMang />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/services" element={<ServicesMang />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      }
    </div>
  );
}

export default App;
