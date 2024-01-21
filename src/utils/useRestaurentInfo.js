import { useState,useEffect } from "react";
import { RESTAURENT_MENU_API } from "./const";


const useRestaurentInfo=(resId)=>
{
    const [menu, setMenu]=useState(null);
    const [resInfo,setResInfo]=useState(null);
    let name="";
    let areaName="";
    
    if(resInfo)
    {
        name=resInfo?.cards[0]?.card?.card?.info.name;
        areaName=resInfo?.cards[0]?.card?.card?.info.areaName;
    }

    useEffect( ()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch(RESTAURENT_MENU_API+resId);
        const json=await data.json();
        setResInfo(json.data);
        
        const cards=json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const itemCards=(cards[2]?.card?.card?.itemCards || cards[3]?.card?.card?.itemCards);
        setMenu(itemCards);
    }
    
    return [name,areaName,menu];
}
export default useRestaurentInfo;