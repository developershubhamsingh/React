import React, { Component } from "react";

class Header extends Component {
    //  constructor is the first thing that gets called in the class .
    //  It allow to define state .
    constructor() {
        // to make this keyword accessible  we have super method .
        super()
        this.state = {
            title: "React Search Application",
            inputText: "Search here !",
            Text: "User Text Here",
            count: 0
        }
    }
    myStyle = {
        header: {
            // height: "45px",
            backgroundColor: "green",
            textAlign: "center",
        },
        input: {
            border: "none",
            borderRadius: "7px",
            outline: "none",
            textAlign: "center",
            height: "25px",
            margin: "3px"
        },

    }
    // handleCount = (event) => {
    //     this.setState({ count: this.state.count + 1 })
    // }

    handleChange = (event) => {
        this.setState({ Text: event.target.value ? event.target.value : "User Text Here" });
        this.props.SearchText(event.target.value)
    }

    // class cannot return the value so we have render methods .
    render() {
        return (
            <header style={this.myStyle.header}>
                <h2>{this.state.title}</h2>
                <input onChange={this.handleChange} type="text" placeholder={this.state.inputText} style={this.myStyle.input} />
                <div>{this.state.Text}</div>
                {/* <h3>{this.state.count}</h3>
                <button onClick={this.handleCount}>increase Counter</button> */}
            </header>
        )
    }

}

export default Header