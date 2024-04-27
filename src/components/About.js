import React from "react";
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";


// const About = ()=>{
//     return (
//         <div>
//              <h1>About Uss!</h1>
//              <h2>We are a food delivery App</h2>
//              <UserClass name={"Chelsea Dabre"}/>
//         </div>
       
//     )
// }

class About extends React.Component {
    constructor (){
        super();
        console.log("Parent constructor")
    }

    componentDidMount (){
        console.log("Parent class did mount")
    }

    render() {
        console.log("Parent render")
        return (
            <div>
                <h1>About Uss!</h1>
                 <h2>We are a food delivery App</h2>
                 <UserClass name={"Chelsea Dabre"}/>
                 {/* <UserClass2 name={"Elon Musk"}/> */}
            </div>
        )
    }
}



export default About;




// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/