import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Restaurantcomponent from './components/Restaurantcomponent';
//import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';




const App = () =>{

  const [userName, setuserName] = useState();

  useEffect(()=>{
    const data = "John Doe"
    setuserName(data);
  },[])

  return(
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName, setuserName}}>
        <div className='app'>
        <UserContext.Provider value={{loggedInUser:"Melisa"}}>
            <Header/>
        </UserContext.Provider>
          <Outlet/>
        </div>
      </UserContext.Provider>
    </Provider>     
  )
}

const About = lazy (()=> import("./components/About"));


//const About = lazy(() => import("./components/About"));


const approute = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children :[
      {
        path : "/",
        element : <Restaurantcomponent/>
      },
      {
        path : "/about",
        element : <Suspense fallback={<Shimmer/>}>
                    <About/>
                  </Suspense>
      },
      {
        path : "/contact",
        element: <Contact/>
      },
      {
        path : "/restaurant/:id",
        element: <RestaurantMenu/>
      },
      {
        path : "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  }

])
               

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approute}/>);

