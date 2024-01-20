import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {RESTAURENT_MENU_API} from "../utils/const"

//shimmer
//useEffect

const RestaurentMenu=()=>{
    const [restaurantInfo,setRestaurantInfo]=useState(null);
    const [menu,setMenu]=useState([]);
    const {resId} =useParams();
    let name="";
    let areaName=""
    if(restaurantInfo)
    {
        name=restaurantInfo?.cards[0]?.card?.card?.info.name;
        areaName=restaurantInfo?.cards[0]?.card?.card?.info.areaName;
    }

    useEffect( ()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
    const data=await fetch(RESTAURENT_MENU_API+resId);
    const json=await data.json();
    
    
    const cards=json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const itemCards=(cards[2]?.card?.card?.itemCards || cards[3]?.card?.card?.itemCards);
    setMenu(itemCards);
    setRestaurantInfo(json?.data);
    // console.log(menu);
    }

    
    
    // const title=cards[2].card.card.title;

    // const itemName=cards[2].card.card.itemCards[0].card.info.name;
    // const imageId=cards[2].card.card.itemCards[0].card.info.imageId;
    // const price=cards[2].card.card.itemCards[0].card.info.defaultPrice
    // const rating=cards[2].card.card.itemCards[0].card.info.ratings.aggregatedRating.rating;
    // const ratingCount=cards[2].card.card.itemCards[0].card.info.ratings.aggregatedRating.ratingCount;

    // console.log();

    // console.log(cards);
    // setMenu(json);

    return(
        <div className="restaurent-menu">
            <h2>{name}   - {areaName}</h2>
            <ul>
               {menu.map( (item)=>(
                <li key={item.card.info.id}>{item.card.info.name} -  RS.{(item?.card?.info?.price)/100 || (item?.card?.info?.defaultPrice)/100}</li>
               ))}
            </ul>
        </div>
    )
}
export default RestaurentMenu;