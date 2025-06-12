import React from "react";
import "./products.css"

const Products = (props) => {
    //   console.log(props)
 const renderProducts =  props.DisplayData.map((items)=>{
    return(
        <div className="cards"key={items.id}>
           <img src={items.image} alt={items.name}/> 
           <div className="text">
            <p>{items.name}</p>
            <p>{items.description}</p>
            <p>{items.discount}</p>
            <p>Rs . {items.cost}</p>

            </div> 
        </div>
    )
 })


    return (
      <div className="outerbox">
           <div>{renderProducts}</div> 
        </div>
    )
}


export default Products;