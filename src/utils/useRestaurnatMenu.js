import { useEffect, useState } from "react"
import resdata from "./individualResData";

const useRestaurantMenu = (params) =>{
    const [resIndividualData, setresIndividualData] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const json1 = resdata;
        const resdataval = json1.filter((restaurant)=>(restaurant.info.id==params))
        setresIndividualData(resdataval);
        console.log(resdataval);
    }
    
    return resIndividualData;
}

export default useRestaurantMenu;