import RestaurentCard from "./RestaurentCard"
import {resList} from "../utils/resList"
const Body=()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                  resList.map( (restaurent)=>(
                    <RestaurentCard key={restaurent.info.resId} resData={restaurent}/>
                  ))
                }
            </div>
        </div>
    )
  };

  export default Body;