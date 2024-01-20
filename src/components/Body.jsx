import RestaurantCard from "./RestaurantCard"
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGYAPI } from "../utils/const";
const Body=()=>{
  const [listOfrestaurants,setListOfrestaurants]=useState([] );
  const [filteredListOfrestaurants,setFilteredListOfrestaurants]=useState([]);
  const [searchText,setSearchText]=useState("");
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const apiUrl = SWIGGYAPI; 

      const response=await fetch(apiUrl);
      const json = await response.json();
      const cards=json.data.cards;
      const restaurantList=cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setListOfrestaurants(restaurantList);
      setFilteredListOfrestaurants(restaurantList);
  };

  
    return (listOfrestaurants.length===0 ? (<Shimmer/>) :(
        <div className="body">
            <div className="filter">

              <div className="search">
                <input type="text" value={searchText} onChange={(event)=>setSearchText(event.target.value)}/>
                <button className="search-btn" onClick={()=>{
                  const filteredListOfrestaurants=listOfrestaurants.filter( (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredListOfrestaurants(filteredListOfrestaurants);
                }}>Search</button>
              </div>

              <button className="filter-btn" onClick={ ()=>{
                const filteredListOfrestaurants=listOfrestaurants.filter( (res)=>(res.info.avgRating>4))
                setFilteredListOfrestaurants(filteredListOfrestaurants);
              }}>Top Rated restaurants
              </button>
            </div>
                  
            <div className="res-container">
                {
                  filteredListOfrestaurants.map( (restaurant)=>(
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} ><RestaurantCard resData={restaurant}/></Link>
                  ))
                }
            </div>
        </div>
    )
    )
  }; 

  export default Body;