import React from "react";
import "./products_display .css"

const products = (props) => {
    // console.log(props)

    const render_products = props.ProductsDisplay.map((items) => {
        //if dont have unique key then give index as key .
        return (
            <div className="card" key={items.id}>
                <img src={items.image} alt={items.name} />
                <div>
                    <h3>{items.name}</h3>
                    <p>{items.description}</p>
                    <p>{items.uses}</p>
                    <p>Rs: {items.cost}</p>
                </div>
            </div>
        )
    })


    return (
        <div className="main">
            {render_products}
        </div>
    )
}

export default products