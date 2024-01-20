import {useState} from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  const [btnName,setBtnName]=useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg" alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
              </li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=> {
              btnName==="Login" ? setBtnName("Logout"): setBtnName("Login")} }>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;