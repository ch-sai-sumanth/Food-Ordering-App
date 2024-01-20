import RestaurentCard from "./RestaurentCard"
import {resList} from "../utils/resList"
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { HYDLOC } from "../utils/const";
const Body=()=>{
  const [listOfRestaurents,setListOfRestaurents]=useState(resList );  //initially it has to be empty array and get the data from the live API response, set these values to data which is coming from live
  //we will update listOfRestaurents only one time , when we got data from live API
  const [filteredListOfRestaurents,setFilteredListOfRestaurents]=useState(resList);
  const [searchText,setSearchText]=useState("");
  // useEffect(() => {
  //   fetchData();
  // }, []);
  
  // const fetchData = async () => {
  //   const apiUrl = 'https://www.zomato.com/webroutes/search/home'; // Relative path
  //   const requestBody = HYDLOC;
  
  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(requestBody),
  //     });
  
  //     // Handle the response as needed (e.g., parsing JSON, updating state, etc.)
  //     const data = await response.json();
  //     console.log('Response data:', data);

  //         // here we will set the listOfRestaurents , filteredListOfRestaurent state variables using their respected set functions
  //         // setListOfRestaurent( data);
  //         // setFilteredRestaurent(data);


  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  
    return (listOfRestaurents.length===0 ? (<Shimmer/>) :(
        <div className="body">
            <div className="filter">

              <div className="search">
                <input type="text" value={searchText} onChange={(event)=>setSearchText(event.target.value)}/>
                <button className="search-btn" onClick={()=>{
                  const filteredListOfRestaurents=listOfRestaurents.filter( (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredListOfRestaurents(filteredListOfRestaurents);
                }}>Search</button>
              </div>

              <button className="filter-btn" onClick={ ()=>{
                const filteredListOfRestaurents=listOfRestaurents.filter( (res)=>(res.info.rating.aggregate_rating>4))
                setFilteredListOfRestaurents(filteredListOfRestaurents);
              }}>Top Rated Restaurents
              </button>
            </div>
                  
            <div className="res-container">
                {
                  filteredListOfRestaurents.map( (restaurent)=>(
                    <RestaurentCard key={restaurent.info.resId} resData={restaurent}/>
                  ))
                }
            </div>
        </div>
    )
    )
  }; 

  export default Body;