import React, { Component } from "react";
import Header from "./header"
import Footer from "./footer";
import Products from "./products";
import JSON from "./data.json"

class App extends Component {
    constructor() {
        super()
        this.state = {
            ProductsData: JSON,
            filteredProducts: JSON
        }
    }
    filterProducts = (keyword) => {
        let outputs = this.state.ProductsData.filter((data) => {
            return (
                data.name.toLowerCase().indexOf(keyword.toLowerCase()) > - 1
                ||
                data.description.toLowerCase().indexOf(keyword.toLowerCase()) > - 1

            )
        })
        this.setState({ filteredProducts: outputs })
    }
    render() {
        return (
            <div>
                <Header SearchText={(data) => { this.filterProducts(data) }} />
                <Products Products={this.state.filteredProducts} />
                <Footer month="july" year="2025 " />
            </div>
        )
    }
}
export default App