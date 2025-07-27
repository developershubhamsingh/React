import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {

    return (
        <footer>
            <p className='c_rights'>&copy; zomato delivery services.</p>

            <div>
                <ul>
                    <Link><li>Orders </li></Link>
                    <Link> <li>Gallary</li></Link>
                </ul>
            </div>
            <div>
                <ul>
                    <Link><li>Bike on Rent </li></Link>
                    <Link><li>Work Here !</li></Link>
                </ul></div>
            <div className='noBorder'>
                <ul>
                    <Link><li>complaints </li></Link>
                    <Link><li>Reviews</li></Link>
                </ul></div>


        </footer>
    )
}

export default Footer
