import React, { useState } from "react";
import "./header.css"

const Header = (props) => {
    const [title] = useState("React");
    const [searchText, setsearchText] = useState("search text here !");
    const [count, setcount] = useState(0);

    const handleChange = (event) => {
        console.log(event)
        setsearchText(event.target.value)
        props.inputsearch(event.target.value)
    }
    const handleCount = () => {
        setcount(count + 1)
    }

    return (
        <header>
            <h2>{title}</h2>
            <input onChange={handleChange} />
            <p>{searchText} </p>
            <p>{count}</p>
            <button onClick={handleCount}>Counter</button>
        </header>

    )
}
export default Header
