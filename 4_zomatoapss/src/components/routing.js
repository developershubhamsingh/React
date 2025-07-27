import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./header"
import Footer from "./footer"
import Homes from "./Homes/homes"
import Mains from "./mains"

// const NotFound = () => {
//     return (
//         <h2> 404 - Page Not Found</h2>
//     )
// }
const NotFound = () => <h2> 404 - Page Not Found</h2>

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Mains />}>
                    <Route index element={<Homes />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing
