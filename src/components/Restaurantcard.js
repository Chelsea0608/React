import { useContext } from "react";
import { RES_IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Restaurantcard = ({resData}) => {
    const {loggedInUser} = useContext(UserContext);
    return(
      <div className="rounded-md w-70 m-5  p-5  bg-slate-300 ">
        <img className=" img" src={RES_IMG_URL + resData.info.cloudinaryImageId}/>
        <h3 className=" text-wrap ">{resData.info.name}</h3>
        <h4 className="flex flex-wrap" >{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating}</h4>
        <h4>{loggedInUser}</h4>
      </div>
    )
  }

export const restaurantcardPromoted = (Restaurantcard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute w-30 bg-black text-slate-200 m-3 ml-8 mt-4 p-1 rounded-md">Promoted</label>
          <Restaurantcard {...props}/>
        </div>
       
      )
    }
  }



export default Restaurantcard;







