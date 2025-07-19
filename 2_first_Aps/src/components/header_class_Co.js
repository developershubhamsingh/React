import React, { Component } from 'react';
import "./style.css"

class Header extends Component {
    // constructor is the first thing that gets called in the class .
    constructor(){
       // we define state through this keywords and to make   this keyword accessible we have super methods.
        super()
        this.state={
            titleText:"React Search Application",
            inputBoxText:"search here !",
            searchText:"Search Text here",
            count : 0,
        }
    }
    handleCount =(event)=>{
        console.log(event)
        this.setState({count: this.state.count + 1})
    }
    handleChange = (event)=>{
        console.log(event)
        this.setState({searchText:event.target.value})
    }
    render(){
        console.log("render")
        return(
            <header>
             <div id='logo'>{this.state.titleText}</div>
             <input type='text' placeholder={this.state.inputBoxText} onChange={this.handleChange}/>  
             {/* <div className='searchText'> {this.state.searchText}</div> */}
               <div className='searchText'>{this.state.searchText.trim() !== "" ? this.state.searchText : "User text here"}</div>
             <div>{this.state.count}</div>
             <button onClick={this.handleCount}>Counter</button>
        </header> 
        )
    }
}
export default Header

// this.state.searchText.trim() !== ""	
// 👉 अगर यूज़र ने कुछ टाइप किया है (space छोड़कर भी) ? this.state.searchText	
// 👉 तो वही टाइप किया हुआ टेक्स्ट दिखाओ: "User text here"	
// 👉 वरना "User text here" को default टेक्स्ट की तरह दिखाओ
