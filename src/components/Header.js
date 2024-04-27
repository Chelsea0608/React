import { useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{

  const {loggedInUser} = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items) //Subsribing to cart to read the data

    const [btntext,setbtntext] = useState("Login");
    return(
      <div className="flex justify-between bg-red-300 shadow-lg">
        <img className= "w-40 h-30" src={LOGO_URL}/>
        <ul className="flex p-4 m-4">
          <li className="m-2">
              <Link to="/">Home</Link> 
          </li>
          <li  className="m-2">
             <Link to="/about">About</Link> 
          </li>
          <li  className="m-2">
            <Link to="/contact">Contact</Link> 
          </li>

          <li className="m-2">
          <Link to="/cart">{"Cart " + cart.length}</Link>      
          </li>

          <li className="m-2">
          <button onClick={()=>{
            btntext==="Login"? setbtntext("Logout"):setbtntext("Login")
          }}>{btntext}</button>
          </li>
          <li className="m-2">
              {loggedInUser}
          </li>
         
        </ul>
      </div>
    )
  }

export default Header;