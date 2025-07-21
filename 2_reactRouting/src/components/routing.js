import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./header"
import Mains from "./main"
import Footer from "./footer"
import Homes from "./homes"
import Post from "./post"
import Profile from "./profile"
// import PostDetails from "./postDetails"
 
const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Mains />} />
                <Route index element={<Homes />} />
                <Route path="post" element={< Post />} />
                <Route path="profile" element={< Profile />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing
