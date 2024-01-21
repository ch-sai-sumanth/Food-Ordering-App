import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {RESTAURENT_MENU_API} from "../utils/const"
import useRestaurentInfo from "../utils/useRestaurentInfo";

//shimmer
//useEffect

const RestaurentMenu=()=>{
    const {resId} =useParams();
    const [name,areaName,menu]=useRestaurentInfo(resId);
    
    if(menu===null)
         return <Shimmer/>
    return(
        <div className="restaurent-menu">
            <h2>{name}   - {areaName}</h2>
            <ul>
               { menu && menu.map( (item)=>(
                <li key={item.card.info.id}>{item.card.info.name} -  RS.{(item?.card?.info?.price)/100 || (item?.card?.info?.defaultPrice)/100}</li>
               ))}
            </ul>
        </div>
    )
}
export default RestaurentMenu;