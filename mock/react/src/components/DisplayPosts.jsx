import React from 'react'
import FetchPosts from './FetchPosts'
 

const DisplayPosts = () => {

  return (
    <div>
      <FetchPosts  title={Posts.title} body={Posts.body}/>
    </div>
  )
}

export default DisplayPosts
