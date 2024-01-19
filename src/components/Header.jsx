import {useState} from 'react';

const Header = () => {
  const [btnName,setBtnName]=useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg" alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=> {
              btnName==="Login" ? setBtnName("Logout"): setBtnName("Login")} }>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;