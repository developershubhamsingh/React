import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'


const PostDetails = () => {

  let Params = useParams()
  // console.log(Params)

  let [searchParams] = useSearchParams()
  //  console.log(SearchParams.getAll("page"))
  //  console.log(SearchParams.getAll("code"))

  return (
    <div className="panel panel-success">
      <div className="panel-heading">
        <h2>{Params.topic} Details </h2>
      </div>
      <div className="panel-body">
        <h3>Welcome to the {Params.topic} component!</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <h3 className='text-center'>You are in page Numbers {searchParams.getAll("page")} .</h3>
      </div>
    </div>
  )
}


export default PostDetails
