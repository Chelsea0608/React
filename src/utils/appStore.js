
import cartReducer from "./createSlice";
import { configureStore } from '@reduxjs/toolkit'


const appStore = configureStore({
    reducer : {
        cart : cartReducer
    }
    
});

export default appStore;


// Create your appStore using configureStore from reduxtoolKit
// AppStore has reducer obj and in this obj we have different slices e.g. cartReducer
// In app.js use Provider from react-redux to Provide your appStore (store={appStore})
// Create your slice then
// createslice for cart using createSlice from redux-toolkit having name, initialState, reducers as its elements
// reducers have reducerFunctions for that slice taking state and action as the paraments
// export reducer and functions 

// To read the data from the cart useSelector hook (its subscribed to the cart)  { useSelector((store) => store.cart.items) }
//to use the reducer functions use the useDispatch hook;
//pass the reducer function u want to call inside this dispatch fucntion.

