import {RES_IMAGE_URL} from "../utils/const";
const RestaurentCard=(props)=>{
    console.log(props);
    const data=props.resData.info;
    
     const {name,cloudinaryImageId,costForTwo,cuisines,avgRating,locality}=data;
     console.log(cloudinaryImageId)
     const deliveryTime=data.sla.deliveryTime;
        return(
            <div className="res-card">
            <img className="res-logo" alt="res-logo" src={RES_IMAGE_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.name}</h4>
            <h5>{costForTwo}</h5>
            <h5>{avgRating}</h5>
            <h5>{locality}</h5>
            <h5>{ "Delivery Time : "+ deliveryTime +" mins"}</h5>
        </div>
        )
    }
    export default RestaurentCard;