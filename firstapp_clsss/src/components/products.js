import React from 'react';
import "./products.css"

const Products = (props) => {
    // console.log(props)
    // map((items, index) if unique not available=> {
    const renderProducts = props.Products.map((items) => {
        return (
            //index worst case than key={items.index}
            <div className="cards" key={items.id}>
                <img src={items.image} alt={items.name} />
                <div>
                    <div>{items.name}</div>
                    <div>{items.description}</div>
                    <div>{items.discount}</div>
                    <div>Rs.{items.cost}</div>
                </div>
            </div>
        )
    })
    return (
        <div className="outerbox">
            <h2>{renderProducts}</h2>
        </div>
    )
}
export default Products  