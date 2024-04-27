import { useState } from "react";

const Contact = ()=>{
    const [counter, setCounter] = useState(15);
    const incrementValue = () => {
       

       setCounter((counter)=>
        counter+1
       )
       setCounter((counter)=>
        counter+1
       )
       setCounter((counter)=>
        counter+1
       )
    }
    return (
        <div>


       
        <h2>Counter Value: {counter}</h2>
        <button onClick={()=>{
            incrementValue()
        }}>Increment Value {counter}</button> 


             <h1 className=" text-xl font-bold ">Contact us on</h1>
             <form>
                <input className=" border border-black rounded-md m-4 p-2" placeholder="name" type="text">
                </input>
                <input  className=" border border-black rounded-md m-4 p-2" type="text" placeholder="message">
                </input>
                <button className=" border border-black rounded-md m-4 p-2 bg-slate-500 ">
                    Submit
                </button>
             </form>
        </div>
       
    )
}

export default Contact;


