import RestaurentCard from "./RestaurentCard"
import {resList} from "../utils/resList"
import { useState } from "react";
const Body=()=>{
  const [listOfRestaurents,setListOfRestaurents]=useState(resList);
    return(
        <div className="body">
            <button className="filter-btn" onClick={ ()=>{
              const filteredResList=resList.filter( (res)=>(res.info.rating.aggregate_rating>4))
              setListOfRestaurents(filteredResList);
            }}>
                  Top Rated Restaurents
                  </button>
            <div className="res-container">
                {
                  listOfRestaurents.map( (restaurent)=>(
                    <RestaurentCard key={restaurent.info.resId} resData={restaurent}/>
                  ))
                }
            </div>
        </div>
    )
  };

  export default Body;