import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
    return (

        <div className="panel panel-success">
            <div className="panel-heading">
                <h2>Post </h2>
            </div>
            <div className="panel-body">
                <h3>Welcome to the Post component!</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <h2>React</h2>
                <Link to="/post/React?page=1&code=100" className='btn btn-success'>Details</Link>
                <h2>Node</h2>
                <Link to="/post/Node?page=2&code=200" className='btn btn-success'>Details</Link>
                <h2>Mongo</h2>
                <Link to="/post/Mongo?page=3&code=300" className='btn btn-success'>Details</Link>
            </div>
        </div>
    )
}

export default Post
