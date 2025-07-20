import React, { useState } from "react";

const Header = (props) => {

    const [title] = useState("React Search Application");
    const [inputText] = useState("Search here !");
    const [Text, setText] = useState("User Text Here");
    // const [count, setCount] = useState(0);


    // const handleCount = (event) => {
    //     setCount(count + 1)
    // }

    const handleChange = (event) => {
        setText(event.target.value ? event.target.value : "User Text Here");
        props.SearchText(event.target.value)
    }

    const myStyle = {
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
        }
    }
    return (

        <header style={myStyle.header}>
            <div>
                <h2>{title}</h2>
                <input onChange={handleChange} type="text" placeholder={inputText} style={myStyle.input} />
                <div>{Text}</div>
                {/* <h3>{count}</h3>
                <button onClick={handleCount}>increase Counter</button> */}
            </div>

        </header >
    )
}






export default Header