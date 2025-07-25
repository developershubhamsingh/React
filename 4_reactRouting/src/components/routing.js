import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header  from "./header"
import Mains   from "./main"
import Footer  from "./footer"
import Homes   from "./homes"
import Post    from "./post"
import Profile from "./profile"
import PostDetails from "./postDetails"

const NotFound = () => <h1 className='text-center'> 404 - Page Not Found</h1>

//Try 👆👆👆  or 👇👇👇 

// const NotFound = () => {
//     <div>
//         <h1 className='text-center'>404 - Page Not Found</h1>
//     </div>
// }

function Routing() {
    return (
        <BrowserRouter>
            <Header /> 
            <Routes>
                <Route path="/" element={<Mains />}>
                    <Route index element={<Homes />} />
                    <Route path="post" element={<Post />} />
                    <Route path="post/:topic" element={<PostDetails />} />
                    <Route path="profile" element={<Profile />} />
                    {/* catch all routes for 404 */}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing
