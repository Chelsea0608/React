import { useDispatch } from "react-redux"
import { addItem } from "../utils/createSlice";


const ItemList = ({items}) => {

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    
    return (
        <div>
            {items?.map((item) =>  
            <div className="flex justify-between py-4 border-b-2">
                {item?.name}
                <button onClick={()=>{
                    handleAddItem(item);
                }} >Add+</button>
            </div> 
            )}
            
        </div>
    )
}

export default ItemList;