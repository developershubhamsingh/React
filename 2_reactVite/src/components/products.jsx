import React from 'react';
import "./products.css";

const Products = (props) => {
    // console.log(props)
    const randerProducts = props.Products.map((items) => {
        return (
            // if no unique id then try with  index .
            <div className='cards' key={items.id}>
                <img src={items.image} alt={items.title} />
                <div>
                    <h4>{items.name}</h4>
                    <p>{items.description}</p>
                    <p>{items.uses}</p>
                    <p>Rs.{items.cost}</p>
                </div>

            </div>
        )
    })
    return (
        <div className='main'>
            {randerProducts}
        </div>
    )
}

export default Products
