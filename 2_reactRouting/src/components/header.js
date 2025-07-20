import React from 'react'
import { Link } from "react-router-dom"
const header = () => {
    return (
        <header>
            <h2>header </h2>
            <Link to="/">Home</Link>
            <Link to="/post">Post</Link>
            <Link to="/profile">Profile</Link>

        </header>
    )
}

export default header
