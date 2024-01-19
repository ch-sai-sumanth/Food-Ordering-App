const RestaurentCard=(props)=>{
    const data=props.resData.info;
    
     const resName=data.name;
     const imageURL=data.image.url;
     const rating=data.rating.aggregate_rating;
     const location=data.locality.name;
     const [cuisines]=data.cuisine;
     const deliveryTime=props.resData.order.deliveryTime;
        return(
            <div className="res-card">
            <img className="res-logo" alt="res-logo" src={imageURL}/>
            <h3>{resName}</h3>
            <h4>{cuisines.name}</h4>
            <h5>{rating}</h5>
            <h5>{location}</h5>
            <h5>{deliveryTime}</h5>
        </div>
        )
    }
    export default RestaurentCard;