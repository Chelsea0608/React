import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/createSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const cart = useSelector((store) => store.cart.items)
    return (
        <div className=" ">
            <button className="content-center bg-slate-500 p-3 rounded-md" onClick={()=>{
                handleClearCart();
            }}>Clear Cart</button>

            <div className="text-center w-6/12 mx-auto my-4 p-4 bg-slate-300 shadow-md">
             <ItemList items={cart}></ItemList>
            </div>
        </div>
        
    )
}

export default Cart;