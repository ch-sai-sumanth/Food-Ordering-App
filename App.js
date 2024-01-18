import React from "react";
import ReactDom from "react-dom";



const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

const RestaurentCard=()=>{
    return(
        <div className="res-card">
        <img className="res-logo" alt="res-logo" src="https://img.veenaworld.com/wp-content/uploads/2022/10/Famous-Foods-of-Mysore-%E2%80%93-Dishes-You-Should-Try-on-Your-Next-Vacation.jpg"/>
        <h3>Meghana Foods</h3>
        <h4>North Indian, Chinese</h4>
        <h5>4.4</h5>
    </div>
    )
}
  const Body=()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurentCard/>
            </div>
        </div>
    )
  }
const App=()=>{
    return(
       <div className="app">
         <Header/>
         <Body/>
       </div>
    );
};

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);