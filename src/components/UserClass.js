import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            name : "",
        }
        console.log("child constructor")
    }

    async componentDidMount (){
        console.log("compoment did mount")
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json()
        console.log(json)

        this.setState({
            name : json.name
        })
    }

    componentDidUpdate(){
        console.log("compoment did update")
    }

    componentWillUnmount(){
        console.log("Componet unmounted")
    }

    render(){
        const {name} = this.state;
        const {count} = this.state;
        console.log("child render")
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

export default UserClass;