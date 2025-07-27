import React from 'react'
import { useState, useEffect } from 'react'
import "./search.css"

const base_url = process.env.REACT_APP_URL

const Search = () => {
    // console.log(base_url)
    const [location, setlocation] = useState([])
    //anything ytouyt want on [page load] .
    //fetch axios promises async/await .
    // lifecycle :
    //componentWillMount :when first time  component loads.
    //componentDidUpdate :when state change happens .
    //componentWillUnMount :when we leave the component .

    useEffect(() => { }, [])
    return (
        <div className='search'>
            <div id='search-logo'>
                <span className='search-text'>D!</span>
            </div>
            <div className='heading'>Search Your Food Nearby !</div>
            <div className='dropdown'>
                <select className='city'>
                    <option>--- Select City ---</option>
                </select>
                <select className='restaurant'>
                    <option>--- Select Restaurant ---</option>
                </select>
            </div>
        </div>
    )
}

export default Search
