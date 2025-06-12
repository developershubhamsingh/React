import React, { Component } from 'react';
import Home from './home';
import Header from "./header_class_comp"
import Footer from './footer';
import ProductsDisplay from "./products"
import JSON from "./data.json"

class App extends Component {
    constructor() {
        super()
        this.state = {
            Productsdata: JSON,
            filter: JSON
        }
    }
    filterdata = (keywords) => {
        let output = this.state.Productsdata.filter((data) => {
            return (
                data.name.toLowerCase().indexOf(keywords.toLowerCase()) > - 1
            )
        })
        this.setState({ filter: output })
    }
    render() {
        return (
            <div>
                {/* <Header inputsearch={(data)=>{console.log(`input text ${data}`)}}/> */}
                <Header inputsearch={(data) => { this.filterdata(data) }} />
                <ProductsDisplay Products={this.state.filter} />
                <Footer month="may" year="2025 " />
            </div>
        )
    }
}

export default App;