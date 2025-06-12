import React, { Component } from "react";
import Header from "./Header"
import Footer from "./footer"
import Products from "./products"
import JSON from "./data.json"


class Apps extends Component {
    constructor() {
        super()
        this.state = {
            ProductsData: JSON,
            filter: JSON

        }
    }
    filterData = (keywords) => {
        let output = this.state.ProductsData.filter((data) => {
            return (
                data.name.toLowerCase().indexOf(keywords.toLowerCase()) > -1
             || data.description.toLowerCase().indexOf(keywords.toLowerCase()) > -1

            )
        })
        this.setState({ filter: output })
    }
    render() {
        return (
            <div>
                <Header inputsearch={(data) => { this.filterData(data) }} />
                <Products DisplayData={this.state.filter} />
                <Footer month="may" year="2025" />
            </div>
        )
    }
}

export default Apps