import { useParams } from "react-router-dom";
import  useRestaurantMenu   from "../utils/useRestaurnatMenu"
import ResCategory from "./ResCategory"
import { useState } from "react";

const RestaurantMenu = ()=>{

    const params = useParams();
    const resIndividualData = useRestaurantMenu(params.id);
    const [showIndex, setshowIndex] = useState(null);
    const categories = resIndividualData.map((restaurant) => restaurant?.info?.itemName[1]?.map( (val) => val.category ))
   


    return (
        <div>  
           {
                resIndividualData.map
                (
                    (restaurant) => <h1 className=" text-center font-bold my-10 " key={restaurant.info.id} > {restaurant.info.name} </h1>
                )    
            }
            {
                categories[0]?.map
                (
                    (category,index) => <ResCategory categoryVal = {category} showItemList = {index===showIndex ? true : false} setshowIndex={()=>{
                        
                        setshowIndex(index)
                    }}/>
                )    
            }
            {/* {
                resIndividualData.map
                (
                    (restaurant)=> <h1 key={restaurant?.info?.id}>
                        { restaurant?.info?.itemName[0]?.map( (res)=> <h2>{res.name}</h2>)} </h1>
                )
            } */}
        </div>
    )
}

export default RestaurantMenu;