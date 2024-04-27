import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({categoryVal, showItemList, setshowIndex}) => {
    //const [showItemList, setshowItemList] = useState(false);

    const handleClick = () => {
        setshowIndex()

    }
    console.log(categoryVal.items)
    return (
        <div className=" text-center w-6/12 mx-auto my-4 p-4  bg-slate-300 shadow-md ">
             <div className="  flex justify-between cursor-pointer " onClick={()=>{
                handleClick();
             }}>
                <span className=" font-bold ">{categoryVal.name + " " + categoryVal?.items?.length}</span> 
                <span>⬇️</span>
            </div>


            <div >
             { showItemList &&  <ItemList items={categoryVal.items}/>  }
            </div>

        </div>
       
    )
}

export default ResCategory;