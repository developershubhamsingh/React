import React from 'react';
import "./style.css"

// functions can return the value 
const Header = () => {
    return (
        //one function return 1 value at a time so it need a wrapper in case we have n no of content . 
        <header>
            <div id='logo'>New Learner</div>
            <input type='text' placeholder='search here !'/>
            <div className='searchText'>Search Text here</div>
        </header>

    )
}
export default Header;





// const Header = () => {
//     const myStyle = {
//         header: {
//             backgroundColor: "green",
//             textAlign:"center"
//         }
       
//     }

//     return (
//         //one function return 1 value at a time so it need a wrapper in case we have n no of content . 
//         <header style={myStyle.header}></header>