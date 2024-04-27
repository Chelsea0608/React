import React from "react"

class UserClass2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
        console.log("child2 constructor")
    }

    componentDidMount (){
        console.log("Child2 class did mount")
    }

    render(){
        const {name} = this.props;
        const {count} = this.state;
        console.log("child2 render")
        return(
            <div>
                <h1>{name}</h1>
                <button className=" bg-slate-500 " onClick={()=>{
                    this.setState({
                        count : this.state.count+1
                    })
                }}>Count {+ " " + count}</button>
            </div>
        )
    }
}

export default UserClass2;