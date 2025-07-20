import React, { useState } from "react";
import Header from "./header"
import Footer from "./footer";
import Products from "./products";
import JSON from "./data.json"

const App = () => {


    const [ProductsData] = useState(JSON)
    const [FilteredProducts, setFilteredProducts] = useState(JSON)

    const filterProducts = (keyword) => {
        let outputs = ProductsData.filter((data) => {
            return (
                data.name.toLowerCase().indexOf(keyword.toLowerCase()) > - 1
                ||
                data.description.toLowerCase().indexOf(keyword.toLowerCase()) > - 1

            )
        })
        setFilteredProducts(outputs)
    }
    return (
        <div>
            <Header SearchText={(data) => { filterProducts(data) }} />
            <Products Products={FilteredProducts} />
            <Footer month="july" year="2025 " />
        </div>
    )


}
export default App