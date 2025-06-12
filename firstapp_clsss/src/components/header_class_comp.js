import react, { Component } from "react";
import "./header.css"

class Header extends Component {
    // constructor is the first thing that gets called .
    constructor() {
        // whenever dealing with the class component , inide constructor we need to call the super method first. (to access the variable of the class by "this" keywords ). 
        super();
        // console.log("constructor called");

        // defining the state variable of the class component.
        this.state = {
            title: "React",
            searchText: "search text here !",
            count: 0
        };
    }
    // on click of abutton an event gets fired that is called synthytic bassed event .
    hendlecount = (event) => {
        // console.log(event)
        this.setState({ count: this.state.count + 1 });
    }
    handlechange = (event) => {
        // console.log(event.target.value);
        this.setState({ searchText: event.target.value });
        this.props.inputsearch(event.target.value);
    }
    /* function can returns the value , but class cannot directly returns the value. so we have randers methods and that will return the value */
    render() {
        // console.log("render called");
        return (
            <div>
                <header>
                    <div>{this.state.title}</div>
                    <input onChange={this.handlechange} />
                    <div className='text'>{this.state.searchText}</div>
                    <div>{this.state.count}</div>
                    <button onClick={this.hendlecount}>counter</button>
                </header>
            </div>
        )
    }
}
export default Header